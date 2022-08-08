import React from 'react'
import facebook from '../../images/facebook.png'
import youtube from '../../images/youtube.png'
import twitter from '../../images/twitter.png'
const FooterMid = () => {
  return (
    <>
      <div className='footer_content'>
            <div className='footer_col'>
                    <p className="footer_title">Company Info</p>
                        <ul>
                            <li>
                                <a href="#!">About Us</a>
                            </li>
                            <li>
                                <a href="privacy-policy.php">Privacy Notice</a>
                            </li>
                            <li>
                                <a href="shipping-policy.php">Shipping Returns</a>
                            </li>
                            <li>
                                <a href="condition-use.php">Conditions Of Use</a>
                            </li>
                        </ul>
            </div>
            <div className="footer_col">
                <p className="footer_title">Customer Services</p>
                <ul>
                    <li>
                        <a href="contact-us.php">Contact us</a>
                    </li>
                    <li>
                        <a href="">Frequently Asked Questions</a>
                    </li>
                    <li>
                        <a href="site-map.php">Sitemap</a>
                    </li>
                    <li>
                        <a href="help-center.php">Help</a>
                    </li>
                </ul>
            </div>
            <div className="footer_col">
                <p className="footer_title">Our Offers</p>
                <ul>
                    <li>
                        <a href="">New Products</a>
                    </li>
                    <li>
                        <a href="">Recently Viewed Products</a>
                    </li>
                    <li>
                        <a href="">Compare Products List</a>
                    </li>
                    <li>
                        <a href="">Search</a>
                    </li>
                </ul>
            </div>
            <div className="footer_col">
                <p className="footer_title">My Account</p>
                <ul>
                    <li>
                        <a href="customer-info.php">Account</a>
                    </li>
                    <li>
                        <a href="customer-info.php">Orders</a>
                    </li>
                    <li>
                        <a href="customer-info.php">Addresses</a>
                    </li>
                    <li>
                        <a href="wish-list.php">Wishlist</a>
                    </li>
                </ul>
            </div>
            <div className="footer_col">
                <p className="footer_title">Follow Us</p>
                <ul className="social_icons">
                    <li>
                        <a href=""><img src={facebook} className="img-fluid" alt="" /></a>
                    </li>
                    <li>
                        <a href=""><img src={youtube} className="img-fluid" alt="" /></a>
                    </li>
                    <li>
                        <a href=""><img src={twitter} className="img-fluid" alt="" /></a>
                    </li>
                </ul>
            </div>
      </div>
       
    </>
  )
}

export default FooterMid