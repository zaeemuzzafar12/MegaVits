import React,{useEffect, useState} from 'react'
import user from '../../images/user.png'
import heart from '../../images/heart.png'
import cart from '../../images/shopping-bag.png'
import { useSelector , useDispatch }  from 'react-redux'
import { Menu } from '@mui/material'
import { NavLink } from 'react-router-dom'
import { Navbar,Container,Nav, Table } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping , faXmark ,faTrash} from '@fortawesome/free-solid-svg-icons'
import  emptycart from '../../images/empty.jpg'
import { deleteProducts } from '../Redux/Actions'
const HeaderIcons = () => {
	const dispatch = useDispatch()
	const [anchorEl, setAnchorEl] = useState(null);
 
    const open = Boolean(anchorEl);

    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
      setAnchorEl(null);
    };

	const products = useSelector((state) => state?.carts?.cart)

	const onDelete = (data) => {
		dispatch(deleteProducts(data))
	}
	


	useEffect(()=>{

	},[])

  return (
   <>
        <div className="header_content">
							<div className="header_content_left">
								<img src={user} className="img-fluid" alt="" />
							</div>
							<div className="header_content_right">
								<p className="Reg_title">Account</p>
                <NavLink className="paragraph" to={`/login` }>Login</NavLink>
                { " / "}
                <NavLink className="paragraph" to={`/register`}> Register</NavLink>
								{/* <a href="javascipt:void(0)" data-bs-toggle="modal" data-bs-target="#exampleModal" className="paragraph">Login / Register</a> */}
							</div>
						</div>
						<div className="header_content">
							<div className="header_content_left">
								<img src={heart} className="img-fluid" alt="" />
							</div>
							<div className="header_content_right">
								<a href="wish-list.php" className="Reg_title">Wishlist</a>
								<p className="paragraph">Edit Your Wishlist</p>
							</div>
						</div>
						<div className="header_content">
							<div className="header_content_left">
								<img src={cart} className="img-fluid" alt="" />
							</div>
							<div className="header_content_right">
								<p className="Reg_title" style={{cursor:"pointer"}} onClick={handleClick}>Cart {products?.length}</p>
								<Menu
									id="demo-positioned-menu"
									aria-labelledby="demo-positioned-button"
									anchorEl={anchorEl}
									open={open}
									onClose={handleClose}
									anchorOrigin={{
									vertical: 'top',
									horizontal: 'left',
									}}
									transformOrigin={{
									vertical: 'top',
									horizontal: 'left',
									}}
								>
                    <div className='main_card'>
                        
                        {
                          products &&
                          products?.length > 0 ? (
                            <>
                              {
                                 products.map((data) => {
                                  return(
                                    <>
                                      <Table>
                                        <thead>
                                          <tr>
                                            <td>Image</td>
                                            <td>Name</td>
                                            <td>Price</td>
                                            <td>Delete</td>
											<td>Cart</td>
                                          </tr>
                                        </thead>
                                        <tbody>
                                          <tr>
                                            <td>
                                              <NavLink to={`/cart/${data?.id}`}>
                                                <img src={data?.images} width={100} height={100} />
                                              </NavLink>
                                            </td>
                                            <td>{data?.title?.slice(0,20)} </td>
                                            <td>{data?.price} </td>
                                            <td  >
                                            <FontAwesomeIcon 
                                              icon={faTrash} 
                                              size="lg" 
                                              color='red'
                                              style={{cursor:"pointer"}} 
                                              onClick={() => onDelete(data?.id)}
                                              />
                                               
                                                
                                            </td>
											<td>
												<NavLink to={`/maincart`}>
													<FontAwesomeIcon 
													icon={faCartShopping}
													size="lg" 
													color='grey'
													style={{cursor:"pointer"}} 
													/>
												</NavLink>
											</td>
                                            
                                          </tr>
                                        </tbody>
                                      </Table>
                                    </>
                                  )
                                })
                              }
                            </>
                          ) : (
                            <>
								<div className='card_details' style={{display: 'flex', justifyContent:'space-around'}}>
                            <p>Your cart is Empty</p>
                            <div>
                                <FontAwesomeIcon 
                                    icon={faXmark} 
                                    size="lg" 
                                    style={{cursor:"pointer"}} 
                                    onClick={handleClose} />
                            </div>
                        </div>
                               <div className='card_gif'>
                                 <img src={emptycart} alt="something empty" width={200} height={150}   />
                                </div>
                            </>
                          )
                         
                        }
                       

                    </div>
                   
                </Menu>
								
								
								
							</div>
						</div>
   </>
  )
}

export default HeaderIcons