import React ,{lazy ,Suspense} from 'react';
import  {Switch,Route} from 'react-router-dom';
// //////////////////////////////////////
import Spinner from '../UI/spinner/spinner.jsx';
// //////////////////////////////////////
import Menu from '../Menu/Menu';
// import RegLog from '../Register-Login/Register-Login';
// import Teachers from '../Teachers/Teachers';
// import MainPage from '../MainPage/MainPage';
// import Profile from '../Profile/Profile';
// import ChangePass from '../Profile/ForgotPassword/changePassword';
// import ChangeProfile from '../Profile/changeProfile/changeProfile';
// import NewTeacher from '../NewTeacher/NewTeacher';
// import getCourses from '../getCourses/getCourses';
// import UploadFile from '../UploadFile/UploadFile';
// import GetFilePage from '../getFilesPage/getFilesPage';
// import AdminPanel from '../Admin/AdminPanel/admin';
// /////////////////////////////////////////////////////
// const Menu = lazy(() => import('../Menu/Menu'));
const RegLog = lazy( ()=> import('../Register-Login/Register-Login'));
const Teachers = lazy( ()=> import('../Teachers/Teachers'));
const MainPage = lazy( ()=> import('../MainPage/MainPage'));
const Profile = lazy(() => import('../Profile/Profile'));
const ChangePass = lazy( ()=> import('../Profile/ForgotPassword/changePassword'));
const ChangeProfile = lazy( ()=> import('../Profile/changeProfile/changeProfile'));
const NewTeacher = lazy( ()=> import('../NewTeacher/NewTeacher'));
const getCourses = lazy(() => import('../getCourses/getCourses'));
const UploadFile = lazy( ()=> import('../UploadFile/UploadFile'));
const GetFilePage = lazy( ()=> import('../getFilesPage/getFilesPage'));
const AdminPanel = lazy( ()=> import('../Admin/AdminPanel/admin'));
// /////////////////////////////////////////////////////
const Layout = () => (
    <div>
        <Menu/>
        <Switch>
            <Suspense fallback={<Spinner/>}>
                <Route path="/" exact component = {MainPage}/>
                {/* <Route path="/Startups" exact component={Startups}/> */}
                <Route path="/ShowTeacher" exact component={Teachers}/>
                {/* <Route 
                    path="/RegLog" 
                    render={(props) => <RegLog {...props} isLogin={props.isLogin} isRegister={props.isRegister} message={props.message}/>} 
                /> */}
                <Route path="/RegLog" exact component={RegLog}/>
                <Route path="/Profile" exact component={Profile}/>
                <Route path="/ChangePass" exact component={ChangePass}/>
                <Route path="/ChangePrpfile" exact component={ChangeProfile}/>
                <Route path="/NewTeacher" exact component={NewTeacher}/>
                <Route path="/getCourses" exact component={getCourses}/>
                <Route path="/UploadFile" exact component={UploadFile}/>
                <Route path="/AdminPanel" exact component={AdminPanel}/>
                <Route path="/getFilePage" exact component={GetFilePage}/>
                {/* <Route 
                    path="/getFilePage" 
                    render={(props) => <GetFilePage {...props} CourseName={props.CourseName}/>} 
                /> */}
            </Suspense>
        </Switch>
    </div>
    
    )
export  default Layout;