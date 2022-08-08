import React,{useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination } from "swiper";
import { Navigation } from "swiper";
const Cart = () => {

const [PrductDetail , SetPrductDetail  ] = useState([])
const { id } = useParams(null)

const productDetails = useSelector((state) => state?.carts?.cart)

const ProductEvalution = () => {
    const peval = productDetails.filter((data) => data.id == id)
    console.log(peval,"peval")
    SetPrductDetail(peval)
}

useEffect(() => {
    ProductEvalution();
},[id])

console.log("productDetails",productDetails)

  return (
    <div className='container-fluid'>
        <div className='row'>
            <h3>Product Details</h3>
            {
                PrductDetail &&
                PrductDetail.length > 0 &&
                PrductDetail.map((data) => {
                    return(
                        <>
                            <div className='col-xs-5 col-sm-5 col-md-5 col-lg-5 col-xl-5'>
                                <Swiper
                                                slidesPerView={1}
                                                spaceBetween={30}
                                                pagination={{
                                                    clickable: true,
                                                }}
                                                navigation={true}
                                                modules={[Pagination, Navigation]}
                                                className="mySwiper"
                                                >
                                                {
                                                    data?.images?.map((item) => {
                                                        return(
                                                            <SwiperSlide>
                                                                <img src={item} />
                                                            </SwiperSlide>
                                                            
                                                        )
                                                    })
                                                }
                                </Swiper>
                            </div>
                            <div className='col-xs-3 col-sm-3 col-md-3 col-lg-3 col-xl-3'>
                                <div className='row'>
                                    <div className='col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12'>
                                        <p className="product_para1">Title: {data?.title}</p>
                                    </div>
                                     <div className='col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12'>
                                     <p className="product_para1">Description:{data?.description?.slice(0,20)}</p>
                                    </div>
                                    <div className='col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12'>
                                    <p className="product_para1">Price: {data?.price}</p>
                                    </div>

                                </div>
                                    
                                   
                                    
                            </div>
                            <div className='col-xs-4 col-sm-4 col-md-4 col-lg-4 col-xl-4'>
                                <div className='row'>
                                    <div className='col-xs-6 col-sm-6 col-md-6 col-lg-6 col-xl-6'>
                                        <p>{data?.category?.name}</p>
                                    </div>
                                    <div className='col-xs-6 col-sm-6 col-md-6 col-lg-6 col-xl-6'>
                                        <img src={data?.category?.image} height={300} width={300} />
                                    </div>
                                </div>
                            </div>
                        </>
                    )
                })

            }

        </div>

    </div>
  )
}

export default Cart