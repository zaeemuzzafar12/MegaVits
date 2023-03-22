import React,{useState, useEffect} from 'react'
import Table from 'react-bootstrap/Table'
import { useParams } from 'react-router-dom'
import { Swiper, SwiperSlide } from "swiper/react";
import { NavLink } from 'react-router-dom'
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination } from "swiper";
import { Navigation } from "swiper";
import { addProducts } from '../Redux/Actions'
import { useDispatch,useSelector } from "react-redux";

const ProductDetails = ({data}) => {
    const [prdouctdetails , Setprdouctdetails] = useState([]);
    const { id} = useParams(null);
    const imagebaseurl = 'http://localhost:5000'

    const dispatch = useDispatch();
    const param = useParams()
    

    const products = useSelector((state) => state?.carts?.cart)
    

    const ProductDetails = () => {
       const pdetails = data?.
       map((items) => items)?.
       filter((datas) => datas?._id == param.id )
       Setprdouctdetails(pdetails)
    }
    const AddItems = (item) => {  
      dispatch(addProducts(item))  
    }

    useEffect(() => {
        ProductDetails()
    },[])

  return (
   <>
      <div className="container mb-4 ">
        <h2 className='text-center'>Iteams Details Page
        </h2>

        <section className='container mt-3'>
          <div className="iteamsdetails">
          {
            prdouctdetails.map((ele)=>{
              return (
                <>
                <div className="items_img">
              <img src={`${imagebaseurl}${ele?.avator}`} alt="" />
            </div>

            <div className="details">
              <Table>
                <tr>
                  <td>
                    <p> <strong>Name</strong>  : {ele.name}</p>
                    <p> <strong>Price</strong>  : ₹{ele.price}</p>
                    <p> <strong>size</strong>  : {ele.size}</p>
                    <p> <strong>Total</strong>  :₹  {ele.price }</p>
                    

                  </td>
                  <td>
                    <p><strong>Rating : </strong><span style={{background:"green",color:"#fff",padding:"2px 5px",borderRadius:"5px"}}>{ele.rating} ★★★★★	</span></p>
                    <p><strong>Order Review : </strong> Good<span >{ele.somedata}	</span></p>
                    <p><strong>Remove :</strong> <span ><i className='fas fa-trash' style={{color:"red",fontSize:20,cursor:"pointer"}}></i>	</span></p>
                    <button onClick={()=>AddItems(ele)}>Add To Cart </button>
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

export default ProductDetails