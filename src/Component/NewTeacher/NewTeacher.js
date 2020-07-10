import React from 'react';
// import teacherImg from '../../asset/img/teacherpic.jpg';

// import './newTeacher.css';
import back from '../../asset/img/6.jpg';

let token;
if(sessionStorage.getItem('UserLogin')) {
    token=JSON.parse(sessionStorage.getItem('UserLogin')).token
}else{
    token=false;
}


class NewTeacher extends React.Component{
    constructor(props){
        super(props)
        this.state={
            university:"",
            Grade:"",
            field:"",
            describtion:"",
            fileInput:null,
            errorsT:"",
            message:"",
            status:""
        }
    }
    submitRegister = (e)=>{

        e.preventDefault();
        // const frm2=document.querySelector()
        const frm=document.getElementById('myform')
        if(frm.checkValidity()==false){
            frm.classList.add("was-validated")
            // frm.addClass("was-validated")
        }else{
            frm.classList.add("was-validated")
            const formData=new FormData();

            formData.append('university', this.state.university)
            formData.append('Grade',this.state.Grade)
            formData.append('field',this.state.field)
            formData.append('describtion',this.state.describtion)
            formData.append('image',this.state.fileInput)
            
            console.log(formData)
            fetch("http://localhost:8000/RegisterTeacher", {
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
                    errorsT:dataRes.data,
                    message:dataRes.message
                })
            })
            .catch(
                console.log('err')
            )
            
        }
    }

    handleUniversity = (e)=>{
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
    handledescribtionImage = e =>{
        this.setState({fileInput:e.target.files[0]});
    }
    
    render(){
        let er=this.state.errorsT;
        let ee=[];
        const style={
            // marginTop:"60px",
            color:"red",
            textAlign:"center",
            backgroundColor:"#403459"
        };
        const style2={
            marginLeft:"10px",
            color:"#521751"
        };
        const style3={
            // boxShadow:"1px 1px 1px 1px #521752",
            padding:"20px",
            // color:"#521751",
            color:"white",
            backgroundColor:"rgba(0,0,0,.5)"
            // backgroundColor:"#9DA5B5"
        };

        const style4={
            backgroundImage: 'url("'+back+'")',
            backgroundAttachment: "fixed",
            backgroundPosition: "center", 
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
        }
        // const style5={
        //     border: "1px solid #521751",
        //     outline: "none",
        //     background: "none",
        //     color: "white",
        //     fontSize: "18px",
        //     width: "80%",
        //     float: "left",
        //     margin:"0 10px",
        //     borderBottom: "1px solid #521751",
        // }
        // const style5={
        //     width: "280px",
        //     position: "absolute",
        //     top: "50%",
        //     left:" 50%",
        //     transform: "translate(-50%,-50%)",
        //     color: "white",
        // }
        // const style6={
        //     width: "100%",
        //     fontSize:"20px",
        //     padding: "8px 0",
        //     margin: "8px 0",
        //     borderBottom: "1px solid #521751",
        // }
        // const style7={
        //     border: "none",
        //     outline: "none",
        //     background: "none",
        //     color: "white",
        //     fontSize: "18px",
        //     width: "80%",
        //     float: "left",
        //     margin:"0 10px",
        // }
        // const style8={
        //     width: "26px",
        //     float: "left",
        //     textAlign: "center",
        // }
        if(er){
            for (let i = 0; i < er.length ; i++) {
                ee.push(<p key={i}>{this.state.errorsT[i].msg}</p>)
            }
        }else{
            ee = ""
        }

        return(
            <div style={style4}>
                <div style={style}>
                    {ee}
                    {this.state.message}
                </div>
                {/* <div className="container-fluid">
                    <div className="teacher-box" style={style5}>
                        <h1>ثبت نام معلم</h1>
                        <div className="textbox" style={style6}>
                            <i className="fa fa-user" aria-hidden="true" style={style8}></i>
                            <input type="text" placeholder="username" style={style7}/>
                        </div>
                        <div className="textbox" style={style6}>
                            <i className="fa fa-lock" aria-hidden="true" style={style8}></i>
                            <input type="password" placeholder="password" style={style7}/>
                        </div>
                        <input className="btn" type="button" name="" value="signup"/>
                    </div>
                </div> */}
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-sm-12 col-md-6 cent">
                            <form className="needs-validation mb-5 mt-5" id="myform" style={style3}>
                                <h3>ثبت نام به  عنوان معلم</h3>
                                <div className="form-group row mt-5">
                                    <div className="col-sm-3 mt-3">
                                        <i className="fa fa-university" style={style2} ></i>
                                        <label for="university" >نام دانشگاه</label>
                                    </div>
                                    <div className="col-sm-9">
                                        <input className="form-control" type="text" id="university" name="university" required value={this.state.university} onChange={this.handleUniversity} />
                                    </div>
                                    <div className="valid-feedback">valid</div>
                                    <div className="invalid-feedback">invalid</div>
                                </div>
                                <div className="form-group row">
                                    <div className="col-sm-3 mt-3">
                                        <i className="fa fa-user" style={style2} ></i>
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
                                        <i className="fa fa-book" style={style2} ></i>
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
                                        <i className="fa fa-book" style={style2} ></i>
                                        <label for="describtion">توضیحات </label>
                                    </div>
                                    <div className="col-sm-9">
                                        <input className="form-control" type="text" id="describtion"  name="describtion" required maxLength='30' value={this.state.describtion} onChange={this.handledescribtion} />
                                    </div>
                                    <div className="valid-feedback">valid</div>
                                    <div className="invalid-feedback">invalid</div>
                                </div>
                                <div className="custom-file">
                                    <input type="file" name="image" className="custom-file-input" id="CustomInput" onChange= {this.handledescribtionImage} required />
                                    <label for="CustomInput" className="custom-file-label">عکسی با پسوند png/jpg/jpeg انتخاب کنید</label>
                                    <div className="valid-feedback">valid</div>
                                    <div className="invalid-feedback">invalid</div>
                                </div>
                                <button className="btn btnRegisterT mt-5 mb-5" onClick={this.submitRegister.bind(this)} >ثبت معلم</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            
        )
    }
}

export default NewTeacher;