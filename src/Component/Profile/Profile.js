import React from 'react';
import './Profile.css';
import { Redirect } from 'react-router-dom';



let token;
if(sessionStorage.getItem('UserLogin')) {
    token=JSON.parse(sessionStorage.getItem('UserLogin')).token
}else{
   
    token=false;
}

let imagg=""
class Profile extends React.Component{
    constructor(props){
        super(props)
        this.state={
            changePass:false,
            changePro:false,
            getCourses:false,
            name:"",
            username:"",
            mobileNumber:"",
            university:"",
            Grade:"",
            field:"",
            email:"",
            image:"",
            describtion:"",
            Courses:"",
            iserr:false,
            fileCount:"",
            showPro:true
        }
    }
    
    
    componentDidMount() {
        
        fetch("http://localhost:8000/Profile", {
            method:"GET",
            headers: {
                'Authorization': token ? `Bearer ${token} `: ''
            },
            
        })
        .then((response)=>{ 
            return response.json(); 
        })
        .then((dataRes)=>{ 
            this.setState({
                name:dataRes.name,
                username:dataRes.username,
                mobileNumber:dataRes.mobileNumber,
                university:dataRes.university,
                Grade:dataRes.Grade,
                field:dataRes.field,
                email:dataRes.email,
                describtion:dataRes.describtion,
                image:"http://localhost:8000/" + (dataRes.image.split('\\').splice(1,2).join('\\')),
                // image:dataRes.image,
                Courses:dataRes.Courses
            })
            // const imagg=this.state.image.split('\\').splice(0,1);
        })
        .catch(
            console.log('err')
        )
    }
    
