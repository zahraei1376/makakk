import React from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import './getFilesPage.css';
import download from '../../asset/img/download.png';
import { withRouter } from 'react-router-dom';

// let token;
// if(sessionStorage.getItem('UserLogin')) {
//     token=JSON.parse(sessionStorage.getItem('UserLogin')).token
// }else{
//     token=false;
// }

class getFiles extends React.Component{
    constructor(props){
        super(props)
        this.state={
            files:[],
            message:"",
            name:"",
            // CourseName:this.props.match.state.CourseName,
            handleC:false,
            handleJ:false,
            handleP:false,
            handleCC:false,
            downloadLayout:false
        }
    }
    componentDidMount(){
        var data = {
            // CourseName:this.state.CourseName
            // CourseName:this.props.location.state.CourseName
            CourseName:this.props.location.state
        }
        fetch('http://localhost:7000/getFilePage', {
            method: "POST",
            headers: {
                // 'Authorization': token ? `Bearer ${token} `: '',
                // 'Content-Type': 'application/json'
              },
            body:  JSON.stringify(data)
        })
        .then((response)=>{ 
            return response.json();   
        })
        .then((dataRes)=>{
            console.log(dataRes)
            this.setState({
                // files:dataRes.filess[0].files,
                files:dataRes.filess,
                message:dataRes.message
            }) 
            // console.log((("http://localhost:8000/download").split('/')).pop())
            // console.log((dataRes.filess[0].files[0].filePath).split('\\').shift())
        })
        .catch(
            console.log('err')
        )
    }
    viewHandler =async (fileID) => {
        console.log(fileID);
        // const instance = await PSPDFKit.load({
        //     container: "#pspdfkit",
        //     pdf: 'http://localhost:8000/'+fileID,
        //     // licenseKey: "YOUR_LICENSE_KEY_GOES_HERE"
        //   });
          
        //   console.log("PSPDFKit for Web is ready!");
        //   console.log(instance);
        fetch('http://localhost:8000/'+fileID, {
            method: "GET",
            headers: {
                "Content-Type": "application/pdf"
            }
        })
        .then(res => res.blob())
        .then(response => {
            //Create a Blob from the PDF Stream
            console.log(response);
            const file = new Blob([response], {
            type: "application/pdf"
            });
            //Build a URL from the file
            const fileURL = URL.createObjectURL(file);
            //Open the URL on new Window
            window.open(fileURL);
        })
        .catch(error => {
            console.log(error);
        });
    //    /////////////////////////////
        // fs.readFile('http://localhost:8000/'+fileID, (err, pdfBuffer) => {
        //     // pdfBuffer contains the file content
        //     new pdfreader().parseBuffer(pdfBuffer, function(err, item) {
        //       if (err) console.log(err);
        //       else if (!item) callback();
        //       else if (item.text) console.log(item.text);
        //     });
        //   });
        // return (
        //     <PDFReader url={'http://localhost:8000/'+fileID}></PDFReader>
        //     // <ReaderPdf url='http://localhost:8000/'fileID />
        //     // <PDFViewer
        //     //     document={{
        //     //         url: 'http://localhost:8000/'+fileID,
        //     //     }}
        //     // />
        // )
        ///////////////////
        // axios({
        //     url: 'http://localhost:8000/download/'+fileID,
        //     method: 'GET',
        //     //      headers: {
        //     //     // 'Authorization': token ? `Bearer ${token} `: '',
        //     //     "Content-Type": "application/pdf"
        //     // },
        //     responseType: 'blob', // important
        //   }).then((response) => {
        //     console.log(response);
        //     const url = window.URL.createObjectURL(new Blob([response.data]));
        //     const link = document.createElement('a');
        //     link.href = url;
        //     link.setAttribute('download', 'file.pdf');
        //     document.body.appendChild(link);
        //     link.click();
        //   });
          /////////////////////////////////
        // fetch(`http://localhost:8000/download/${fileID}`, {
        //     method: "GET",
        //     headers: {
        //         'Authorization': token ? `Bearer ${token} `: '',
        //         "Content-Type": "application/pdf"
        //     }
        // })
        // .then(res => {res.blob();console.log(res)})
        // .then(response => {
        //     //Create a Blob from the PDF Stream
        //     console.log(response);
        //     const file = new Blob([response], {
        //     type: "application/pdf"
        //     });
        //     console.log(file);
        //     //Build a URL from the file
        //     const fileURL = URL.createObjectURL(file);
        //     //Open the URL on new Window
        //     // window.open(response.data, '_blank');
        //     window.open(fileURL, '_blank');
        // })
        // .catch(error => {
        //     console.log(error);
        // });
      };


