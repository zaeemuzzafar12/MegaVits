import React,{useState} from "react";
import ReactStars from "react-rating-stars-component";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useDispatch , useSelector } from "react-redux";
import { addProducts } from '../Redux/Actions'
import { Badge, Menu, MenuItem} from '@mui/material';
import { NavLink } from 'react-router-dom'
import {
  faRightLeft,
  faMagnifyingGlass,
  faBagShopping,
} from "@fortawesome/free-solid-svg-icons";
const Products = ({ data }) => {


  const dispatch = useDispatch();


  const AddItems = (items) => {
    dispatch(addProducts(items))
  }
  console.log("data of a product : ",data);
  
 

  return (
    <div className="container">
      <p className="mainHeading">Featured Products</p>
      <div className="row">
       {
        data?.map((ele,index) => {
              return(
                <>
                <div
                  className="col-12 col-md-4 col-lg-3"
                  key={ele?.id + index}
                >
                  <div className="product_wrap">
                    <div className="product_item">
                      <div className="product_img">
                        {/* <img
                          src={ele?.images[0]}
                          className="img-fluid"
                          alt=""
                        /> */}
                      </div>
                      <ReactStars
                        count={5}
                        // onChange={ratingChanged}
                        size={24}
                        activeColor="#ffd700"
                      />
                      <p className="product_para1">{ele?.name}</p>
                      <p className="product_para2">${ele?.price}</p>
                    </div>
                    <div className="prod_detail">
                    <NavLink to={`/product/${ele?.id}`}>
                          <a  className="add_item">
                            <FontAwesomeIcon 
                              icon={faRightLeft}
                              
                              />
                              </a>
                       </NavLink>
                      <a href="" className="add_item">
                        <FontAwesomeIcon icon={faMagnifyingGlass} />
                      </a>
                      <a  className="add_item">
                        <FontAwesomeIcon icon={faBagShopping}/>
                      </a>
                    </div>
                  </div>
                  </div>
                </>
              )
        })
       }
     
      </div>
    </div>
  );
};

export default Products;