    render(){
        // if (this.state.changePass) {
        //     return <Redirect to='/ChangePass'/>
        // }
        // if (this.state.changePro) {
        //     return <Redirect to='/ChangePrpfile'/>
        // }
        if (this.state.getCourses) {
            return <Redirect to='/getCourses'/>
        }

        // let allCourse=["C#","C++","Java","Python"];
        // let cc="";
        // if (this.state.Courses && this.state.Courses.length>0) {
        //     let resultName=[]
        //     for(let i= 0 ;i<this.state.Courses.length ; i++){
        //         resultName[i]=this.state.Courses[i].nameCours
        //     }
        //     cc=resultName.map((cr,index) => {
        //         return (
        //             <option value={cr} key={index}>{cr}</option>
        //         )
        //     })
        // }
        let cc="";
        if (this.state.Courses && this.state.Courses.length>0) {
            let resultName=[]
            for(let i= 0 ;i<this.state.Courses.length ; i++){
                resultName[i]=this.state.Courses[i].nameCours
            }
            cc=resultName.map((cr,index) => {
                return (
                    <p>{cr}</p>
                    // <option value={cr} key={index}>{cr}</option>
                )
            })
        }
        

        const style={
            // marginLeft:"10px",
            float:"right"
        }

        const style2={
            marginLeft:"10px"
        }

        // const style3={
        //     fontSize:"20px"
        // }

        
        // const style3={
        //     boxShadow:"1px 1px 1px 1px #521752",
        //     padding:"20px",
        //     backgroundColor:"#9DA5B5"
        // };
        
        return(
            <div>
                {console.log(this.state.image)}
                
                <div className="container-fluid">
                    {/* <div className="row pro">
                        <div className="col-sm-12 col-md-3">
                            <button className="btn btn_style"  onClick={()=>this.setState({changePro:!this.state.changePro})}>تغییر پروفایل</button>
                            <button className="btn btn_style" onClick={()=>this.setState({changePass:!this.state.changePass})}>تغییر پسورد</button>
                        </div>
                        <div className="col-sm-12 col-md-4">
                            <img src={this.state.image} className="imgPro cent" />
                        </div>
                        <div className="col-sm-12 col-md-2">
                            <h1 className="cent hh" style={{color:"white"}}>{this.state.name}</h1>
                        </div>
                    </div> */}
                    <div className="row">
                        <div className="col-sm-12 col-md-4 pp">
                          
                            <div className="row">
                                <img src={this.state.image} className="imgPro cent" />
                            </div>
                            <div className="row mt-5">
                                <h4 className="cent hh" style={{color:"white"}}>{this.state.name}</h4>
                            </div>
                            <div className="row">
                                <button className="btn btn_style"  onClick={()=>this.setState({changePro:!this.state.changePro,changePass:false,showPro:false})}>تغییر پروفایل</button>
                                <button className="btn btn_style" onClick={()=>this.setState({changePass:!this.state.changePass,changePro:false,showPro:false})}>تغییر پسورد</button>
                            </div>
                        </div>
                        <div className="col-sm-12 col-md-6 col-md-push-1  mt-5 mb-5">
                            {this.state.changePass && <ChangePassword/>}
                            {this.state.changePro && <ChangeProfile/>}
                            {this.state.showPro?<div>
                                <div className="form-group row">
                                    <div className="col-sm-3 cent">
                                        <i className="fa fa-book" style={style2}></i>
                                        <label> دروس اخذ شده</label>
                                        <hr/>
                                        <p className="cent"> {cc}</p>
                                    
                                    </div>
                                    
                                    {/* <select>
                                        {cc}
                                    </select> */}
                                    <div className="col-sm-6">
                                        <p className="cent">تعداد فایل های آپلود شده </p>
                                        <hr/>
                                        <p className="cent">{this.state.Courses.files?this.state.Courses.files.length():"0"}</p>
                                    </div>
                                </div>
                            
                                <form>
                                    <div className="form-group row">
                                        <div className="col-sm-3 mt-3">
                                            {/* <i className="fa fa fa-user" style={style2} ></i> */}
                                            <label for="username" >نام کاربری</label>
                                        </div>
                                        <div className="col-sm-9">
                                            <input className="form-control" type="text" id="username" value={this.state.username} readOnly />
                                        </div>
                                    </div>
                                    <div className="form-group row">
                                        <div className="col-sm-3 mt-3">
                                            {/* <i className="fa fa-phone" style={style2} ></i> */}
                                            <label for="number" >شماره موبایل</label>
                                        </div>
                                        <div className="col-sm-9">
                                            <input className="form-control" type="text" id="number" value={this.state.mobileNumber} readOnly />
                                        </div>
                                    </div>
                                    <div className="form-group row">
                                        <div className="col-sm-3 mt-3">
                                            {/* <i className="fa fa-tasks" style={style2} ></i> */}
                                            <label for="email" >ایمیل</label>
                                        </div>
                                        <div className="col-sm-9">
                                            <input className="form-control" type="email" id="email" value={this.state.email} readOnly />
                                        </div>
                                    </div>
                                    <div className="form-group row">
                                        <div className="col-sm-3 mt-3">
                                            {/* <i className="fa fa-university" style={style2} ></i> */}
                                            <label for="university" >نام دانشگاه</label>
                                        </div>
                                        <div className="col-sm-9">
                                            <input className="form-control" type="text" id="university" value={this.state.university} readOnly />
                                        </div>
                                    </div>
                                    <div className="form-group row">
                                        <div className="col-sm-3 mt-3">
                                            {/* <i className="fa fa-address-book" style={style2} ></i> */}
                                            <label for="Grade" >مقطع تحصیلی </label>
                                        </div>
                                        <div className="col-sm-9">
                                            <input className="form-control" type="text" id="Grade" name="Grade" value={this.state.Grade} readOnly />
                                        </div> 
                                    </div>
                                    <div className="form-group row">
                                        <div className="col-sm-3 mt-3">
                                            {/* <i className="fa fa-book" style={style2} ></i> */}
                                            <label for="field"> رشته تحصیلی </label>
                                        </div>
                                        <div className="col-sm-9">
                                            <input className="form-control"  type="text" id="field" name="field" value={this.state.field} readOnly />
                                        </div>
                                    </div>
                                    <div className="form-group row">
                                        <div className="col-sm-3 mt-3">
                                            {/* <i className="fa fa-clipboard" style={style2} ></i> */}
                                            <label for="describtion">توضیحات </label>
                                        </div>
                                        <div className="col-sm-9">
                                            <input className="form-control" type="text" id="describtion"  name="describtion" value={this.state.describtion} readOnly />
                                        </div>
                                    </div>
                                {/* <div className="form-group row">
                                    <div className="col-sm-3">
                                        <i className="fa fa-book" style={style2}></i>
                                        <label>دروس</label>
                                    </div>
                                    <select>
                                        {cc}
                                    </select>
                                </div> */}
                                </form>
                            </div>:""}
                        </div>
                    </div>
                    
                    <hr/>
                </div>
                {/* <div className="container-fluid">
                    <div className="row main">
                        <div className="col-sm-7 cent">
                            <form className="mb-5 frm bg-white">
                                <div className="input-group mt-5">
                                    <div className="row">
                                        <div className="col-sm-3" style={style2}>
                                            <i className="fa fa-user" style={style}></i>
                                            <label style={style3} >نام کاربری</label>
                                        </div>
                                        <div className="col-sm-9">
                                            <input  type="text" value={this.state.username} readOnly/>
                                        </div>
                                        
                                    </div>
                                </div>
                                <div className="input-group">
                                    <div className="row">
                                        <div className="col-sm-3" style={style2}>
                                            <i className="fa fa-phone" style={style} ></i>
                                            <label style={style3} > شماره موبایل</label>
                                        </div>
                                        <div className="col-sm-9">
                                            <input  type="text" value={this.state.mobileNumber} readOnly/>
                                        </div>
                                    </div>
                                </div>
                                <div className="input-group">
                                    <div className="row">
                                        <div className="col-sm-3" style={style2}>
                                            <i className="fa fa-university" style={style}></i>
                                            <label style={style3} >نام دانشگاه </label>
                                        </div>
                                        <div className="col-sm-9">
                                            <input  type="text" value={this.state.university} readOnly/>
                                        </div>
                                    </div>
                                </div>
                                <div className="input-group">
                                    <div className="row">
                                        <div className="col-sm-3" style={style2}>
                                            <i className="fa fa-address-book" style={style}></i>
                                            <label style={style3} >رشته تحصیلی </label>
                                        </div>
                                        <div className="col-sm-9">
                                            <input  type="text" value={this.state.field} readOnly/>
                                        </div>
                                    </div>
                                </div>
                                <div className="input-group mb-5">
                                    <div className="row">
                                        <div className="col-sm-3" style={style2}>
                                            <i className="fa fa-address-book" style={style}></i>
                                            <label style={style3} >مقطع  </label>
                                        </div>
                                        <div className="col-sm-9">
                                            <input  type="text" value={this.state.Grade} readOnly/>
                                        </div>
                                    </div>
                                </div>
                                <div className="input-group">
                                    <div className="row mb-5">
                                        <div className="col-sm-3" style={style2}>
                                            <i className="fa fa-tasks" style={style}></i>
                                            <label style={style3} >ایمیل</label>
                                        </div>
                                        <div className="col-sm-9">
                                            <input  type="text" value={this.state.email} readOnly/>
                                        </div>
                                    </div>
                                </div>
                                <div className="input-group">
                                    <div className="row mb-4">
                                        <div className="col-sm-3" style={style2}>
                                            <i className="fa fa-clipboard" style={style}></i>
                                            <label style={style3} >توضیحات</label>
                                        </div>
                                        <div className="col-sm-9">
                                            <input type="text" value={this.state.describtion} readOnly/>
                                        </div>
                                    </div>
                                </div>
                                <div className="input-group">
                                    <div className="row">
                                        <div className="col-sm-3" style={style2}>
                                            <i className="fa fa-book" style={style}></i>
                                            <label style={style3} >دروس</label>
                                        </div>
                                        <select>
                                            {cc}
                                        </select>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div> */}
            </div>
        )
    }
}
/////////////////////////////////////////////////////////////
class ChangePassword extends React.Component{
    constructor(props){
        super(props)
        this.state={
            email:"",
            pass:"",
            message:""
            // errorsT:""
        }
    }
    submitChangepass(e){
        e.preventDefault(); 
        const frm=document.getElementById('myform')
        if(frm.checkValidity()==false){
            frm.classList.add("was-validated")
            // frm.addClass("was-validated")
        }
        else{
            frm.classList.add("was-validated")
            // const formData=new FormData();

            // formData.append('email', this.state.email)
            // formData.append('password', this.state.pass)
            var data = {
                email:this.state.email,
                password:this.state.pass
            }

            console.log( this.state.email)
            fetch("http://localhost:8000/ForgotPassword", {
                method:"POST",
                headers: {
                    'Authorization': token ? `Bearer ${token} `: '',
                    'Content-Type': 'application/json'
                },
                body:  JSON.stringify(data)
                // body:formData
                
            })
            .then((response)=>{ 
                return response.json();   
            })
            .then((dataRes)=>{ 
                // console.log(dataRes.data)
                this.setState({
                    // errorsT:dataRes.data,
                    message:dataRes.message
                })
            })
            .catch(
                console.log('err')
            )
        }
        
    }
    handleEmail = (e)=>{
        this.setState({email: e.target.value});
    }
    handlePass = (e)=>{
        this.setState({pass: e.target.value});
    }

