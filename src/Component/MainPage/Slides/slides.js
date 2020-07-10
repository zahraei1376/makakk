import React,{useState} from "react";
// import '../../../asset/Css/bootstrap-rtl.min.css';
// import '../../../asset/Css/bootstrap.min.css';
// import './slides.css';
// // import './asset/Css/bootstrap-rtl.min.css';
// // import './asset/Css/bootstrap.min.css';
// // import {images} from './images/images';
// import {Gallery,GalleryImage} from 'react-gesture-gallery';

import chante from '../../../asset/img/chante.png';
import noshirvani from '../../../asset/img/noshirvani.png';
import takapo from '../../../asset/img/takapo.png';
import refah from '../../../asset/img/refah.png';

// // const SliderPic=()=>{
// //     const images=[chante,noshirvani,takapo,refah]
// //     const [index,setIndex]=React.useState(0);
// //     React.useEffect(()=>{
// //         const Interval= setInterval(()=>{
// //             if(index === images.length - 1){
// //                 setIndex(0);
// //             }else{
// //                 setIndex(index + 1)
// //             }
// //             // console.log(images)
// //         },2500)
// //         return ()=> clearInterval(Interval)
// //     },[index])
    
    
// //     return(
// //         <Gallery
// //             style={{
// //                 height:"100vh",
// //                 // width:"100w",
// //                 width:"100%",
// //                 background:"black"
// //             }}
// //             index={index}
// //             onRequestChange={i=>{
// //                 setIndex(i);
// //             }}
// //         >
// //             {/* <GalleryImage objectFit="contain" src={chante} key={Math.random()} /> */}
// //             {images.map(image=>(
// //                 <GalleryImage objectFit="contain" src={image} key={Math.random()} />
// //             ))}
            
// //         </Gallery>
// //     )
// // }
// const SliderPic=(props)=>{
//     return(
//         <div className="col-sm-12 cent">
//             <div className="carousel slide" id="myCarousel" data-interval="1000">
//                 <ol className="carousel-indicators">
//                     <li data-target="#myCarousel" data-slide-to="0" className="active"></li>
//                     <li data-target="#myCarousel" data-slide-to="1"></li>
//                     <li data-target="#myCarousel" data-slide-to="2"></li>
//                     <li data-target="#myCarousel" data-slide-to="3"></li>
//                 </ol>
//                 <div className="carousel-inner">
//                     <div className="carousel-item active">
//                         <img src={chante}/>
//                         {/* <div className="carousel-caption">
//                             <h3>hjk</h3>
//                         </div> */}
//                         <h4 className="mt-3">شرکت چنته</h4>
//                         <h6> شهرستان بابل</h6>
//                          {/* <div>
                           
//                         </div> */}
//                     </div>
//                     <div className="carousel-item">
//                         <img src={noshirvani}/>
//                         <h4 className="mt-3">دانشگاه نوشیروانی بابل</h4>
//                         <h6>شهرستان بابل</h6>
//                     </div>
//                     <div className="carousel-item">
//                         <img src={takapo}/>
//                         <h4 className="mt-3" >توسعه کسب و کار و اشتغال پایدار </h4>
//                         <h6> رسته فناوری اطلاعات</h6>
//                     </div>
//                     <div className="carousel-item">
//                         <img src={refah}/>
//                         <h4 className="mt-3">اداره کل تعاون،کار و رفاه اجتماعی</h4>
//                         <h6>استان مازندران</h6>
//                     </div>
//                 </div>
//             </div>
//             <a href="#myCarousel" className="carousel-control-prev" data-slide="prev"  style={{color:"black"}}>
//                 <span className="carousel-control-prev-icon"></span>
//             </a>
//             <a href="#myCarousel" className="carousel-control-next" data-slide="next"  style={{color:"black"}}>
//                 <span className="carousel-control-next-icon"></span>
//             </a>
//         </div>
//     )
// }
// export default SliderPic;
import Carousel from 'react-bootstrap/Carousel'
import CarouselItem from "react-bootstrap/CarouselItem";
function ControlledCarousel() {
    const [index, setIndex] = useState(0);
    const [direction, setDirection] = useState(null);
  
    const handleSelect = (selectedIndex, e) => {
      setIndex(selectedIndex);
      setDirection(e.direction);
    };
  
    return (
      // <Carousel className="bg-secondary w-100 h-100" activeIndex={index} direction={direction} onSelect={handleSelect}>
      <Carousel className="w-100 h-100" activeIndex={index} direction={direction} onSelect={handleSelect}>
        <Carousel.Item className="mb-2">
            <img className="cent" src={chante} className="cent ml-4"  style={{width:"230px",height:"230px"}}/>

            <h5 className="mt-3 cent">شرکت چنته</h5>
            <h6 className="cent"> شهرستان بابل</h6>
                        
          {/* <img
            className="d-block w-100"
            src="holder.js/800x400?text=First slide&bg=373940"
            alt="First slide"
          /> */}
          {/* <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption> */}
        </Carousel.Item>
        <Carousel.Item className="mb-2">
            <img src={refah}  className="cent ml-5"  style={{width:"200px",height:"200px"}}/>
            {/* <h5 className="mt-3">اداره کل تعاون،کار و رفاه اجتماعی</h5> */}
            <h5 className="mt-2 cent">اداره کل تعاون،</h5>
            <h5 className="mt-3 cent">کار و رفاه اجتماعی</h5>
            <h6 className="cent">استان مازندران</h6>
          {/* <img
            className="d-block w-100"
            src="holder.js/800x400?text=Second slide&bg=282c34"
            alt="Second slide"
          />
  
          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption> */}
        </Carousel.Item>
        <Carousel.Item className="mb-2">
            <img src={takapo}  className="cent ml-5"  style={{width:"200px",height:"200px"}}/>
            {/* <h5 className="mt-3" >توسعه کسب و کار و اشتغال پایدار </h5> */}
            <h5 className="mt-2 cent">توسعه کسب و کار </h5>
            <h5 className="mt-3 cent"> و اشتغال پایدار </h5>
            <h6 className="cent"> رسته فناوری اطلاعات</h6>
          {/* <img
            className="d-block w-100"
            src="holder.js/800x400?text=Third slide&bg=20232a"
            alt="Third slide"
          />
  
          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption> */}
        </Carousel.Item>
        <CarouselItem className="mb-2">
            <img src={noshirvani} className="cent ml-5"  style={{width:"230px",height:"230px"}}/>
            <h5 className="mt-2 cent">دانشگاه نوشیروانی بابل</h5>
            <h6 className="cent">شهرستان بابل</h6>
        </CarouselItem>
      </Carousel>
    );
  }
  
  export default ControlledCarousel;
//   render(<ControlledCarousel />);