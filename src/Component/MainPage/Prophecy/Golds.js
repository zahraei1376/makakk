import React from 'react';
import './Prophecy.scss';
import {Animated} from "react-animated-css";
import icon1 from '../../../asset/img/icon1.png';
import icon2 from '../../../asset/img/icon2.png';
import icon3 from '../../../asset/img/icon3.png';
import Fade from 'react-reveal/Fade';


class Golds extends React.Component{
    constructor(props){
        super(props)
        this.state={
            prophency:[
                {type:'تجاری سازی استارتاپها' ,disc:'در این مرکز برای کلیه ایده ها و کسب و کارهایی که توان ورود به بازار و یا جذب مشتری ندارند خدمات توسعه گرایانه ارائه میگردد', img:icon1},
                {type:'پیوستن به تیمهای برنامه نویسی',disc:'در این مرکز کلیه افراد توانمند شناسایی شده و به عنوان عضوی از استارتاپ به تیمهای استارتاپی ما ملحق خواهند شد', img:icon2},
                {type:'توانمند سازی برنامه نویسان' ,disc:'کلیه افراد علاقه مند این حوزه که نه ایده دارند و نه توانمندی می توانند با شرکت در کارگاههای توانمند سازی ما به تیم های برنامه نویسی ملحق شده و یا به بازار کار ورود نمایند', img:icon3}
            ]
        }
    }

    render() {
        let proph=null;
        proph=this.state.prophency.map(pr=>{
            return <Gold key={Math.random()}
                type={pr.type}
                img={pr.img}
                disc={pr.disc}
            />
        })
        return(
            <div>
                {proph}
            </div>
        )
    }

}



class Gold extends React.Component{
    constructor(props){
        super(props)
        this.state={};
    }

    render() {
        return(
            <Fade right >
                <div className="part col-sm-12 col-sm-push-1 col-md-3 col-md-push-1 mb-5">
                    {/*{this.props.img}*/}
                    <img src={this.props.img}  className="boredrImg"/>
                    <h5 style={{marginBottom:'40px'}}>{this.props.type}</h5>
                    <h6 style={{marginBottom:'30px',lineHeight:"1cm"}}>{this.props.disc}</h6>
                </div>
            </ Fade>
            // <Animated animationIn="bounceInLeft" animationOut="fadeOut" isVisible={true}>
            //     <div className="part col-sm-12 col-sm-push-1 col-md-3 col-md-push-1 mb-5">
            //         {/*{this.props.img}*/}
            //         <img src={this.props.img}  className="boredrImg"/>
            //         <h5 style={{marginBottom:'40px'}}>{this.props.type}</h5>
            //         <h6 style={{marginBottom:'30px',lineHeight:"1cm"}}>{this.props.disc}</h6>
            //     </div>
            // </Animated>
        )
    }

}


export default Golds;