import  React from 'react';
import { connect} from 'react-redux';
import { Link } from 'react-router-dom';
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
                <div className="container-fluid imgMainPage margin-bottom-large">
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
                <SectionCourse/>
                <hr/>
                <div className="container-fluid margin-bottom-large margin-top-large">
                    <div className="row main">
                        <div className="col-sm-12">
                            <div className="container-fluid">
                                <div className="row">
                                    <Golds/>
                                </div>
                                <div className="row margin-top-hung margin-bottom-hung">
                                    <div className="back margin-bottom-larg">
                                        {/* <Fade top> */}
                                            <h3 className="cent headers">رسالت ما</h3>
                                        {/* </Fade> */}
                                        {/* <Fade right> */}
                                            <p className="cent" style={{lineHeight:'1cm',color:'white',fontSize:'1.2rem',width:'40%'}}>مکاک سعی دارد با ایجاد فضای نوآوری و تفکر خلاق در بین دانشجویان و پرورش ایده‌های خلاقانه و کارآفرینانه در دانشگاه ها و کم کردن ریسک دوره ابتدایی شروع کسب و کار به تجاری سازی ایده‌ها کمک کند</p>
                                        {/* </Fade> */}
                                    </div>
                                    <div className="row cent margin-top-hung">
                                        <div className="col-sm-12">
                                            <h3 className="secondary-header">کارهایی که در مکاک باهم انجام میدهیم</h3>
                                        </div>
                                    </div>
                                    <div className="row cent margin-top-small">
                                        <Prophecies/>
                                    </div>
                                </div>
                            </div>
                            <div className="row explain margin-top-hung margin-bottom-hung">
                                <div className="col-sm-12 col-md-6 explain-side">
                                    <Fade right>
                                    <h4 className="text-center margin-top-small" style={{color:"rgba(82, 23, 81,1)"}}>در حال حاضر مساله اساسی برای تجاری سازی ایده چیست؟</h4>
                                    </Fade>
                                    <Fade top>
                                    <h6 className="explain__text">برای ورود به مرکز ما برای شما که ایده دارید و یا استارتاپ هستید ویا حتی هیچیک را ندارید و فقط میخواهید که توانمند شوید تا بتوانید دست به خلق بزنید معطل نکنید و ثبت نام کنید
                                        مشکلات اساسی که شما در این گراف ملاحظه میکنید رفعشان خیلی به شما نزدیک است فقط و فقط کافیست شما خود را باور کنید ایده‌ی خوب مهم است، اما مهم‌تر این است که آن ایده چطور به محصول منجر شود و چگونه به یک کسب‌وکار موفق تبدیل شود؟ اگر بهترین ایده جهان را دارید اما تیم ندارید، زمان مناسبی برای ورود به مکاک نیست! اولین گام، همدل کردن چند انسان توانمند و ایجاد تیم است. گام‌های بعدی در کنار شتاب‌دهنده مکاک به سرعت برداشته خواهد شد. در برنامه تدوین شده در ما، شما دغدغه فضای کار نخواهید داشت، در کنار مربیان خبره خواهید بود، و مهم‌تر از همه، از مشاوره بزرگان کارآفرینی بهره خواهید برد.</h6>
                                    </Fade>
                                    <Link to='/RegLog' className="explain__link">عضو شوید</Link>
                                </div>
                                <div className="col-sm-12 col-md-6">
                                    <div className="explain__img">

                                    </div>
                                    <img src={require("../../asset/img/workshopCent.jpg")} className="explain__imgCent"/>
                                </div>
                            </div>

                            <div className="row mb-5 exp margin-top-hung">
                                <div className="col-sm-12 col-md-8 col-md-push-2">
                                    <Fade right>
                                    <h4 className="text-center margin-top-small" style={{color:"rgba(82, 23, 81,1)"}}>در حال حاضر مساله اساسی برای تجاری سازی ایده چیست؟</h4>
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