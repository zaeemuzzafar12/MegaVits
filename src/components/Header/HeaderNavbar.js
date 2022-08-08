import React,{useState} from 'react'
import { Link, NavLink } from 'react-router-dom'
const HeaderNavbar = () => {
    const [toogle, Settoogle] = useState(false)
  return (
   <>
          <div className="nav_content">
					<div id="main-nav" className="stellarnav nav_right_sect">
						<ul className="all_links">
							<li>
								   <NavLink to={`/`}>Home</NavLink>                            
							</li>
							<li>
								<a onClick={() => Settoogle(!toogle)} href="#!">Shop</a>
                                {
                                    toogle && (
                                        <ul>
                                        <li>
                                            <a href="#!">Amino Acids</a>
                                        </li>
                                        <li>
                                            <a href="#!">Antioxidants</a>
                                        </li>
                                        <li>
                                            <a href="#!">Baby / Children Products</a>
                                        </li>
                                        <li>
                                            <a href="#!">Skin Care</a>
                                        </li>
                                        <li>
                                            <a href="#!">Detoxification / Cleansers</a>
                                        </li>
                                        <li>
                                            <a href="#!">Enzymes</a>
                                        </li>
                                        <li>
                                            <a href="#!">Essential Oils / Diffusers</a>
                                        </li>
                                        <li>
                                            <a href="#!">Fiber Products</a>
                                        </li>
                                        <li>
                                            <a href="#!">Groceries / Food</a>
                                        </li>
                                        <li>
                                            <a href="#!">Herbs</a>
                                        </li>
                                        <li>
                                            <a href="#!">Homeopathy</a>
                                        </li>
                                        <li>
                                            <a href="#!">Immune Boosters</a>
                                        </li>
                                        <li>
                                            <a href="#!">Men's Health</a>
                                        </li>
                                        <li>
                                            <a href="#!">Minerals</a>
                                        </li>
                                        <li>
                                            <a href="#!">Multi-Vitamins</a>
                                        </li>
                                        <li>
                                            <a href="#!">Browse More Categories</a>
                                        </li>
                                    </ul>
                                    )
                                }
							
							</li>
							<li>
                                 <NavLink to={`/product`}>Product</NavLink>     
							</li>
                            <li>
                                    <NavLink to={`/category`}>Categories</NavLink>
							</li>
							<li>
								<a href="manufacturers-list.php">Manufacturers</a>
							</li>
							<li>
								<a href="price-matching.php">Price Matching </a>
							</li>
							<li>
								<a href="rewards.php">Rewards</a>
							</li>
							<li>
								<a href="shipping-policy.php">Shipping Policy</a>
							</li>
							<li>
								<a href="">Clearance</a>
							</li>
							<li>
								<a href="contact-us.php">Contact Us</a>
							</li>
						</ul>
					</div>
				</div>
   </>
  )
}

export default HeaderNavbar