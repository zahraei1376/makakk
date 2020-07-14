import React from 'react';
import Fade from 'react-reveal/Fade';
import { connect } from 'react-redux';
import './sectionCourse.scss';
import { Link } from 'react-router-dom';
// ////////////////

const SectionCourse =(props) =>{
    return(
        <div className="container-fluid sectionCourses margin-bottom-large">
            {/* <div className='sectionCourses__container' className="cent"> */}
                <div className="row margin-bottom-small">
                    <h2 className="cent mb-2 sectionCourses__title">دانلود فایل ها </h2>
                </div>
                <div className="row margin-bottom-small">
                    {!props.currentUser ? 
                    <div className="col-sm-12">
                        <p className="cent mb-4" style={{color:"red"}}>برای دریافت فایل ها باید ثبت نام کنید</p>
                    </div>:""}
                    {/* <br/> */}
                </div>
                <div className="row">
                    <Fade left>
                        <div className="sectionCourses__cards">
                            <div class="sectionCourses__card">
                                <div class="sectionCourses__card__side sectionCourses__card__side--front">
                                    <div class="sectionCourses__card__picture sectionCourses__card__picture--1">
                                        &nbsp;
                                    </div>
                                </div>
                                <div class="sectionCourses__card__side sectionCourses__card__side--back sectionCourses__card__side--back-1">
                                    <div class="sectionCourses__card__cta">
                                        <Link to="/getFilePage" state={{CourseName:"C#"}} className='sectionCourses__btn'>دانلود</Link>
                                    </div>
                                </div>
                                <div class="sectionCourses__card__download">
                                    <Link to="/getFilePage" state={{CourseName:"C#"}} className='sectionCourses__card__button'>دانلود</Link>
                                </div>
                            </div>
                            <div class="sectionCourses__card">
                                <div class="sectionCourses__card__side sectionCourses__card__side--front">
                                    <div class="sectionCourses__card__picture sectionCourses__card__picture--2">
                                        &nbsp;
                                    </div>
                                </div>
                                <div class="sectionCourses__card__side sectionCourses__card__side--back sectionCourses__card__side--back-2">
                                    <div class="sectionCourses__card__cta">
                                        <Link to="/getFilePage" state={{CourseName:"C++"}} className='sectionCourses__btn'>دانلود</Link>
                                    </div>
                                </div>
                                <div class="sectionCourses__card__download">
                                    <Link to="/getFilePage" state={{CourseName:"C++"}} className='sectionCourses__card__button'>دانلود</Link>
                                </div>
                            </div>
                            <div class="sectionCourses__card">
                                <div class="sectionCourses__card__side sectionCourses__card__side--front">
                                    <div class="sectionCourses__card__picture sectionCourses__card__picture--3">
                                        &nbsp;
                                    </div>
                                </div>
                                <div class="sectionCourses__card__side sectionCourses__card__side--back sectionCourses__card__side--back-3">
                                    <div class="sectionCourses__card__cta">
                                        <Link to="/getFilePage" state={{CourseName:"Java"}} className='sectionCourses__btn'>دانلود</Link>
                                    </div>
                                </div>
                                <div class="sectionCourses__card__download">
                                    <Link to="/getFilePage" state={{CourseName:"Java"}} className='sectionCourses__card__button'>دانلود</Link>
                                </div>
                            </div>
                            <div class="sectionCourses__card">
                                <div class="sectionCourses__card__side sectionCourses__card__side--front">
                                    <div class="sectionCourses__card__picture sectionCourses__card__picture--4">
                                        &nbsp;
                                    </div>
                                </div>
                                <div class="sectionCourses__card__side sectionCourses__card__side--back sectionCourses__card__side--back-4">
                                    <div class="sectionCourses__card__cta">
                                        <Link to="/getFilePage" state={{CourseName:"Python"}} className='sectionCourses__btn'>دانلود</Link>
                                    </div>
                                </div>
                                <div class="sectionCourses__card__download">
                                    <Link to="/getFilePage" state={{CourseName:"Python"}} className='sectionCourses__card__button'>دانلود</Link>
                                </div>
                            </div>
                        </div>
                    </Fade>
                    
                    
                    {/* ////////////// */}
                        {/* <Fade left>
                            <div className='sectionCourses__imgs'>
                                <img className='sectionCourses__img' src={CPlus} alt='img C++' />
                                <img className='sectionCourses__img' src={Csharp} alt='img C#' />
                                <img className='sectionCourses__img' src={Java} alt='img java' />
                                <img className='sectionCourses__img' src={Python} alt='img python' />
                            </div>
                        </Fade> */}
                        {/* <ul className="cent">
                            <Fade left>
                                <li style={styleCC}><a href="" onClick={()=>this.setState({handleC:!this.state.handleC})}></a></li>
                                <li style={stylej}><a href="" onClick={()=>this.setState({handleJ:!this.state.handleJ})}></a></li>
                                <li style={stylep}><a href="" onClick={()=>this.setState({handleP:!this.state.handleP})}></a></li>
                                <li style={styleC}><a href="" onClick={()=>this.setState({handleCC:!this.state.handleCC})}></a></li> */}
                                {/* //////////////// */}
                                {/* <li style={styleCC}><a href="" onClick={()=>this.setState({handleC:!this.state.handleC})}></a></li>
                                <li style={stylej}><a href="" onClick={()=>this.setState({handleJ:!this.state.handleJ})}></a></li>
                                <li style={stylep}><a href="" onClick={()=>this.setState({handleP:!this.state.handleP})}></a></li>
                                <li style={styleC}><a href="" onClick={()=>this.setState({handleCC:!this.state.handleCC})}></a></li> */}
                                {/* <li style={styleCC}><a href="" onClick={()=>this.setState({handleC:!this.state.handleC})}>دریافت فایل های </a></li>
                                <li style={stylej}><a href="" onClick={()=>this.setState({handleJ:!this.state.handleJ})}>دریافت فایل های java</a></li>
                                <li style={stylep}><a href="" onClick={()=>this.setState({handleP:!this.state.handleP})}>دریافت فایل های python</a></li>
                                <li style={styleC}><a href="" onClick={()=>this.setState({handleCC:!this.state.handleCC})}>دریافت فایل های C++</a></li> */}
                            {/* </Fade>
                        </ul> */}
                    {/* </div> */}
                </div>
            {/* </div> */}
        </div>
    )
};

const mapStateToProps = (state)=> ({
    currentUser:state.user.currentUser
})

export default connect(mapStateToProps)(SectionCourse);