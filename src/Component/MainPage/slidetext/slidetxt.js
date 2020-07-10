import React,{useState} from "react";
import Carousel from 'react-bootstrap/Carousel'
import CarouselItem from "react-bootstrap/CarouselItem";
function ControlledCarouselText() {
    const [index, setIndex] = useState(0);
    const [direction, setDirection] = useState(null);
  
    const handleSelect = (selectedIndex, e) => {
      setIndex(selectedIndex);
      setDirection(e.direction);
    };
  
    return (
      <Carousel className="w-100 h-100" activeIndex={index} direction={direction} onSelect={handleSelect}>
        <Carousel.Item>
            <h5 className="mt-3">قابل توجه کاربران</h5>
            <br/>
            <h6 style={{lineHeight:"200%"}}>
                از استادان مجرب در حوزه های کاری خود استفاده کنید
            </h6>
        </Carousel.Item>
        <Carousel.Item>
            <h5 className="mt-3">قابل توجه کارآفرینان محترم</h5>
            <br/>
            <h6 style={{lineHeight:"200%"}}>
        این مرکز دارای ایده های ناب و بکر که از فکر خلاق و بکر جوانان تحصیل کرده است برخاسته و به راحتی امکان جذب در بازار را دارد 
            </h6>
        </Carousel.Item>
        <Carousel.Item>
            <h5 className="mt-3">قابل توجه کارآفرینان محترم</h5>
            <br/>
            <h6 style={{lineHeight:"200%"}}>
            تمامی جوانان عضو مکاک در تخصص خود مجرب شده و آماده ورود به بازار کار و حتی استخدام بی دغدغه در تیم شما هستند .
            </h6>
        </Carousel.Item>
      </Carousel>
    );
  }
  
  export default ControlledCarouselText;