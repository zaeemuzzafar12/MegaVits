import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination } from "swiper";
import { Navigation } from "swiper";
const Categories = ({data }) => {
  console.log("data is ",data)
  return (
    <>
      <p className="mainHeading"></p>
      <div className="container">
        <Swiper
          slidesPerView={4}
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Pagination, Navigation]}
          className="mySwiper"
        >
          {
            data?.map((ele,index)=>{
              return(
                <>
                <SwiperSlide key={index + ele?.id}>
                  
                  <div className="category_bottomSec">
                    <p className="paragraph">{ele?.name}</p>
                  </div>
                </SwiperSlide>
                </>
              )
            })
          }
          
        </Swiper>
      </div>
    </>
  );
};

export default Categories;
