import  React from 'react';
import  './Register-Login.scss';
// import Spinner from '../UI/spinner/spinner';
import Login from './login/login';
import Register from './register/register';

class RegLog extends React.Component{
    constructor(props){
        super(props)
        this.state={
            isLoginOpen:false,
            isRegisterOpen:true,
        };
    }
    
    showLoginBox(e){
        this.setState({isLoginOpen:true,isRegisterOpen:false});

    }
    showRegisterBox(e){
        this.setState({isLoginOpen:false,isRegisterOpen:true});
    }

    render() {
        return(
            <div className="root-container">
                <div className="box-controller">
                    <div className={"controller" + (this.state.isLoginOpen ? " selected-controller" : "")} onClick={this.showLoginBox.bind(this)}>
                        ورود
                    </div>
                    <div className={"controller" + (this.state.isRegisterOpen ? " selected-controller" : "")} onClick={this.showRegisterBox.bind(this)}>
                        ثبت نام
                    </div>
                </div>
                <div className="box-container">
                    {this.state.isLoginOpen && <Login/>}
                    {this.state.isRegisterOpen && <Register/>}
                </div>
            </div>
        );
    }
}
//////////////////////////////////////////////////////////////
// class ChangePassword extends React.Component{
//     constructor(props){
//         super(props)
//         this.state={
//             email:"",
//             pass:"",
//             message:""
//             // errorsT:""
//         }
//     }
//     submitChangepass(e){
//         e.preventDefault(); 
//         const frm=document.getElementById('myform')
//         if(frm.checkValidity()==false){
//             frm.classList.add("was-validated")
//             // frm.addClass("was-validated")
//         }
//         else{
//             frm.classList.add("was-validated")
//             var data = {
//                 email:this.state.email,
//                 password:this.state.pass
//             }
//             fetch("http://localhost:8000/ForgotPassword", {
//                 method:"PUT",
//                 headers: {
//                     // 'Authorization': token ? `Bearer ${token} `: '',
//                     'Content-Type': 'application/json'
//                 },
//                 body:JSON.stringify(data)
                
//             })
//             .then((response)=>{ 
//                 return response.json();   
//             })
//             .then((dataRes)=>{ 
//                 // console.log(dataRes.data)
//                 this.setState({
//                     // errorsT:dataRes.data,
//                     message:dataRes.message
//                 })
//                 console.log(dataRes)
//             })
//             .catch(
//                 console.log('err')
//             )
//         }
        
//     }
//     handleEmail = (e)=>{
//         this.setState({email: e.target.value});
//     }
//     handlePass = (e)=>{
//         this.setState({pass: e.target.value});
//     }

//     render(){
//         const style={
//             marginTop:'50px',
//             color:"black"
//         }


//         return(
//             <div>
//                 <div className="container-fluid">
//                     <div className="row">
//                         <h6 className="col-sm-12 cent bg-white" style={{color:"black"}} >
//                         <br/>
//                         نشانی ایمیل خود را وارد کنید پسورد جدید برای شما در نظر گرفته میشود
//                         {/* نشانی ایمیل خود را‌ وارد نمایید. از طریق ایمیل، پیوندی برای ساختن رمز عبور تازه دریافت خواهید نمود. */}
//                         <br/>
//                         </h6>
//                     </div>
//                     <div>
//                         <h3 className="cent" style={{color:"#521751",marginTop:"30px"}}>{this.state.message}</h3>
//                     </div>
//                     <div className="row cent" style={style} >
//                         {/* <div className="col-sm-4"></div> */}
//                         <div className="col-sm-12 frm">
//                             <form id="myform">
//                                 <div className="form-group row">
//                                     <div className="col-sm-3 mt-3">
//                                         {/* <i className="fa fa-user" style={style2} ></i> */}
//                                         <label for="email" >ایمیل</label>
//                                     </div>
//                                     <div className="col-sm-9">
//                                         <input className="form-control" type="email" id="email" name="email"  placeholder="ایمیل" onChange={this.handleEmail} required />
//                                     </div> 
//                                     <div className="valid-feedback">valid</div>
//                                     <div className="invalid-feedback">invalid</div>                               
//                                 </div>
//                                 <div className="form-group row">
//                                     <div className="col-sm-3 mt-3">
//                                         {/* <i className="fa fa-user" style={style2} ></i> */}
//                                         <label for="password" >پسورد</label>
//                                     </div>
//                                     <div className="col-sm-9">
//                                         <input className="form-control" id="password" type="password"  name="password" placeholder="پسورد" onChange= {this.handlePass} required />
//                                     </div> 
//                                     <div className="valid-feedback">valid</div>
//                                     <div className="invalid-feedback">invalid</div>                               
//                                 </div>
//                                 {/* <div className="input-group mt-2 mb-5">
//                                     <label>ایمیل</label>
//                                     <input type="email"  name="email" placeholder="ایمیل" onChange= {this.handleEmail} required />
//                                 </div>
//                                 <div className="input-group mt-2 mb-5">
//                                     <label>پسورد</label>
//                                     <input type="password"  name="password" placeholder="پسورد" onChange= {this.handlePass} required />
//                                 </div> */}
//                                <button className="btn btn_style2 mt-5" onClick={this.submitChangepass.bind(this)}>تغییر رمز </button>
//                             </form>
//                         </div>
//                         {/* <div className="col-sm-4"></div> */}
//                     </div>
//                 </div>
//             </div>

//         )
//     }
// }
//////////////////////////////////////////////////////////////
export default RegLog;