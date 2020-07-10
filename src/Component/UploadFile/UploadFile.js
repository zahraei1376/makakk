import React from 'react';
let token;
if(sessionStorage.getItem('UserLogin')) {
    token=JSON.parse(sessionStorage.getItem('UserLogin')).token
}else{
    token=false;
}

class UploadFile extends React.Component{
    constructor(props){
        super(props)
        this.state={
            message:"",
            selectValue:"",
            title:"",
            fileInput:null,
            courses:[],
            errorsT:"",
            // status:""
        }
    }
    componentDidMount(){
        // var data = {
        //     CourseName: this.props.location.CourseName
        // }
        fetch("http://localhost:8000/getLessonstaken", {
            headers: {
                'Authorization': token ? `Bearer ${token} `: ''
              },
            method:"GET"
            // body:  JSON.stringify(data)
        })
        .then((response)=>{ 
            // this.state({status:response.status})
             return response.json();   
        })
        .then((dataRes)=>{ 
            // console.log(dataRes)
            this.setState({
                // errorsT:dataRes.data,
                message:dataRes.message,
                courses:dataRes.cour
            })
            // console.log(this.state.courses)
        })
        .catch(
            console.log('err')
        )
    }

    submitUploadfile=(e)=>{
        e.preventDefault();
        const frm=document.getElementById('myform')
        if(frm.checkValidity()==false){
            frm.classList.add("was-validated")
        }else{
            frm.classList.add("was-validated")
            const formData=new FormData();

            formData.append('Cname', this.state.selectValue)
            formData.append('title',this.state.title)
            formData.append('Ufile',this.state.fileInput)
            // const data = {
            //     value: this.state.selectValue
            // }
            // console.log(this.state.selectValue)
            // console.log(this.state.fileInput)
            fetch("http://localhost:8000/UploadFile", {
                headers: {
                    'Authorization': token ? `Bearer ${token} `: ''
                },
                method:"POST",
                body: formData
            })
            .then((response)=>{ 
                return response.json();   
            })
            .then((dataRes)=>{ 
                // console.log(dataRes)
                this.setState({
                    errorsT:dataRes.data,
                    message:dataRes.message
                })
                // console.log(dataRes)
            })
            .catch(
                console.log('err')
            )
        }
        
        
    }
    handleChange=(e)=>{
        this.setState({selectValue:e.target.value});
    }
    handleTitle=(e)=>{
        this.setState({title:e.target.value});
    }
    handlefile = e =>{
        this.setState({fileInput:e.target.files[0]});
    }

    

    render(){
        let allCourse=["C#","C++","Java","Python"];
        let cc="";
        if (this.state.courses && this.state.courses.length>0) {
            let resultName=[]
            for(let i= 0 ;i<this.state.courses.length ; i++){
                resultName[i]=this.state.courses[i].nameCours
            }
            cc=allCourse.map((cr,index) => {
                return resultName.indexOf(cr) !== -1 && (
                    <option className="form-control" value={cr} key={index} onClick={this.handleChange}>{cr}</option>
                )
            })
        }
        // if(this.state.courses && this.state.courses.length>1)
        // {
        //     cc=this.state.courses.map((c,index)=>{
        //         return(
        //             <option value={c.nameCours} key={index}>{c.nameCours}</option>
        //         )
        //     })
        // }else if(this.state.courses && this.state.courses.length==1){
        //     cc=<option value={this.state.courses[0].nameCours}>{this.state.courses[0].nameCours}</option>
        //     console.log(cc)
        // }else{
        //     cc=""
        // }
       
        const style={
            marginTop:'50px'
        }
        
        // const style2={
        //     color:"red",
        //     textAlign:"center",
        //     backgroundColor:"#403459"
        // };

        let er=this.state.errorsT;
        let ee=[];
        if(er){
            for (let i = 0; i < er.length ; i++) {
                ee.push(<p key={i}>{this.state.errorsT[i].msg}</p>)
            }
        }else{
            ee = ""
        }


        return(
            <div>
                <div className="container-fluid">
                    <div className="row">
                        <h6 className="col-sm-4 cent bg-white mt-5 mb-2">
                        <br/>
                        یکی از درس های زیر را انتخاب نمایید
                        <br/>
                        </h6>
                    </div>
                    <div className="row" className="cent">
                        <h6 className="mt-3" style={{color:"#521751"}}>{this.state.message}</h6>
                        
                        {/* {ee} */}
                        {/* {this.state.status!="200" || this.state.status!="201"?<h4 style={{color:"red"}}>{this.state.message}</h4>:<h4 style={{color:"green"}}>{this.state.message}</h4>} */}
                        {/* {this.state.message} */}
                    </div>
                    
                    <div className="row cent" style={style} >
                        <div className="col-sm-4"></div>
                        <div className="col-sm-4">
                            <form id="myform" className="frm mb-5">
                                <div className="form-group row">
                                    <div className="col-sm-6 mt-1">
                                        <label for="course">درس ها </label>
                                    </div>
                                    <div className="col-sm-6">
                                        <select
                                            id="course"
                                            value={this.state.selectValue} 
                                            onChange={this.handleChange} 
                                            required
                                        >
                                            <option></option>
                                            {cc ? cc :""}
                                        </select> 
                                    </div>
                                    
                                    <div className="valid-feedback">valid</div>
                                    <div className="invalid-feedback">invalid</div>
                                </div>
                                {/* <div className="input-group mt-2 mb-5">
                                    <label> عنوان</label>
                                    <input type="text" name="title" required value={this.state.title} onChange={this.handleTitle}/>
                                </div> */}
                                <div className="form-group row">
                                    {/* <div className="col-sm-12">
                                        <label for="title">عنوان </label>
                                    </div> */}
                                    <div className="col-sm-12">
                                        <input className="form-control" id="title" type="text" name="title" placeholder="عنوان"  value={this.state.title} onChange={this.handleTitle} required />
                                    </div>
                                    <div className="valid-feedback">valid</div>
                                    <div className="invalid-feedback">invalid</div>
                                </div>
                                <div className="custom-file mb-5">
                                    <input className="custom-file-input" id="CustomInput" type="file" name="Ufile" onChange= {this.handlefile} required multiple />
                                    <label for="CustomInput" className="custom-file-label">فایلی با پسوند pdf انتخاب کنید</label>
                                    <div className="valid-feedback">valid</div>
                                    <div className="invalid-feedback">invalid</div>
                                </div>
                                {/* <div className="input-group mt-2 mb-5">
                                    <label> فایل</label>
                                    <input type="file" name="Ufile" onChange= {this.handlefile} required multiple  />
                                </div> */}
                               <button className="btn btn_style2" onClick={this.submitUploadfile.bind(this)}> آپلود فایل </button>
                            </form>
                        </div>
                        <div className="col-sm-4"></div>
                    </div>
                </div>
            </div>

        )
    }
}

export default UploadFile;