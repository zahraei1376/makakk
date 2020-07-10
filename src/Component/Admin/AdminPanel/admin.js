import React from 'react';
import './Admin.css';
// import React, { Component } from 'react'
import { Button, Confirm } from 'semantic-ui-react';
// import ReactPaginate from 'react-paginate';
// import Pagination from "react-js-pagination";
// import './bootstrap/bootstrap.less';
// @import "bootstrap/less/bootstrap";
// require("bootstrap/less/bootstrap.less");
// import Fade from 'react-reveal/Fade';
// import spinner from '../../UI/spinner/spinner';

let token;
if(sessionStorage.getItem('UserLogin')) {
    token=JSON.parse(sessionStorage.getItem('UserLogin')).token
}else{
    token=false;
}

class AdminPanel extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            ShowT:false,
            verifyT:false,
            ShUser:false,
            message:"",
        }
    }
  
    showNeedVerify(e){
        this.setState({verifyT:true,ShowT:false,ShUser:false});

    }
    showDeleteTeacher(e){
        this.setState({verifyT:false,ShowT:true,ShUser:false});
    }
    showUser(e){
        this.setState({verifyT:false,ShowT:false,ShUser:true});
    }

    render(){
        return(
            <div>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-sm-12 col-md-3 admin">
                            <ul>
                                <li><a onClick={this.showNeedVerify.bind(this)} ><i className="fa fa-check sizze ml-5"></i>تایید معلم ها</a></li>
                                <li><a onClick={this.showDeleteTeacher.bind(this)} ><i className="fa fa-trash sizze ml-5"></i>حذف معلم ها</a></li>
                                <li><a onClick={this.showUser.bind(this)} ><i className="fa fa-user sizze ml-5"></i>نمایش کاربرها </a></li>
                            </ul>
                        </div>
                        <div className="col-sm-12 col-md-9 leftCom cent">
                            <h1 className="cent">{this.state.message}</h1>
                            {this.state.verifyT && <NeedVerifyTeachers/>}
                            {this.state.ShowT && <DeleteTeachers/>}
                            {this.state.ShUser && <ShowUsers/>}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
// ///////////////////////////////////////////////////////////////////////
class ShowUsers extends React.Component{
    constructor(props){
        super(props)
        this.state={
            ShowUser:"",
            message:"",
            activePage: 3
        };
    }
    handlePageChange(pageNumber) {
        console.log(`active page is ${pageNumber}`);
        this.setState({activePage: pageNumber});
    }
    
    componentDidMount(){
        fetch("http://localhost:8000/ShowUsers", {
            method: "GET"
        })
        .then((response)=>{ 
            return response.json();   
        })
        .then((dataRes)=>{
            this.setState({
                ShowUser:dataRes.Users
            }) 
            console.log(dataRes.Users)
        })
        .catch(
            console.log('err')
        )
    }

    // handleIdRemoveTeacher = (id)=>{
    //     this.setState({tchId:id})
    // }

    render(){

        // if(this.state.tchId){
        //     let data={
        //         TeacherId:this.state.tchId
        //     }
        //     fetch("http://localhost:8000/RemoveTeacher", {
        //         method: "POST",
        //         headers: {
        //             'Authorization': token ? `Bearer ${token} `: '',
        //             "Content-Type": "application/json"
        //         },
        //         body: JSON.stringify(data)
        //     })
        //     .then((response)=>{ 
        //         return response.json();   
        //     })
        //     .then((dataRes)=>{
        //         let ShTeacher=[...this.state.ShowTeacher];
        //         for( let i = 0; i < ShTeacher.length; i++){ 
        //             if ( ShTeacher[i]._id == this.state.tchId) {
        //                 ShTeacher.splice(i, 1);
        //                 break; 
        //             }
        //          }
        //         this.setState({
        //             ShowTeacher:ShTeacher,
        //             message:dataRes.message,
        //             tchId:""
        //         })
        //     })
        //     .catch(
        //         console.log('err')
        //         // this.setState({message:"خطایی رخ داده پس از مدتی مجددا امحان کنید :("})
        //     )
        // }
        // //////
        let Userss="";
        if(this.state.ShowUser){
            Userss = this.state.ShowUser.map((tch,index) => {
                return (
                    <div className="mt-5" key={index}>
                        <div className="row">
                            <div className="col-sm-12">
                                <div>
                                    <div className="Cheader col-sm-10 col-md-push-1">
                                        <h5 className="mt-3" style={{color:"white"}}>{tch.username}</h5>
                                        {/* <button className="btn btn-danger mt-2" onClick={()=>this.setState({tchId:tch._id})} >حذف</button> */}
                                    </div>
                                    <div className="Cbody col-sm-10 col-md-push-1" >
                                        <div className="col-sm-2 mt-1">
                                            <h6 className="mt-3 cent">{tch.name}</h6>
                                            {/* <img src={"http://localhost:8000/" + (tch.ImageUrl.split('\\').splice(1,2).join('\\'))} className="cent" style={{width:'150px',height:'150px'}}/> */}
                                        </div>
                                        <div className="col-sm-3 mt-2">
                                            <p className="cent">{"ایمیل : " + tch.email}</p>
                                            {/* <h6>{"شماره موبایل :  " + tch.mobileNumber}</h6> */}
                                        </div>
                                        <div className="col-sm-2 mt-2">
                                            {/* <h6>{"ایمیل : " + tch.email}</h6> */}
                                            <p className="cent mb-4">{"شماره موبایل: " + tch.mobileNumber}</p>
                                        </div>
                                        <div className="col-sm-3 mt-2">
                                            {/* <h6>{"ایمیل : " + tch.email}</h6> */}
                                            <p className="cent mb-4" style={{fontSize:"15px"}}>{"تاریخ ثبت نام :"+ tch.createdAt}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    <hr/>
                    </div>
                );
            });
        }
        // /////


        return(
            <div className="container">
                <div className="row">
                    <div className="col-sm-12">
                        <div>
                            <h3 className="cent"  style={{color:"#521751",marginTop:"30px"}}>نمایش تمام کاربر ها</h3>
                        </div>
                        <hr/>
                        {this.state.ShowUser ? Userss :<h1 className="cent"> :(موردی وجود ندارد</h1>}
                        {/* <div>
                            <Pagination
                            activePage={this.state.activePage}
                            itemsCountPerPage={10}
                            totalItemsCount={20}
                            pageRangeDisplayed={5}
                            onChange={this.handlePageChange}
                            />
                        </div> */}
                    </div>
                </div>
            </div>
        )
    }
}
/////////////////////////////////////////////////////////////////////////////
class DeleteTeachers extends React.Component{
    constructor(props){
        super(props)
        this.state={
            ShowTeacher:"",
            tchId:"",
            message:""
        };
    }
    
    componentDidMount(){
        fetch("http://localhost:8000/ShowTeacher", {
            method: "GET"
        })
        .then((response)=>{ 
            return response.json();   
        })
        .then((dataRes)=>{
            this.setState({
                ShowTeacher:dataRes.teachers
            }) 
            console.log(dataRes.teachers)
            // this.setState({ShowT:false})
        })
        .catch(
            console.log('err')
            // this.setState({message:"خطایی رخ داده پس از مدتی مجددا امحان کنید :("})
        )
    }
    // collapseHandle=(e)=>{
    //     const collapse =document.getElementById('coll')
    //     collapse.style.display='inline'
    // }

    handleIdRemoveTeacher = (id)=>{
        this.setState({tchId:id})
    }

    render(){
        if(this.state.tchId){
            {
                var r = window.confirm('آیا برای حذف اطمینان دارید؟');
                if (r == true) {
                    let data={
                        TeacherId:this.state.tchId
                    }
                    fetch("http://localhost:8000/RemoveTeacher", {
                        method: "POST",
                        headers: {
                            'Authorization': token ? `Bearer ${token} `: '',
                            "Content-Type": "application/json"
                        },
                        body: JSON.stringify(data)
                    })
                    .then((response)=>{ 
                        return response.json();   
                    })
                    .then((dataRes)=>{
                        let ShTeacher=[...this.state.ShowTeacher];
                        for( let i = 0; i < ShTeacher.length; i++){ 
                            if ( ShTeacher[i]._id == this.state.tchId) {
                                ShTeacher.splice(i, 1);
                                break; 
                            }
                         }
                        this.setState({
                            ShowTeacher:ShTeacher,
                            message:dataRes.message,
                            tchId:""
                        })
                    })
                    .catch(
                        console.log('err')
                        // this.setState({message:"خطایی رخ داده پس از مدتی مجددا امحان کنید :("})
                    )
                } 
                else {

                } 
                // if(window.confirm('Are you sure to delete this record?')){ 
                //     this.deleteHandler()
                // };
            }
            //////////////
          
        }
        // //////
        let Teachers="";
        if(this.state.ShowTeacher){
            Teachers = this.state.ShowTeacher.map((tch,index) => {
                return (
                    <div className="mt-5" key={index}>
                        <div className="row">
                            <div className="col-sm-12">
                                <div>
                                    <div className="Cheader col-sm-10 col-md-push-1">
                                        <div className="col-sm-5">
                                        <a style={{cursor: "pointer"}} onClick={()=>this.setState({tchId:tch._id})} ><i className="fa fa-trash sizze ml-5 mt-3" style={{fontSize:"24px",color:"red"}} ></i></a>
                                            {/* <button className="btn btn-info mt-2" onClick={()=>this.setState({username:tch.username,verify:true})} >حذف</button> */}
                                        </div>
                                        <div className="col-sm-5 mt-3" style={{color:"white"}}>
                                            <h5>{tch.username}</h5>
                                        </div>
                                       
                                    </div>
                                    {/* <div className="Cheader col-sm-10 col-md-push-1">
                                        <h5>{tch.username}</h5>
                                        <button className="btn btn-danger mt-2" onClick={()=>this.setState({tchId:tch._id})} >حذف</button>
                                    </div> */}
                                    <div className="Cbody col-sm-10 col-md-push-1" >
                                        <div className="col-sm-3 mt-1">
                                            <img src={"http://localhost:8000/" + (tch.ImageUrl.split('\\').splice(1,2).join('\\'))} className="cent" style={{width:'150px',height:'150px'}}/>
                                        </div>
                                        <div className="col-sm-5 mt-3">
                                            <h5 className="mb-3">{tch.name}</h5>
                                            <h6>{"مقطع تحصیلی  : " + tch.Grade}</h6>
                                            <h6>{"رشته تحصیلی  :  " + tch.field}</h6>
                                        </div>
                                        <div className="col-sm-3 mt-5 cent">
                                            <p className="text-muted">{tch.describtion}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                            {/* <div className="col-sm-12 col-md-3 cent">
                                <img src={"http://localhost:8000/" + (tch.ImageUrl.split('\\').splice(1,2).join('\\'))} className="cent" style={{width:'150px',height:'150px'}}/>
                            </div>
                            <div className="col-sm-12 col-md-2 cent">
                                <h3>{tch.username}</h3>
                                
                            </div>
                            <div className="col-sm-12 col-md-5 cent">
                                <h6>{"مقطع تحصیلی  : " + tch.Grade}</h6>
                                <h6>{"رشته تحصیلی  :  " + tch.field}</h6>
                                <p>{tch.describtion}</p>
                                
                            </div>
                            <div className="col-sm-12 col-md-2 cent">
                                <button className="btn btn-danger ml-5" onClick={()=>this.setState({tchId:tch._id})} >حذف</button>
                            </div> */}
                        </div>
                    <hr/>
                    </div>
                );
            });
            // this.setState({ShowTeacher:""})
        }
        // /////


        return(
            <div className="container">
                <div className="row">
                    <div className="col-sm-12">
                        <div>
                            <h3 className="cent"  style={{color:"#521751",marginTop:"30px"}}>نمایش تمام معلم ها</h3>
                        </div>
                        <hr/>
                        {this.state.ShowTeacher ? Teachers :<h1 className="cent"> :(موردی وجود ندارد</h1>}
                    </div>
                </div>
            </div>
        )
    }
}
/////////////////////////////////////////////////////////////////////////////
class NeedVerifyTeachers extends React.Component{
    constructor(props){
        super(props)
        this.state={
            teachersVerify:"",
            username:"",
            verify:false,
            message:""
        };
    }
    componentDidMount(){
        fetch("http://localhost:8000/Needverify", {
            method: "POST"
        })
        .then((response)=>{ 
            return response.json();   
        })
        .then((dataRes)=>{
            this.setState({
                teachersVerify:dataRes.teachers
            }) 
            console.log(dataRes.teachers)
            // this.setState({verifyT:false})
        })
        .catch(
            console.log('err')
            // this.setState({message:"خطایی رخ داده پس از مدتی مجددا امحان کنید :("})
        ) 
    }

    handleVerify = (username,verify)=>{
        this.setState({username:username,verify:verify});
    }
    deleteHandler=()=>{

    }
    handleSubmit=()=>{

    }
    
    render(){
        if(this.state.username){
            if(!this.state.verify){
                {
                    var r = window.confirm('آیا برای حذف اطمینان دارید؟');
                    if (r == true) {
                        let data={
                            verify:this.state.verify,
                            username:this.state.username
                        }
                        fetch("http://localhost:8000/verifyTeacher", {
                            method: "POST",
                            headers: {
                                'Authorization': token ? `Bearer ${token} `: '',
                                "Content-Type": "application/json"
                            },
                            body: JSON.stringify(data)
                        })
                        .then((response)=>{ 
                            return response.json();   
                        })
                        .then((dataRes)=>{
                            let ShTeacher=[...this.state.teachersVerify];
                            for( let i = 0; i < ShTeacher.length; i++){ 
                                if ( ShTeacher[i].username == this.state.username) {
                                    ShTeacher.splice(i, 1);
                                    break; 
                                }
                            }
                            this.setState({
                                teachersVerify:ShTeacher,
                                message:dataRes.message,
                                username:"",
                                verify:""
                            })
                        })
                        .catch(
                            console.log('err')
                            // this.setState({message:"خطایی رخ داده پس از مدتی مجددا امحان کنید :("})
                        )
                    } 
                    else {

                    } 
                    // if(window.confirm('Are you sure to delete this record?')){ 
                    //     this.deleteHandler()
                    // };
                }
                // <Button onClick={this.open}>Show</Button>
                // <Confirm
                //     open={this.state.open}
                //     onCancel={this.close}
                //     onConfirm={this.close}
                // />
              
                // <Dialog>
                    // <button onClick={this.closeConfirmationModal}>No</button>
                    // <button onClick={this.handleSubmit}>Yes</button>
                // </Dialog>
            }else{
                let data={
                    verify:this.state.verify,
                    username:this.state.username
                }
                fetch("http://localhost:8000/verifyTeacher", {
                    method: "POST",
                    headers: {
                        'Authorization': token ? `Bearer ${token} `: '',
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify(data)
                })
                .then((response)=>{ 
                    return response.json();   
                })
                .then((dataRes)=>{
                    let ShTeacher=[...this.state.teachersVerify];
                    for( let i = 0; i < ShTeacher.length; i++){ 
                        if ( ShTeacher[i].username == this.state.username) {
                            ShTeacher.splice(i, 1);
                            break; 
                        }
                    }
                    this.setState({
                        teachersVerify:ShTeacher,
                        message:dataRes.message,
                        username:"",
                        verify:""
                    })
                })
                .catch(
                    console.log('err')
                    // this.setState({message:"خطایی رخ داده پس از مدتی مجددا امحان کنید :("})
                )
            }
        }
        // //////
        let Teachers="";
        if(this.state.teachersVerify){
            Teachers = this.state.teachersVerify.map((tch,index) => {
                return (
                    <div className="mt-5" key={index}>
                        <div className="row">
                            <div className="col-sm-12">
                                <div>
                                    <div className="Cheader col-sm-10 col-md-push-1">
                                        <div className="col-sm-5">
                                            <button className="btn btn-danger mt-2" onClick={()=>this.setState({username:tch.username,verify:false})} >حذف</button>
                                            <button className="btn btn-info mt-2" onClick={()=>this.setState({username:tch.username,verify:true})} >تایید</button>
                                        </div>
                                        <div className="col-sm-5 mt-3" style={{color:"white"}}>
                                            <h5>{tch.username}</h5>
                                        </div>
                                       
                                    </div>
                                    <div className="Cbody col-sm-10 col-md-push-1" >
                                        <div className="col-sm-3 mt-1">
                                            <img src={"http://localhost:8000/" + (tch.ImageUrl.split('\\').splice(1,2).join('\\'))} className="cent" style={{width:'150px',height:'150px'}}/>
                                        </div>
                                        <div className="col-sm-5 mt-3">
                                            <h5 className="mb-3">{tch.name}</h5>
                                            <h6 className={{marginRight:"0px"}}>{"مقطع تحصیلی  : " + tch.Grade}</h6>
                                            <h6 className={{marginRight:"0px"}}>{"رشته تحصیلی  :  " + tch.field}</h6>
                                        </div>
                                        <div className="col-sm-3 mt-5 cent">
                                            <p className="text-muted">{tch.describtion}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                            {/* <div className="col-sm-12 col-md-3 cent">
                                <img src={"http://localhost:8000/" + (tch.ImageUrl.split('\\').splice(1,2).join('\\'))} style={{width:'150px',height:'150px'}} />
                            </div>
                            <div className="col-sm-12 col-md-9 cent">
                                <h3>{tch.username}</h3>
                                <h6>{"مقطع تحصیلی :  "+ tch.Grade}</h6>
                                <h6>{"رشته تحصیلی :  " + tch.field}</h6>
                                <p>{tch.describtion}</p>
                                <button className="btn btn-danger ml-5" onClick={()=>this.setState({username:tch.username,verify:false})} >حذف</button>
                                <button className="btn btn-info" onClick={()=>this.setState({username:tch.username,verify:true})} >تایید</button>
                            </div> */}
                        </div>
                    <hr/>
                    </div>
                );
            });
        }
        // /////
        return(
           <div>
                <div>
                    <h3 className="cent"  style={{color:"#521751",marginTop:"30px"}}>تایید معلم ها</h3>
                </div>
                <hr/>
               {this.state.teachersVerify ? Teachers :<h1 className="cent"> :(موردی وجود ندارد</h1>}
           </div>
        )
    }
}
// ////////////////////////////////////////////////////

export default AdminPanel;