import React from 'react';
import { Link } from 'react-router-dom';
import { fetchUserStartAsync } from '../../../redux/user/user.actions';
import {connect } from 'react-redux';
// //////////////////
import './login.scss';


class Login extends React.Component{
    constructor(props){
        super(props)
        this.state={
            UsernameLog:"",
            PassLog:"",
        };
    }
    
    submitLogin = (e)=>{
        e.preventDefault();
        if((this.state.UsernameLog !="" && this.state.UsernameLog > 5 ) && (this.state.PassLog!="" && this.state.PassLog > 5)){
            const data = {
                username: this.state.UsernameLog,
                password:this.state.PassLog,
            }
            const {setCurrentUser} = this.props;
            setCurrentUser(data);
        }
        else{
            // const errorMessage="نام کاربری و رمز عبور باید ارای حداقل 5 کارکتر باشد";
            alert("نام کاربری و رمز عبور باید دارای حداقل 5 کارکتر باشد")
        }
    }


    handleUsername = (e)=>{
        this.setState({UsernameLog: e.target.value});
    }

    handlePass = (e)=>{
        this.setState({PassLog: e.target.value});
    }
    render(){
        return(
            <div>
                <div className="login">
                    <div className="login__header">
                        ورود
                    </div>
                    <form className="needs-validation login__box" id="mtLoginForm">
                        <div className="row login__row">
                            <input className='login__input' type="text" name="username" placeholder="نام کاربری" required  minLength="5" value={this.state.UsernameLog} onChange={this.handleUsername} />
                            <input className='login__input' type="password" name="password" placeholder="پسورد" required  minLength="5" value={this.state.PassLog} onChange={this.handlePass} />
                        </div>
                        <button className="login__btn" onClick={this.submitLogin.bind(this)}>ورود</button>
                        <Link to='/ChangePass' className="login__link">فراموشی پسورد</Link>
                    </form>
                </div>
            </div>
                
        )
    }
};


const mapStateToProps=(state)=>({
    currentUser:state.user.currentUser
})

const mapDispatchToProps = (dispatch) => ({
    setCurrentUser: (data) => dispatch(fetchUserStartAsync(data))
});
export default connect(mapStateToProps , mapDispatchToProps)(Login);