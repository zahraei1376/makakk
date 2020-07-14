import React from 'react';
import './Prophecy.scss';
import worshop from '../../../asset/img/workShop.png';
import workPlace from '../../../asset/img/workPlace.png';
import WorkMarket from '../../../asset/img/workMarket.png';
import manager from '../../../asset/img/Managework.png';
import handnshake from '../../../asset/img/handShake.png';
import mentor from '../../../asset/img/mentor.jpg';
import Fade from 'react-reveal/Fade';

class Prophecies extends React.Component{
    constructor(props){
        super(props)
        this.state={
            prophency:[
                {type:'کارگاه آموزشی' , img:worshop},
                {type:'فضای کار' , img:workPlace},
                {type:'ورود به بازار کار' , img:WorkMarket},
                {type:'منتور' , img:mentor},
                {type:'هدایت کارهای اشتراکی' , img:manager},
                {type:'تجاری سازی' , img:handnshake}
            ]
        }
    }

    render() {
        let proph=null;
        proph=this.state.prophency.map(pr=>{
            return <Prophecy key={Math.random()}
                type={pr.type}
                img={pr.img}
            />
        })
        return(
            <div>
                {proph}
            </div>
        )
    }

}



class Prophecy extends React.Component{
    constructor(props){
        super(props)
        this.state={};
    }

    render() {
        return(
            <Fade top >
                <div className="part1 h col-sm-12 col-sm-push-1 col-md-3 col-md-push-1 margin-top-small">
                    <img src={this.props.img}  style={{width:'150px',height:'150px',marginBottom:'40px'}}/>
                    <h5 style={{marginBottom:'40px',color:"#521751"}}>{this.props.type}</h5>
                </div>
            </ Fade>
        )
    }

}


export default Prophecies;