    render(){
        const style={
            marginTop:'50px'
        }


        return(
            <div>
                <div className="container-fluid">
                    <div className="row">
                        <h6 className="col-sm-8 cent bg-white mt-2" >
                        <br/>
                        نشانی ایمیل خود را وارد کنید پسورد جدید برای شما در نظر گرفته میشود
                        {/* نشانی ایمیل خود را‌ وارد نمایید. از طریق ایمیل، پیوندی برای ساختن رمز عبور تازه دریافت خواهید نمود. */}
                        <br/>
                        </h6>
                    </div>
                    <div>
                        <h3 className="cent" style={{color:"#521751",marginTop:"30px"}}>{this.state.message}</h3>
                    </div>
                    <div className="row cent" style={style} >
                        {/* <div className="col-sm-4"></div> */}
                        <div className="col-sm-8 cent frm">
                            <form id="myform">
                                <div className="form-group row">
                                    <div className="col-sm-3 mt-3">
                                        {/* <i className="fa fa-user" style={style2} ></i> */}
                                        <label for="email" >ایمیل</label>
                                    </div>
                                    <div className="col-sm-9">
                                        <input className="form-control" type="email" id="email" name="email"  placeholder="ایمیل" onChange={this.handleEmail} required />
                                    </div> 
                                    <div className="valid-feedback">valid</div>
                                    <div className="invalid-feedback">invalid</div>                               
                                </div>
                                <div className="form-group row">
                                    <div className="col-sm-3 mt-3">
                                        {/* <i className="fa fa-user" style={style2} ></i> */}
                                        <label for="password" >پسورد</label>
                                    </div>
                                    <div className="col-sm-9">
                                        <input className="form-control" id="password" type="password"  name="password" placeholder="پسورد" onChange= {this.handlePass} required />
                                    </div> 
                                    <div className="valid-feedback">valid</div>
                                    <div className="invalid-feedback">invalid</div>                               
                                </div>
                                {/* <div className="input-group mt-2 mb-5">
                                    <label>ایمیل</label>
                                    <input type="email"  name="email" placeholder="ایمیل" onChange= {this.handleEmail} required />
                                </div>
                                <div className="input-group mt-2 mb-5">
                                    <label>پسورد</label>
                                    <input type="password"  name="password" placeholder="پسورد" onChange= {this.handlePass} required />
                                </div> */}
                               <button className="btn btn_style2 mt-5" onClick={this.submitChangepass.bind(this)}>تغییر رمز </button>
                            </form>
                        </div>
                        {/* <div className="col-sm-4"></div> */}
                    </div>
                </div>
            </div>

        )
    }
}
// //////////////////////////////////////////////////////////

