import  React from 'react';
// import faker from 'faker/locale/fa';
import axios from 'axios';
import Teacher from "./Teacher/Teacher";
import './Teachers.css'
// import Spinner from '../UI/spinner/spinner';


class Teachers extends React.Component{
    constructor(props){
        super(props)
        this.state={
            teachers:[],
            iserr:false
        }
    }

    componentDidMount() {
        // axios.get('https://jsonplaceholder.typicode.com/posts').then(
        axios.get('http://localhost:8000/ShowTeacher').then(
            response=>{
                this.setState({teachers:response.data.teachers})
                console.log(this.state.teachers)
            }
        ).catch(
            error=>{
                this.setState({iserr:true});
            }
        )
    }


    render() {
        const style={
            marginTop:"50px"
        }
        return(
            <div className='container cent' style={style}>
                <div className="row">
                    {this.state.teachers.length > 0 ?
                        this.state.teachers.map((teach,index)=>{
                            return <Teacher
                                key={index}
                                username={teach.username}
                                likeCount={teach.likeCount}
                                name={teach.name}
                                Grade={teach.Grade}
                                field={teach.field}
                                describtion={teach.describtion}
                                img={"http://localhost:8000/" + (teach.ImageUrl.split('\\').splice(1,2).join('\\'))}
                                // img={teach.ImageUrl}
                                // img={faker.image.avatar()}
                            />
                        })
                        :<h1 className="cent" style={{color:"red"}}>معلمی ثبت نام نکرده است</h1>}
                </div>
                <div>
                    {/* <input type="text" />
                    <button className="btn">ارسال</button> */}
                </div>
            </div>
        )
    }

}

export default Teachers;
