import  React from 'react';
import { connect} from 'react-redux';
import './MainPage.scss';
// import '../../sass/base/utiulities.scss';
import SectionCourse from './sectionCourse/sectionCourse';
import Footer from '../Footer/Footer';
import Prophecies from './Prophecy/Prophecy';
import Golds from './Prophecy/Golds';
import { Redirect } from 'react-router-dom';
import Fade from 'react-reveal/Fade';
import Roll from 'react-reveal/Roll'

// let token;
// let teacher;
// if(sessionStorage.getItem('UserLogin')) {
//     token=JSON.parse(sessionStorage.getItem('UserLogin')).token
//     teacher=JSON.parse(sessionStorage.getItem('UserLogin')).teacher
// }else{
//     token=false;
//     teacher=false
// }


class MainPage extends React.Component {
    constructor(props){
        super(props)
        this.state={
            signUp:false,
        }
    }
    render() {
        ////////////////////////
        if (this.state.signUp) {
            return <Redirect to='/RegLog' />
        }
        /////////////////////////
        return(
            <div>
                <div className="container-fluid imgMainPage margin-bottom-hung">
                    <div className="row">
                        <div className="col-sm-12 col-md-6">
                            <Fade right >
                                <h3 id="mainpagetext1">مرکز کار اشتراکی ایده های کارآفرینانه</h3>
                            </ Fade>
                            <Fade left >
                                <h5 id="mainpagetext2">یادگیری در مکانی راحت به صورت دسته جمعی</h5>
                            </ Fade>
                        </div>
                        <Roll top >
                            {!this.props.currentUser ? <div className="col-sm-12">
                                <button className="btn btnstyle" onClick={()=>this.setState({signUp:!this.state.signUp})}>به ما بپیوندید <i className="fa fa-graduation-cap"></i></button>
                            </div>:""}
                        </ Roll>
                    </div>
                </div>
                <hr/>
                <SectionCourse/>
                <hr/>
                <div className="container-fluid margin-bottom-hung margin-top-hung">
                    <div className="row main">
                        <div className="col-sm-12">
                            <div className="container-fluid">
                                <div className="row">
                                    <Golds/>
                                </div>
                                <div className="row margin-top-hung">
                                    <div className="back">
                                        {/* <Fade top> */}
                                            <h3 className="cent headers">رسالت ما</h3>
                                        {/* </Fade> */}
                                        {/* <Fade right> */}
                                            <h6 className="cent mb-5 col-sm-12 col-sm-push-2 col-md-6 col-md-push-3" style={{lineHeight:'1cm',color:'white'}}>مکاک سعی دارد با ایجاد فضای نوآوری و تفکر خلاق در بین دانشجویان و پرورش ایده‌های خلاقانه و کارآفرینانه در دانشگاه ها و کم کردن ریسک دوره ابتدایی شروع کسب و کار به تجاری سازی ایده‌ها کمک کند</h6>
                                        {/* </Fade> */}
                                    </div>
                                    <div className="row cent margin-top-hung">
                                        <Prophecies/>
                                    </div>
                                </div>
                            </div>
                            <div className="row mb-5 exp">
                                <div className="col-sm-12 col-md-8 col-md-push-2">
                                    <Fade right>
                                    <h4 className="text-center mt-4" style={{color:"rgba(82, 23, 81,1)"}}>در حال حاضر مساله اساسی برای تجاری سازی ایده چیست؟</h4>
                                    </Fade>
                                    <Fade top>
                                    <h6 style={{lineHeight:'1cm',backgroundColor:'white',padding:'50px',textAlign:'center'}}>برای ورود به مرکز ما برای شما که ایده دارید و یا استارتاپ هستید ویا حتی هیچیک را ندارید و فقط میخواهید که توانمند شوید تا بتوانید دست به خلق بزنید معطل نکنید و ثبت نام کنید
                                        مشکلات اساسی که شما در این گراف ملاحظه میکنید رفعشان خیلی به شما نزدیک است فقط و فقط کافیست شما خود را باور کنید ایده‌ی خوب مهم است، اما مهم‌تر این است که آن ایده چطور به محصول منجر شود و چگونه به یک کسب‌وکار موفق تبدیل شود؟ اگر بهترین ایده جهان را دارید اما تیم ندارید، زمان مناسبی برای ورود به مکاک نیست! اولین گام، همدل کردن چند انسان توانمند و ایجاد تیم است. گام‌های بعدی در کنار شتاب‌دهنده مکاک به سرعت برداشته خواهد شد. در برنامه تدوین شده در ما، شما دغدغه فضای کار نخواهید داشت، در کنار مربیان خبره خواهید بود، و مهم‌تر از همه، از مشاوره بزرگان کارآفرینی بهره خواهید برد.</h6>
                                    </Fade>
                                </div>
                            </div>
                        </div>
                    </div>
               
                
                    <div>
                        <Footer/>
                    </div>
                
                </div>
            </div> 
        )
    }

}

const mapStateToProps=(state)=>({
    currentUser:state.user.currentUser
})

export  default connect(mapStateToProps)(MainPage);