////////////////////////////////////////////////////////////
class ChangeProfile extends React.Component{
    constructor(props){
        super(props)
        this.state={
            name:"",
            username:"",
            mobileNumber:"",
            university:"",
            Grade:"",
            field:"",
            email:"",
            ImageUrl:"",
            describtion:"",
            iserr:false,
            message:"",
            errorsT:"",
            fileInput:null
        }
    }
    submitChangePro(e){
        e.preventDefault(); 
        const frm=document.getElementById('myform')
        if(frm.checkValidity()==false){
            frm.classList.add("was-validated")
            // frm.addClass("was-validated")
        }else{
            frm.classList.add("was-validated")
            const formData=new FormData();
            formData.append('name', this.state.name)
            formData.append('mobileNumber', this.state.mobileNumber)
            formData.append('university', this.state.university)
            formData.append('Grade',this.state.Grade)
            formData.append('field',this.state.field)
            formData.append('describtion',this.state.describtion)
            formData.append('ImageUrl',this.state.ImageUrl)
            formData.append('image',this.state.fileInput)
            console.log(this.state.ImageUrl)
            fetch("http://localhost:8000/EditProfile", {
                method:"PUT",
                headers: {
                    'Authorization': token ? `Bearer ${token} `: ''
                },
                body:formData
            })
            .then((response)=>{ 
                this.setState({status:response.status})
                return response.json();   
            })
            .then((dataRes)=>{ 
                console.log(dataRes.data)
                this.setState({
                    // errorsT:dataRes.data,
                    message:dataRes.message
                })
            })
            .catch(
                console.log('err')
            )
        }
    }