    render(){
        if (this.state.handleC) {
            return <Redirect to={{
                pathname: '/getFilePage',
                state:{CourseName:"C#"}
            }}/>
        }
        if (this.state.handleP) {
            return <Redirect to={{
                pathname: '/getFilePage',
                state:{CourseName:"Python"}
            }}/>
        }
        if (this.state.handleJ) {
            return <Redirect to={{
                pathname: '/getFilePage',
                state:{CourseName:"Java"}
            }}/>
        }
        if (this.state.handleCC) {
            return <Redirect to={{
                pathname: '/getFilePage',
                state:{CourseName:"C++"}
            }}/>
        }

        

        // /////////////////
       
        // //////////////////
        
        let table=""
        if(this.state.files[0] && this.state.files[0].files.length>0 ){
            table=this.state.files[0].files.map((cr) => {
                return (
                    <div>
                        <div className="row trborder" key={cr._id}>
                            <div className="col-sm-12">
                                <img src={"http://localhost:8000/" +(cr.user.ImageUrl.split('\\').splice(1,2).join('\\'))} style={{width:"30px",height:"30px",float:"right",marginLeft:"10px"}}/>
                                <h5 style={{float:"right"}}>{cr.user.name}</h5>
                            </div>
                            <div className="col-sm-12 col-md-9  mt-2">
                                <h6 className="mr-4 mt-1" style={{float:"right",color:"black"}}>{cr.titleFile}</h6>
                            </div>
                            <div className="col-sm-12 col-md-3">
                                <button className="btn"><a onClick={() =>this.viewHandler(cr.filePath.split('\\').splice(1,2).join('\\'))} style={{textDecoration:"none"}} > <img src={download} style={{width:"50px",height:"50px"}}/> </a></button>
                                {/* <button className="btn"><a onClick={()=>this.getFile(cr.filePath.split('\\').splice(1,2).join('\\'))} style={{textDecoration:"none"}} ><img src={download} style={{width:"50px",height:"50px"}}/>  </a></button> */}
                                {/* <button className="btn"><a href={"http://localhost:8000/download/" + (cr.filePath.split('\\').splice(1,3).join('\\'))} style={{textDecoration:"none"}} > <img src={download} style={{width:"50px",height:"50px"}}/> </a></button> */}
                                {/* <button className="btn"><a > <img src={download} style={{width:"50px",height:"50px"}}/> </a></button> */}
                            </div>
                        </div>
                        <br/>
                    </div>
                )
            })
        }else{
            table=<h1 className="cent" style={{color:"red"}}>فایلی وجود ندارد</h1>
        }

        const style={
            marginTop:"50px"
        }
        console.log("name"+this.state.name)
        return(
            <div className="container" style={style}>
                <div className="row">
                    <div className="col-sm-12 col-md-3 main gg">
                        <ul>
                            <li><a href="" onClick={()=>this.setState({handleC:!this.state.handleC,name:"C#"})}>دریافت فایل های C#</a></li>
                            <li><a href="" onClick={()=>this.setState({handleJ:!this.state.handleJ,name:"Java"})}>دریافت فایل های java</a></li>
                            <li><a href="" onClick={()=>this.setState({handleP:!this.state.handleP,name:"Python"})}>دریافت فایل های python</a></li>
                            <li><a href="" onClick={()=>this.setState({handleCC:!this.state.handleCC,name:"C++"})}>دریافت فایل های C++</a></li>
                        </ul>
                    </div>
                    <div className="col-sm-12 col-md-6 col-md-push-1 ff">
                        {/* {token && this.state.files[0] ?<h1 className="cent">فایل های درس {this.state.files[0].nameCours}</h1>:<h1 className="cent">فایل های درس {this.state.CourseName}</h1>}
                        <hr className="mb-5"/>
                        {token && this.state.files ? table :<Redirect to='/RegLog'/>} */}
                        {this.props.currentUser && this.state.files[0] ?<h1 className="cent">فایل های درس {this.state.files[0].nameCours}</h1>:<h1 className="cent">فایل های درس {this.state.CourseName}</h1>}
                        <hr className="mb-5"/>
                        {this.props.currentUser && this.state.files ? table :<Redirect to='/RegLog'/>}
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) =>({
    currentUser:state.user.currentUser
})

export default connect(mapStateToProps)(withRouter(getFiles));