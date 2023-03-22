import React, { useState, useEffect } from 'react'
import ReactStars from "react-rating-stars-component";
import Table from 'react-bootstrap/Table'
// import { useParams } from 'react-router-dom'
import { useSelector ,useDispatch } from 'react-redux'
import { addProducts ,deleteProducts ,REMOVE} from '../Redux/Actions'
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination } from "swiper";
import { Navigation } from "swiper";
 
const Cart = ({ data }) => {
    const imagebaseurl = 'http://localhost:5000'
    const [PrductDetail, SetPrductDetail] = useState([])
    console.log("data in carts ", data)

    // const { id } = useParams()
    // console.log(id)
    
    const productDetails = useSelector((state) => state?.carts?.cart)
    const dispatch = useDispatch()

    

    const AddItems = (item) => {  
        dispatch(addProducts(item))  
      }
     

    const onDelete = (data) => {
        dispatch(deleteProducts(data?._id))
      }
    
    // remove one
    const remove = (item)=>{
      dispatch(REMOVE(item))
    }
    

    // const ProductEvalution = () => {
    //     const peval = productDetails.filter((ele) => ele?._id == data?._id)
    //     console.log("peval", peval)
    //     SetPrductDetail(peval)
    // }



    // useEffect(() => {
    //     ProductEvalution();
    // }, [])



    return (
        <>
              <div className="container mb-4 ">
        <h2 className='text-center'>Order Details Page
        </h2>

        <section className='container mt-3'>
          <div className="iteamsdetails">
          {
            productDetails.map((ele)=>{
              return (
                <>
                <div className="items_img">
              <img  src={`${imagebaseurl}${ele?.avator}`} alt="" />
            </div>

            <div className="details">
              <Table>
                <tr>
                  <td>
                    <p> <strong>Name</strong>  : {ele.name}</p>
                    <p> <strong>Price</strong>  : ₹{ele.price}</p>
                    <p> <strong>size</strong>  : {ele.size}</p>
                    <p> <strong>Total</strong>  :₹  {ele.price}</p>

                    <div className='mt-5 d-flex justify-content-between align-items-center' style={{width:100,cursor:"pointer",background:"#ddd",color:"#111"}}>
                    <span style={{fontSize:24}} onClick={ele.qnty <=1 ? ()=>onDelete(ele._id) : ()=>remove(ele)}>-</span>
                    <span style={{fontSize:22}}>{ele.qnty}</span>
                    <span style={{fontSize:24}} onClick={()=>AddItems(ele)}>+</span>

                    </div>

                  </td>
                  <td>
                    <p><strong>Rating :</strong> <span style={{background:"green",color:"#fff",padding:"2px 5px",borderRadius:"5px"}}>{ele.rating} ★	</span></p>
                    <p><strong>Order Review :</strong> <span >{ele.somedata}	</span></p>
                    <p><strong>Remove :</strong> <span ><i className='fas fa-trash' ></i>	</span></p>
                  </td>
                </tr>
              </Table>
            </div>
          
                </>
              )
            })
          }
          </div>
        </section>
      </div>
        </>
    )
}

export default Cart