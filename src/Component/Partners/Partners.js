import  React from 'react';
import Partner from './Partner';
// import PropTypes from 'prop-types';
import  axios from 'axios';
// import Teacher from "../Teachers/Teacher/Teacher";
import faker from "faker/locale/fa";
import ExplainPartner from "./explainPartner/explainPartner";
import Spinner from '../UI/spinner/spinner';

class Partners extends React.Component{
    constructor(props){
        super(props)
        this.state={
            partners:[],
            selectedPostId:null,
            iserr:false
        }
        // console.log('constructor');
        // console.log(this.props);
    }
    // state={
    //     partners:[
    //         // {Name:"دانشگاه نوشیروانی بابل" ,Location:"شهرستان بابل"},
    //         // {Name:"شرکت چنته" ,Location:" شهرستان بابل"},
    //         // {Name:"اداره کل تعاون،کار و رفاه اجتماعی", Location:"استان مازندران"},
    //         // {Name:"توسعه کسب و کار و اشتغال پایدار ", Location:"رسته فناوری اطلاعات "}
    //     ],
    //     showp:true
    //
    // }

    componentDidMount() {
        axios.get('https://jsonplaceholder.typicode.com/posts').then(
            response=>{
                const tedad=response.data.splice(0,4);
                const updatepart=tedad.map(part=>{
                    return(
                        part
                    )
                })
                this.setState({partners:updatepart})

                // this.setState({partners:response.data})
            }
        ).catch(
            error=>{
                this.setState({iserr:true})
            }
        )
    }

    // shouldComponentUpdate(nextProps, nextState, nextContext) {
    //     console.log(nextProps,nextState,nextContext);
    //     console.log('should component update build!!');
    //     return true;
    // }
    // getSnapshotBeforeUpdate(prevProps, prevState) {
    //     console.log(prevState,this.state);
    //     console.log(prevProps,this.props);
    // }
    //
    // componentDidUpdate(prevProps, prevState, snapshot) {//مقادییر قبلی و بعدی استیت را دارد
    // }
    //
    // componentWillUnmount() {//for unrelease component
    // }
    selectedItem(sid){
        this.setState({selectedPostId:sid})
    }

    // describtion =(newf)=>{
    //     console.log(newf)
    // }
    render() {
        let partner=null;
        if (this.state.iserr){
            // partner=<h3>خطایی رخ داده اطفا مجددا تلاش کنید</h3>
            partner=<Spinner/>
        }
        else {
            partner=this.state.partners.map(part=>{
                return <Partner
                    img={faker.image.avatar()}
                    // id={part.id}
                    Name={part.title}
                    Location={part.body}
                    key ={part.id}
                    clicked={()=>this.selectedItem(part.id)}
                />

            })
        }

        return(
            <div>
                <ExplainPartner id={this.state.selectedPostId}/>
                <div className="row">
                    {partner}
                </div>
                {
                    // this.state.partners.map((par,index)=>{
                    //    return(
                    //        <Partner img={par.img} id={par.id} name={par.name} click={this.describtion.bind(this,'ali')} key={index} />
                    //
                    //    )
                    // })
                    // this.state.showp===true?
                    //     <div>
                    //         <Partner Name={this.state.partners[0].Name} Location={this.state.partners[0].Location} click={this.describtion.bind(this,'ali')} />
                    //         <Partner Name={this.state.partners[1].Name} Location={this.state.partners[1].Location} click={this.describtion.bind(this,'ab')}/>
                    //         <Partner Name={this.state.partners[2].Name} Location={this.state.partners[2].Location} click={this.describtion.bind(this,'ac')}/>
                    //         <Partner Name={this.state.partners[3].Name} Location={this.state.partners[3].Location} click={this.describtion.bind(this,'ad')}/>
                    //     </div>
                    //     :null
                }
            </div>



        )
    }

}

// Partners.propTypes={
//     Name:PropTypes.string,
//     Location:PropTypes.string,
// }

export default Partners;