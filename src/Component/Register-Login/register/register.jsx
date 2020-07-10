import React from 'react';
import '../login/login.scss';
import '../register/register.scss';

class Register extends React.Component{
    constructor(props){
        super(props)
        this.state={
            errors:[],
            usernameReg:"",
            passwordReg:"",
            passwordConfirmReg:"",
            name:"",
            mobileNumber:"",
            email:"",
            message:"",
            status:"",
        };
    }
    

    submitRegister = (e)=>{
        e.preventDefault();  
        var data = {
            username: this.state.usernameReg,
            password:this.state.passwordReg,
            confirmPassword:this.state.passwordConfirmReg,
            name:this.state.name,
            mobileNumber:this.state.mobileNumber,
            email:this.state.email
        }
        fetch("http://localhost:7000/register", {
            headers: {
                'Content-Type': 'application/json'
                },
            method:"POST",
            body: JSON.stringify(data)
        })
        .then((response)=>{ 
            this.setState({status:response.status})
            return response.json();   
        })
        .then((dataRes)=>{ 
            console.log(dataRes);
            console.log(dataRes.data)
            this.setState({errors:dataRes.data,message:dataRes.message});
        })
        .catch(
            console.log('err')
        )
    }

    handleUsername = (e)=>{
        this.setState({usernameReg: e.target.value});
    }
    handlePass = (e)=>{
        this.setState({passwordReg: e.target.value});
     }
    handleConfirmPass = (e)=>{
        this.setState({passwordConfirmReg: e.target.value});
    }
    handleName = (e)=>{
        this.setState({name: e.target.value});
    }
    handlemobileNumber = (e)=>{
        this.setState({mobileNumber: e.target.value});
    }
    handleEmailChange = (e)=>{
        this.setState({email: e.target.value});
    }

    render(){
        const styleError={
            color:"red",
            textAlign:"right"
        };
        const styleSeccess={
            color:"green",
            textAlign:"center",
            marginBottom: "2rem",
            fontSize:"2rem"
        };

        return(
            <div>
                <div style={styleError}>
                    {this.state.errors ?  
                        this.state.errors.map(element => (element.msg))
                        :""
                    }
                </div>
                {/* <div style={styleSeccess}> */}
                    {this.state.status==200 || this.state.status==201 ? <div style={styleSeccess}>{this.state.message}</div>:""}
                {/* </div> */}
                <div className="login">
                    <div className="login__header">
                        ثبت نام
                    </div>
                    <form className="needs-validation login__box register__box" id="myRegisterForm">
                        <div className="row">
                            <input className='login__input' type="text" name="username" placeholder="نام کاربری" required  minLength="5" value={this.state.usernameReg} onChange={this.handleUsername} />
                            <input className='login__input' type="password" name="password" placeholder="پسورد" required  minLength="5" value={this.state.passwordReg} onChange={this.handlePass} />
                            <input className='login__input' type="password" name="confirmPassword" placeholder="تایید پسورد" required  minLength="5" value={this.state.passwordConfirmReg} onChange={this.handleConfirmPass} />
                            <input className='login__input' type="text" name="name" placeholder="نام و نام خوانوادگی" required value={this.state.name} onChange={this.handleName} />
                            <input className='login__input' type="text" name="mobileNumber" placeholder="شماره موبایل" required  minLength="11" value={this.state.mobileNumber} onChange={this.handlemobileNumber} />
                            <input className='login__input' type="email" name="email" placeholder="ایمیل" required value={this.state.email} onChange={this.handleEmailChange} />
                        </div>
                        <button className="login__btn" onClick={this.submitRegister.bind(this)}>ثبت نام</button>
                    </form>
                </div>
            </div>
                
        )
    }
}
export default Register;