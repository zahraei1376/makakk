import React from 'react';
let token;
if(sessionStorage.getItem('UserLogin')) {
    token=JSON.parse(sessionStorage.getItem('UserLogin')).token
}else{
    token=false;
}

class getCourses extends React.Component{
    constructor(props){
        super(props)
        this.state={
            selectValue:"",
            message:"",
            courses:[]
        }
    }
    componentDidMount(){
        fetch("http://localhost:8000/getLessonstaken", {
            headers: {
                'Authorization': token ? `Bearer ${token} `: ''
              },
            method:"GET"
        })
        .then((response)=>{ 
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

    submitgetCourse=(e)=>{
        e.preventDefault(); 
          
        const data = {
            value: this.state.selectValue
        }
        fetch("http://localhost:8000/getCourse", {
            headers: {
                'Authorization': token ? `Bearer ${token} `: '',
                'Content-Type': 'application/json'
              },
            method:"POST",
            body: JSON.stringify(data)
        })
        .then((response)=>{ 
             return response.json();   
        })
        .then((dataRes)=>{ 
            console.log(dataRes)
            this.setState({
                // errorsT:dataRes.data,
                message:dataRes.message,
                cours:dataRes.cours
            })
        })
        .catch(
            console.log('err')
        )
        
    }
    handleChange=(e)=>{
        this.setState({selectValue:e.target.value});
    }

    render(){
        const style={
            marginTop:'50px'
        }

        let cc="";
        let allCourse=["C#","C++","Java","Python"];
        if (this.state.courses && this.state.courses.length>0) {
            let resultName=[]
            for(let i= 0 ;i<this.state.courses.length ; i++){
                resultName[i]=this.state.courses[i].nameCours
            }
            cc=allCourse.map((cr,index) => {
                return resultName.indexOf(cr) == -1 && (
                    <option value={cr} key={index} onClick={this.handleChange}>{cr}</option>
                )
            })
        }
        else{
            cc=allCourse.map((cr,index) => {
                return (
                    <option value={cr} key={index} onClick={this.handleChange}>{cr}</option>
                )
            })
        }
        // if(this.state.courses.length>0)
        // {
        //     allCourse.map(cr=>{
        //         cc=this.state.courses.map((c,index)=>{
        //             if(cr!==c)
        //             {
        //                 return(
        //                     <option value={cr} key={index} onClick={this.handleChange} >{cr}</option>
        //                 )
        //             }
        //             // allCourse.slice(index, 1)
        //         })
        //     })
            
        // }else{
        //     cc=allCourse.map((c,index)=>{
        //         return(
        //             <option value={c} key={index} onClick={this.handleChange} >{c}</option>
        //         )
        //     })
        // }
        
        return(
            <div>
                <div className="container-fluid">
                    <div className="row">
                        <h6 className="col-sm-4 cent bg-white mt-5">
                        <br/>
                        یکی از درس های زیر را انتخاب نمایید
                        <br/>
                        </h6>
                    </div>
                    <br/>
                    <div style={{color:"#521751",fontSize:"32px"}} className="cent">
                        {this.state.message}
                    </div>
                    <div className="row cent" style={style} >
                        <div className="col-sm-4"></div>
                        <div className="col-sm-4 frm">
                            <form>
                                <div className="input-group mt-2 mb-5">
                                    <label for="gcourse">درس ها</label>
                                    <select
                                        id="gcourse"
                                        value={this.state.selectValue} 
                                        onChange={this.handleChange}
                                        // className="form-control"  
                                    >
                                        <option></option>
                                        {cc}
                                        {/* <option value="1">C#</option>
                                        <option value="2">C++</option>
                                        <option value="3">java</option>
                                        <option value="4">python</option> */}
                                    </select> 
                                </div>
                               <button className="btn btn-info" onClick={this.submitgetCourse.bind(this)} >دریافت درس </button>
                            </form>
                        </div>
                        <div className="col-sm-4"></div>
                    </div>
                </div>
            </div>
        )
    }
}

export default getCourses;