import  React from 'react';
import './Startup.css';
import faker from "faker/locale/fa";
import  axios from 'axios';
import ExplainPartner from "../Partners/explainPartner/explainPartner";
import Spinner from '../UI/spinner/spinner';

class Startups extends React.Component{
    constructor(props){
        super(props)
        this.state={
            Startups:[],
            isSelectedItem:null,
            iserr:false
        }
    }

    componentDidMount() {
        axios.get('https://jsonplaceholder.typicode.com/posts').then(
            response=>{
                const tedad=response.data.splice(0,7);
                const newS=tedad.map(Start=>{
                    return Start
                })
                this.setState({Startups:newS});
            }
        ).catch(
            error=>{
                this.setState({iserr:true});
            }
        )
    }
    SelectedItem(id){
        this.setState({isSelectedItem:id})
    }

    render(){
        let startup=null;
        if(this.state.iserr){
            startup=<Spinner/>
            // startup =<h1 style={{textAlign:'center',marginLeft:'auto',marginRight:'auto',marginTop:'40px',color:'red'}}>خطایی رخ داده مجددا امتحان کنید...</h1>
        } else {
            startup=this.state.Startups.map(Star=>{
                return <Startup
                    key={Star.id}
                    img={faker.image.avatar()}
                    Name={Star.id}
                    description={Star.title}
                    clicked={()=>this.SelectedItem(Star.id)}
                />
            })
        }
        return(
            <div className="clr">
                <h1 style={{color:'#521751'}}>استارتاپهایی که مشغول پیشروی هستند...</h1>
                <br/>
                <h6>کلیه این استارتاپها یا به صورت ایده کامل بوده اند یا جذب در ایده دیگری شده اند وبه صورت مشارکت با مرکز در حال پیشرفت هستند.</h6>
                <br/>
                <ExplainStartup id={this.state.isSelectedItem}/>
                <div className="row">
                    {startup}
                </div>
            </div>

        )
    }

}
class Startup extends React.Component{
    constructor(props){
        super(props)
        // this.state={
        //     // img:"",
        //     // Name:"",
        //     // description:""
        // }
    }


    render() {
        return(
            <div className="col-sm-12 col-md-3 col-md-push-1 borderSturtup" onClick={this.props.clicked}>
                <img src={this.props.img} alt="" style={{width:'200px',height:'300px'}}/>
                {this.props.img}
                <h5>{this.props.Name}</h5>
            </div>
        )
    }

}

class ExplainStartup extends React.Component{
    constructor(props){
        super(props)
        this.state={
            loadedStartup:null
        }
    }
    componentDidUpdate() {
        if (this.props.id){
            if (!this.state.loadedStartup || (this.state.loadedStartup && this.state.loadedStartup.id!==this.props.id)){
                axios.get('https://jsonplaceholder.typicode.com/posts/'+ this.props.id).then(
                    response=>{
                        this.setState({loadedStartup:response.data})
                    }
                )
            }
        }
    }

    render() {
        let explain=<h6>یک مطلب را انتخاب کنید</h6>
        if (this.props.id){
            explain=<h6>یک مطلب درحال بارگذاری</h6>
        }
        if (this.props.id && this.state.loadedStartup){
            explain=<div className={"exp"}>
                {/*{this.state.loaded.img}*/}
                <h3>{this.state.loadedStartup.title}</h3>
                <p>{this.state.loadedStartup.body}</p>
                {/*<button className="btn btn-danger" onClick={this.DeletePartnerfromServer}>حذف</button>*/}
            </div>
        }


        return explain;
    }
}

export default Startups;


