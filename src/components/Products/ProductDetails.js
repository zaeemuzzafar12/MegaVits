import React,{useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'
import { Swiper, SwiperSlide } from "swiper/react";
import { NavLink } from 'react-router-dom'
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination } from "swiper";
import { Navigation } from "swiper";
const ProductDetails = ({data}) => {
    const [prdouctdetails , Setprdouctdetails] = useState([]);
    const { id} = useParams(null);

    const ProductDetails = () => {
       const pdetails = data?.
       map((items) => items).
       filter((datas) => datas?.id == id )
       Setprdouctdetails(pdetails)
    }
    console.log("prdouctdetails",prdouctdetails)
    useEffect(() => {
        ProductDetails()
    },[])

  return (
   <div className='container-fluid'> 
        <div className='row'>{

                    prdouctdetails.length > 0 &&
                    prdouctdetails.map((data) => {
                        return(
                            <>
                                <div className='col-xs-4 col-sm-4 col-md-4 col-lg-4 col-xl-4'>
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
                                <div className='col-xs-4 col-sm-4 col-md-4 col-lg-4 col-xl-4'>
                                    <div className='row'>
                                        <div className='col-xs-4 col-sm-4 col-md-4 col-lg-4 col-xl-4' style={{padding:"50px"}}>
                                        Title: <strong>{data?.title}</strong>
                                        </div>
                                        <div className='col-xs-4 col-sm-4 col-md-4 col-lg-4 col-xl-4' style={{padding:"50px"}}>
                                        Price:<strong>{data?.price}</strong>
                                        </div>
                                        <div className='col-xs-4 col-sm-4 col-md-4 col-lg-4 col-xl-4' style={{padding:"50px"}}>
                                        Description : <strong>{data?.description}</strong>
                                        </div>

                                    </div>
                                </div>
                                <div className='col-xs-4 col-sm-4 col-md-4 col-lg-4 col-xl-4' style={{padding:"150px",display:"list-item"}}>
                                    <div>
                                        Category:{ data?.category?.name}
                                    </div>
                                    <div>
                                        <NavLink to={`/category/${data?.category?.id}`}>
                                            <img src={data?.category?.image} width={200} height={200} />
                                        </NavLink>
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

export default ProductDetails