    componentDidMount() {
        fetch("http://localhost:8000/Profile", {
            method:"GET",
            headers: {
                'Authorization': token ? `Bearer ${token} `: ''
            },
            
        })
        .then((response)=>{ 
            return response.json(); 
        })
        .then((dataRes)=>{ 
            this.setState({
                name:dataRes.name,
                username:dataRes.username,
                mobileNumber:dataRes.mobileNumber,
                university:dataRes.university,
                Grade:dataRes.Grade,
                field:dataRes.field,
                email:dataRes.email,
                describtion:dataRes.describtion,
                ImageUrl:dataRes.ImageUrl
            })
        })
        .catch(
            console.log('err')
        )
    }
    handleName = (e)=>{
        this.setState({name: e.target.value});
    }
    handlemobileNumber = (e)=>{
        this.setState({mobileNumber: e.target.value});
    }
    handleuniversity = (e)=>{
        this.setState({university: e.target.value});
    }
    handleGrade = (e)=>{
        this.setState({Grade: e.target.value});
    }
    handlefield = (e)=>{
        this.setState({field: e.target.value});
    }
    handledescribtion = (e)=>{
        this.setState({describtion: e.target.value});
    }
    handleImage = e =>{
        this.setState({fileInput:e.target.files[0]});
    }

