import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination } from "swiper";
import { Navigation } from "swiper";
const Categories = ({ categories, filterData }) => {
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
          {categories.length > 0 &&
            categories.map((data, index) => {
              return (
                <SwiperSlide key={index + data?.id}>
                  <img
                    src={data?.image}
                    className="img-fluid"
                    alt={data?.id}
                    onClick={() => {
                      filterData(data);
                    }}
                  />
                  <div className="category_bottomSec">
                    <p className="paragraph">{data?.name}</p>
                  </div>
                </SwiperSlide>
              );
            })}
        </Swiper>
      </div>
    </>
  );
};

export default Categories;
