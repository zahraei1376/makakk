import  React from 'react';
import  {NavLink} from 'react-router-dom';
import './toolbar.css';
import Logo from '../../images/images';
import DrawerToggleButton from '../SideDrawer/DrawerToggleButton';
import 'font-awesome/css/font-awesome.min.css';
// //////////////////////////////////////////

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

const  Toolbar = (props)=> {
    return(
        <header className="toolbar">
            <nav className="toolbar__navigation">
                <div className="toolbar_navigation_items">
                    <ul>
                        <li><i className="fa fa-home sizze"></i> <NavLink exact to="/">صفحه اصلی</NavLink></li>
                        <li><i className="fa fa-users sizze"></i> <NavLink exact to="/ShowTeacher">معلمان</NavLink></li>
                        {!Id ? <li><i className="fa fa-user sizze"></i> <NavLink exact to ='/RegLog'>ثبت نام / ورود</NavLink></li>:""}
                        {Id && teacher ? <li><i className="fa fa-users sizze"></i> <NavLink exact to="/Profile">پروفایل</NavLink></li>:""}
                        {Id && !teacher ?<li><i className="fa fa-users sizze"></i> <NavLink exact to="/NewTeacher">ثبت نام معلم</NavLink></li>:""}
                        {Id && teacher? <li><i className="fa fa-users sizze"></i> <NavLink exact to="/getCourses">دریافت درس</NavLink></li>:""}
                        {Id && teacher? <li><i className="fa fa-users sizze"></i> <NavLink exact to="/UploadFile">آپلود فایل</NavLink></li>:""}
                        {Id && admin ? <li><i className="fa fa-users sizze"></i> <NavLink exact to="/AdminPanel">ادمین</NavLink></li>:"" }
                        
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
};
export  default Toolbar;
