import React from 'react';
import  Classes from './Teacher.module.css';
import Fade from 'react-reveal/Fade';

let token;
if(sessionStorage.getItem('UserLogin')) {
    token=JSON.parse(sessionStorage.getItem('UserLogin')).token
}else{
    token=false;
}

const Teacher=(props)=>{
    let likeCount=props.likeCount;
    let message="";
    const like=(event)=>{
        var data = {
            username: props.username
        }
        fetch("http://localhost:8000/liked", {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': token ? `Bearer ${token} `: ''
            },
            method:"POST",
            body: JSON.stringify(data)
        })
        .then((response)=>{ 
            return response.json();   
        })
        .then((dataRes)=>{ 
            likeCount=dataRes.count;
            message=dataRes.message;
            alert(message);
        })
        .catch(
            console.log('err')
        )
    }
   
    
    return(
        <Fade left >
            <div className="col-sm-12 col-md-3  mt-3">
                <div className="card bg-light borderT hovereffect">
                    <img className="card-img-top cent img-responsive" style={{width:'250px',height:'200px'}} src={props.img} />
                    {token?<div class="overlay">
                        <i className="fa fa-heart" onClick={like}>{" "+props.likeCount}</i>
                        {/* <h2>Effect 10</h2> */}
                        {/* <p class="icon-links">
                            <a href="#">
                                <span class="fa fa-twitter"></span>
                            </a>
                            <a href="#">
                                <span class="fa fa-facebook"></span>
                            </a>
                            <a href="#">
                                <span class="fa fa-instagram"></span>
                            </a>
                        </p> */}
                    </div>:""}
                    <div className="card-body">
                        <h5 className="card-title" style={{color:"#521751"}}>{props.name}</h5>
                        <h6 className="card-subtitle mt-2 mb-4 mt-4">{" مقطع تحصیلی : "+ props.Grade}</h6>
                        <h6 className="card-subtitle mt-2 mb-4">{"رشته تحصیلی: " + props.field}</h6>
                        <p className="card-text">{props.describtion}</p>
                        {/* <a href={"http://localhost:8000/download/" + (cr.filePath.split('\\').splice(1,2).join('\\'))} className="card-link">فایل</a> */}
                    </div>
                </div>
            </div>
        </ Fade>
        
        // <div className="mt-5">
        //     <div className="row"  style={style1}>
        //         <div className="col-sm-12 col-md-3">
        //             <img src={props.img} style={{width:'150px',height:'150px'}}/>
        //         </div>
        //         <div className="col-sm-12 col-md-9">
        //             <h3 className={Classes.fullname}>{props.name}</h3>
        //             <h6>{"مقطع تحصیلی : "+ props.Grade}</h6>
        //             <h6>{"رشته تحصیلی : " + props.field}</h6>
        //             <p>{props.describtion}</p>
        //             {/* <div className={Classes.discription}>{props.describtion}</div> */}
        //         </div>
               
        //     </div>
        //     <br/>
        // </div>
    )

}

export  default  Teacher;
