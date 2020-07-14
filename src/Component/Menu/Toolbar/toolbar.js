import  React from 'react';
import  {NavLink} from 'react-router-dom';
import './toolbar.css';
// import Logo from '../../images/images';
import DrawerToggleButton from '../SideDrawer/DrawerToggleButton';
import 'font-awesome/css/font-awesome.min.css';
import { connect } from 'react-redux';
// //////////////////////////////////////////

// let Id;
// let teacher;
// let admin;
// if(sessionStorage.getItem('UserLogin')) {
//     Id=JSON.parse(sessionStorage.getItem('UserLogin')).Id
//     teacher=JSON.parse(sessionStorage.getItem('UserLogin')).teacher
//     admin=JSON.parse(sessionStorage.getItem('UserLogin')).admin
// }else{
//     Id=false;
//     teacher=false;
//     admin=false;
// }

const  Toolbar = (props) => (
    <header className="toolbar">
        <nav className="toolbar__navigation">
            <div className="toolbar_navigation_items">
                <ul>
                    <li><i className="fa fa-home sizze"></i><NavLink exact to="/">صفحه اصلی</NavLink></li>
                    <li><i className="fa fa-users sizze"></i><NavLink exact to="/ShowTeacher">معلمان</NavLink></li>
                    {!props.currentUser ? <li><i className="fa fa-user sizze"></i> <NavLink exact to ='/RegLog'>ثبت نام / ورود</NavLink></li>:""}
                    {props.currentUser && this.props.isTeacher ? <li><i className="fa fa-users sizze"></i> <NavLink exact to="/Profile">پروفایل</NavLink></li>:""}
                    {props.currentUser && !this.props.isTeacher ?<li><i className="fa fa-users sizze"></i> <NavLink exact to="/NewTeacher">ثبت نام معلم</NavLink></li>:""}
                    {props.currentUser && this.props.isTeacher? <li><i className="fa fa-users sizze"></i> <NavLink exact to="/getCourses">دریافت درس</NavLink></li>:""}
                    {props.currentUser && this.props.isTeacher? <li><i className="fa fa-users sizze"></i> <NavLink exact to="/UploadFile">آپلود فایل</NavLink></li>:""}
                    {props.currentUser && this.props.isAdmin ? <li><i className="fa fa-users sizze"></i> <NavLink exact to="/AdminPanel">ادمین</NavLink></li>:"" }
                </ul>
            </div>
            <div className="spacer"/>
            {/* <div className="toolbar__logo">
                <Logo/>
            </div> */}
            <div className="toolbar__toggle-button">
                <DrawerToggleButton click={props.DrawerClickHandle}/>
            </div>

        </nav>
    </header>
)

const mapStateToProps = state => ({
    currentUser:state.user.currentUser,
    isTeacher:state.user.isTeacher,
    isAdmin:state.user.isAdmin
});

export  default connect(mapStateToProps , null)(Toolbar);