    render(){
        // const style={
        //     // marginLeft:"10px",
        //     float:"right"
        // }
        const style2={
            marginLeft:"10px"
        }

        // const style3={
        //     fontSize:"20px"
        // }
        const style4={
            boxShadow:"2px 2px 1px 1px #521752",
            padding:"20px",
            backgroundColor:"#9DA5B5",
            borderRadius:"30px"
        };
        return(
            <div>
                <h3 className="cent" style={{color:"#521752",marginTop:"20px"}}>{this.state.message}</h3>
                <div className="container-fluid mt-5 mb-5">
                    <div className="row">
                        <div className="col-sm-12 cent">
                            <form className="needs-validation" id="myform" style={style4}>
                                <div className="form-group row mt-5">
                                    <div className="col-sm-3 mt-3">
                                        <i className="fa fa-user" style={style2} ></i>
                                        <label for="name" >نام </label>
                                    </div>
                                    <div className="col-sm-9">
                                        <input className="form-control" type="text" id="name" name="name" required value={this.state.name} onChange={this.handleName} />
                                    </div>
                                    <div className="valid-feedback">valid</div>
                                    <div className="invalid-feedback">invalid</div>
                                </div>
                                <div className="form-group row">
                                    <div className="col-sm-3 mt-3">
                                        <i className="fa fa-phone" style={style2} ></i>
                                        <label for="mobileNumber" >شماره موبایل</label>
                                    </div>
                                    <div className="col-sm-9">
                                        <input className="form-control" type="text" id="mobileNumber" name="mobileNumber" required value={this.state.mobileNumber} onChange={this.handlemobileNumber} />
                                    </div>
                                    <div className="valid-feedback">valid</div>
                                    <div className="invalid-feedback">invalid</div>
                                </div>
                                <div className="form-group row">
                                    <div className="col-sm-3 mt-3">
                                        <i className="fa fa-university" style={style2} ></i>
                                        <label for="university" >نام دانشگاه</label>
                                    </div>
                                    <div className="col-sm-9">
                                        <input className="form-control" type="text" id="university" name="university" required value={this.state.university} onChange={this.handleuniversity} />
                                    </div>
                                    <div className="valid-feedback">valid</div>
                                    <div className="invalid-feedback">invalid</div>
                                </div>
                                <div className="form-group row">
                                    <div className="col-sm-3 mt-3">
                                        <i className="fa fa-address-book" style={style2} ></i>
                                        <label for="Grade" >مقطع تحصیلی </label>
                                    </div>
                                    <div className="col-sm-9">
                                        <input className="form-control" type="text" id="Grade" name="Grade" required value={this.state.Grade} onChange={this.handleGrade} />
                                    </div> 
                                    <div className="valid-feedback">valid</div>
                                    <div className="invalid-feedback">invalid</div>                               
                                </div>
                                <div className="form-group row">
                                    <div className="col-sm-3 mt-3">
                                        <i className="fa fa-address-book" style={style2} ></i>
                                        <label for="field"> رشته تحصیلی </label>
                                    </div>
                                    <div className="col-sm-9">
                                        <input className="form-control"  type="text" id="field" name="field" required value={this.state.field} onChange={this.handlefield} />
                                    </div>
                                    <div className="valid-feedback">valid</div>
                                    <div className="invalid-feedback">invalid</div>
                                </div>
                                <div className="form-group row">
                                    <div className="col-sm-3 mt-3">
                                        <i className="fa fa-clipboard" style={style2} ></i>
                                        <label for="describtion">توضیحات </label>
                                    </div>
                                    <div className="col-sm-9">
                                        <input className="form-control" type="text" id="describtion"  name="describtion" required value={this.state.describtion} onChange={this.handledescribtion} />
                                    </div>
                                    <div className="valid-feedback">valid</div>
                                    <div className="invalid-feedback">invalid</div>
                                </div>
                                <div className="custom-file">
                                    <input type="file" className="custom-file-input" id="CustomInput" name="image" onChange= {this.handleImage} />
                                    <label for="CustomInput" className="custom-file-label">عکسی با پسوند png/jpg/jpeg انتخاب کنید</label>
                                    <div className="valid-feedback">valid</div>
                                    <div className="invalid-feedback">invalid</div>
                                </div>
                                <button className="btn btnRegisterT mt-5 mb-5" onClick={this.submitChangePro.bind(this)} >تغییر اطلاعات</button>
                            </form>
                        </div>
                    </div>
                </div>











                {/* <div className="container-fluid">
                    <div className="row pro">
                        <div className="col-sm-3">
                            <button className="btn btn_style" style={{marginTop:"60px"}} onClick={()=>this.setState({changePro:!this.state.changePro})}>تغییر پروفایل</button>
                            <button className="btn btn_style" style={{marginTop:"20px"}} onClick={()=>this.setState({changePass:!this.state.changePass})}>تغییر پسورد</button>
                        </div>
                    </div>
                    <hr/>
                </div> */}
                {/* <div className="container-fluid">
                    <div className="row main">
                        <div className="col-sm-7 cent">
                            <form className="mb-5 frm bg-white">
                                <div className="input-group mt-5">
                                    <div className="row">
                                        <div className="col-sm-3" style={style2}>
                                            <i className="fa fa-user" style={style}></i>
                                            <label style={style3} >نام کاربری</label>
                                        </div>
                                        <div className="col-sm-9">
                                            <input  type="text" value={this.state.username} readOnly />
                                        </div>
                                        
                                    </div>
                                </div>
                                <div className="input-group mt-5">
                                    <div className="row">
                                        <div className="col-sm-3" style={style2}>
                                            <i className="fa fa-user" style={style}></i>
                                            <label style={style3} >نام </label>
                                        </div>
                                        <div className="col-sm-9">
                                            <input  type="text" value={this.state.name} onChange= {this.handleName} />
                                        </div>
                                        
                                    </div>
                                </div>
                                <div className="input-group">
                                    <div className="row">
                                        <div className="col-sm-3" style={style2}>
                                            <i className="fa fa-phone" style={style} ></i>
                                            <label style={style3} > شماره موبایل</label>
                                        </div>
                                        <div className="col-sm-9">
                                            <input  type="text" value={this.state.mobileNumber} onChange= {this.handlemobileNumber} />
                                        </div>
                                    </div>
                                </div>
                                <div className="input-group">
                                    <div className="row">
                                        <div className="col-sm-3" style={style2}>
                                            <i className="fa fa-university" style={style}></i>
                                            <label style={style3} >نام دانشگاه </label>
                                        </div>
                                        <div className="col-sm-9">
                                            <input  type="text" value={this.state.university} onChange= {this.handleuniversity} />
                                        </div>
                                    </div>
                                </div>
                                <div className="input-group">
                                    <div className="row">
                                        <div className="col-sm-3" style={style2}>
                                            <i className="fa fa-address-book" style={style}></i>
                                            <label style={style3} >رشته تحصیلی </label>
                                        </div>
                                        <div className="col-sm-9">
                                            <input  type="text" value={this.state.field} onChange= {this.handlefield} />
                                        </div>
                                    </div>
                                </div>
                                <div className="input-group mb-5">
                                    <div className="row">
                                        <div className="col-sm-3" style={style2}>
                                            <i className="fa fa-address-book" style={style}></i>
                                            <label style={style3} >مقطع  </label>
                                        </div>
                                        <div className="col-sm-9">
                                            <input  type="text" value={this.state.Grade} onChange= {this.handleGrade}/>
                                        </div>
                                    </div>
                                </div>
                                <div className="input-group">
                                    <div className="row mb-5">
                                        <div className="col-sm-3" style={style2}>
                                            <i className="fa fa-tasks" style={style}></i>
                                            <label style={style3} >ایمیل</label>
                                        </div>
                                        <div className="col-sm-9">
                                            <input  type="text" value={this.state.email} readOnly/>
                                        </div>
                                    </div>
                                </div>
                                <div className="input-group">
                                    <div className="row mb-4">
                                        <div className="col-sm-3" style={style2}>
                                            <i className="fa fa-clipboard" style={style}></i>
                                            <label style={style3} >توضیحات</label>
                                        </div>
                                        <div className="col-sm-9">
                                            <input type="text" value={this.state.describtion} onChange= {this.handledescribtion} />
                                        </div>
                                    </div>
                                </div>
                                <div className="input-group">
                                    <div className="row">
                                        <div className="col-sm-3">
                                            <i className="fa fa-address-book" style={style2} ></i>
                                            <label>عکس </label>
                                        </div>
                                        <div className="col-sm-9">
                                            <input  type="file" name="image" onChange= {this.handleImage} />
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <button  className="btn btn_style" onClick={this.submitChangePro.bind(this)}>تغییر اطلاعات</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div> */}
            </div>
        )
    }
}


///////////////////////////////////////////////////////////
export default Profile;