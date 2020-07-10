import React from 'react';
import './Pertner.css';


const Partner=(props)=>{
    return(
        <div className="part col-sm-12 col-md-2 col-md-push-2" onClick={props.clicked}>
            <img src={props.img} alt=""/>
            <h5>{props.Name}</h5>
            <p>{props.Location}</p>
        </div>
    )

}
export  default Partner;
// export  default class Partner extends React.Component {
//     render() {
//         return(
//             <div>
//                 <img src=""/>
//                 <h3></h3>
//                 <p></p>
//             </div>
//         )
//     }
//
//
// }