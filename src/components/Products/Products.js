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
const Products = ({filterdata , data ,Setidpass ,idpass }) => {


  const dispatch = useDispatch();


  const AddItems = (items) => {
    dispatch(addProducts(items))
  }

 

  return (
    <div className="container">
      <p className="mainHeading">Featured Products</p>
      <div className="row">
        {console.log("unfilter",data, "filterdata", filterdata)}
        {filterdata?.length > 0
          ? filterdata.map((items, index) => {
              return (
                <div
                  className="col-12 col-md-4 col-lg-3"
                  key={items?.id + index}
                >
                  <div className="product_wrap">
                    <div className="product_item">
                      <div className="product_img">
                        <img
                          src={items?.images[0]}
                          className="img-fluid"
                          alt=""
                        />
                      </div>
                      <ReactStars
                        count={5}
                        // onChange={ratingChanged}
                        size={24}
                        activeColor="#ffd700"
                      />
                      <p className="product_para1">{items?.title}</p>
                      <p className="product_para2">${items?.price}</p>
                    </div>
                    <div className="prod_detail">
                      <NavLink to={`/product/${items?.id}`}>
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
                        <FontAwesomeIcon icon={faBagShopping} onClick={() => {AddItems(items)}
                                                                      } />
                      </a>
                    </div>
                  </div>
                </div>
              );
            })
          : data?.map((items, index) => {
              return (
                <div
                  className="col-12 col-md-4 col-lg-3"
                  key={items?.id + index}
                >
                  <div className="product_wrap">
                    <div className="product_item">
                      <div className="product_img">
                        <img
                          src={items?.images[0]}
                          className="img-fluid"
                          alt=""
                        />
                      </div>
                      <ReactStars
                        count={5}
                        // onChange={ratingChanged}
                        size={24}
                        activeColor="#ffd700"
                      />
                      <p className="product_para1">{items?.title}</p>
                      <p className="product_para2">${items?.price}</p>
                    </div>
                    <div className="prod_detail">
                    <NavLink to={`/product/${items?.id}`}>
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
                        <FontAwesomeIcon icon={faBagShopping} onClick={() => AddItems(items)} />
                      </a>
                    </div>
                  </div>
                </div>
              );
            })}
      </div>
    </div>
  );
};

export default Products;
