import  React from 'react';
import axios from 'axios';

class ExplainPartner extends React.Component{
    constructor(props){
        super(props)
        this.state={
            loadedPartner:null
        }
    }
    componentDidUpdate() {
        if (this.props.id){
            if (!this.state.loadedPartner || (this.state.loadedPartner && this.state.loadedPartner.id!==this.props.id)){
                axios.get('/posts/'+ this.props.id).then(
                    response=>{
                        this.setState({loadedPartner:response.data})
                    }
                )
            }
        }
    }
    DeletePartnerfromServer=()=>{
        axios.delete('/posts/' +this.props.id).then(
            response=>{
                console.log(response);
            }
        )
    }
    render(){
        // if (this.props.id && !this.state.loaded){
        //     return(
        //         <p>درحال بارگاری مطلب</p>
        //     )
        // }
        let explain=<h6>یک مطلب را انتخاب کنید</h6>
        if (this.props.id){
            explain=<h6>یک مطلب درحال بارگذاری</h6>
        }
        if (this.props.id && this.state.loadedPartner){
            explain=<div>
                {/*{this.state.loaded.img}*/}
                <h3>{this.state.loadedPartner.title}</h3>
                <p>{this.state.loadedPartner.body}</p>
                <button className="btn btn-danger" onClick={this.DeletePartnerfromServer}>حذف</button>
            </div>
        }


        return explain;
        // else {
        //     return(
        //         <p>یک مظلب را انتخاب کنید</p>
        //     )

        // }

    }


}
export default ExplainPartner;