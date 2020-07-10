import  React from 'react';
import './Footer.css';
import 'font-awesome/css/font-awesome.min.css'
import Logo from '../images/images';
import Fade from 'react-reveal/Fade';
// import Partners from '../Partners/Partners';

const Footer=(props)=>(
    <div>
        <div className="footer container-fluid">
            <Fade top >
                
                <div style={{textAlign:'center'}}>
                    <div><h2 style={{color:"rgba(82, 23, 81,1)"}}>تماس با ما</h2></div>
                    <div><h5><i className="fa fa-address-card brand2"></i>   آدرس:بابل خیابان مطهری برج مینا طبقه 6 واحد 63</h5></div>
                    <div><h5><i className="fa fa-phone brand2"></i> تلفن:01132475088</h5></div>
                    <div><h5><i className="fa fa-address-book brand2"></i>  آدرس ایمیل:chante.soft@gmail.com</h5></div>

                </div>
                {/* <div className="Logo"><Logo/></div> */}
            </Fade>


        </div>
        <div className="footer2 container-fluid">
            <Fade left>
                <br/>
                تمامی حقوق مادی و معنوی این سایت متعلق به مکاک می باشد.
                <br/>
                    طراحی و پشتیبانی: شرکت فناوری اطلاعات چنته
                <div className="mt-3">
                    {/* <i className="fa fa-facebook-square"><a href=""></a></i> */}
                    <i className="fa fa-send brand"><a href=""></a></i>
                    <i className="fa fa-instagram brand"><a href=""></a></i>
                    <i className="fa fa-facebook brand"><a href=""></a></i>
                    <i className="fa fa-twitter brand"><a href=""></a></i>
                </div>
            </Fade>
        </div>
    </div>


    )

export  default  Footer;