import img1 from '../images/banner-bg.png'
import img2 from '../images/banner-bg.png'
import img3 from '../images/banner-bg.png'
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";



// import required modules
import { Pagination, Navigation } from "swiper";

const Cover = () => {
  return (
    <>

<Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
            <img src={img1} />
            <div className='slidertext'>
            <h5 className="slider_title">Live Happy, Live Healthy,Live Now</h5>
            <p className="paragraph">Now offers superior quality and is discounted 40% or more everyday at megavits.com</p>
            </div>

        </SwiperSlide>
        <SwiperSlide>
            <img src={img2} />
            <div className='slidertext'>
            <h5 className="slider_title">Live Happy, Live Healthy,Live Now</h5>
            <p className="paragraph">Now offers superior quality and is discounted 40% or more everyday at megavits.com</p>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <img src={img3} />
            <div className='slidertext'>
            <h5 className="slider_title">Live Happy, Live Healthy,Live Now</h5>
            <p className="paragraph">Now offers superior quality and is discounted 40% or more everyday at megavits.com</p>
            </div>
        </SwiperSlide>
      </Swiper>
                   
    </>
  )
}

export default Cover