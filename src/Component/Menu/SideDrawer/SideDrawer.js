import React from 'react';
import './SideDrawer.css';
import Logo from "../../images/images";
// import {Link} from "react-router-dom";
import  {BrowserRouter,Route,Link,withRouter,NavLink} from 'react-router-dom'

let Id;
let teacher;
let admin;
if(sessionStorage.getItem('UserLogin')) {
    Id=JSON.parse(sessionStorage.getItem('UserLogin')).Id
    teacher=JSON.parse(sessionStorage.getItem('UserLogin')).teacher
    admin=JSON.parse(sessionStorage.getItem('UserLogin')).admin
}else{
    Id=false;
    teacher=false;
    admin=false;
}

const SideDrawer=(props)=>{
    let DrawerClasses='side-drawer';
    if (props.show){
        DrawerClasses='side-drawer open';
    }
    return(
        <nav className={DrawerClasses}>
            <div className="side-drawer__logo">
                <Logo/>
            </div>
            <ul>
                <li><i className="fa fa-home sizze"></i> <NavLink exact to="/">صفحه اصلی</NavLink></li>
                <li><i className="fa fa-users sizze"></i> <NavLink exact to="/ShowTeacher">معلمان</NavLink></li>
                {!Id ? <li><i className="fa fa-user sizze"></i> <NavLink exact to ='/RegLog'>ثبت نام / ورود</NavLink></li>:""}
                {Id && teacher ? <li><i className="fa fa-users sizze"></i> <NavLink exact to="/Profile">پروفایل</NavLink></li>:""}
                {Id && !teacher ?<li><i className="fa fa-users sizze"></i> <NavLink exact to="/NewTeacher">ثبت نام معلم</NavLink></li>:""}
                {Id && teacher? <li><i className="fa fa-users sizze"></i> <NavLink exact to="/getCourses">دریافت درس</NavLink></li>:""}
                {Id && teacher? <li><i className="fa fa-users sizze"></i> <NavLink exact to="/UploadFile">آپلود فایل</NavLink></li>:""}
                {Id && admin ? <li><i className="fa fa-users sizze"></i> <NavLink exact to="/AdminPanel">ادمین</NavLink></li>:"" }
                {/* <li><NavLink exact to="/">صفحه اصلی</NavLink></li>
                <li><NavLink exact to="/Persons">کارآفرینان</NavLink></li>
                <li><NavLink exact to="/Partners">همکاران</NavLink></li>
                <li><NavLink exact to={{
                    pathname:'/RegLog',
                    hash:'#submit',
                    search:'?color=true'
                }}>ثبت نام / ورود</NavLink></li> */}
            </ul>
        </nav>
    )
};
export default SideDrawer;