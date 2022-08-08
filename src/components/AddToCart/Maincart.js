import React from 'react'
import { useSelector }  from 'react-redux'
const Maincart = () => {
    const products = useSelector((state) => state?.carts?.cart)

    console.log("ggggg",products)
  return (
    <div className="cart_wrap">
    <section className="inner_banner_sect">
        <div className="container">
            <div className="inner_banner_content">
                <p className="semiBold">Home - Cart</p>
            </div>
        </div>
    </section>

    <section className="cart-sect2">
        <div className="container">
            <div className="row">
                <div className="col-12 col-md-8 col-lg-8 col-wrap">
                    <div className="table-responsive cart-listing">
                        <table id="mytable" className="table  data-table1" style={{width: "100%"}}>
                            <thead>
                                <tr>
                                <th>Image</th>
                                <th className="text-start">Product</th>
                                <th>Price</th>
                                <th>Quantity</th>
                                <th>Subtotal</th>
                                <th>Remove</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    products.length > 0 &&
                                    products.map((data) => {
                                        return(
                                            <>
                                                 <tr>
                                                    <td className="img-box text-center"><img src={data?.images[0]} /></td>
                                                    <td>
                                                        <p className="paragraph">{data?.title}</p>
                                                    </td>
                                                    <td className="regular-text">${data?.price} </td>
                                                    <td>
                                                        <div className="increment_dec_sect">
                                                            <form>
                                                                <div className="value-button" id="decrease" onclick="decreaseValue()" value="Decrease Value">-</div>
                                                                <input type="number" id="number" value="0" />
                                                                <div className="value-button" id="increase" onclick="increaseValue()" value="Increase Value">+</div>
                                                            </form>
                                                        </div>
                                                    </td>
                                                
                                                      <td className="regular-text">$230,560</td>
                                                    <th><button className="dlt-item"><i className="fas fa-trash-alt"></i></button></th>
                                                </tr>
                                            </>
                                        )
                                    })
                                }
                               
                            </tbody>
                        </table>
                    </div>
                    <div className="Discount_sect">
                        <div className="Discount_inp">
                            <p className="product_para1">Discount Code</p>
                            <div className="coupon_value">
                                <input type="text" placeholder="Enter your coupon here" />
                                <div className="btn-sec">
                                    <a href="" className="cta-btn">Apply Coupon</a>
                                </div>
                            </div>
                        </div>
                        <div className="Discount_inp">
                            <p className="product_para1">Gift Cards</p>
                            <div className="coupon_value">
                                <input type="text" placeholder="Enter gift card code" />
                                <div className="btn-sec">
                                    <a href="" className="cta-btn">Add Gift Card</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-md-4 col-lg-4">
                    <div className="subTotal_sect">
                        <p className="product_para1">Carts Total</p>
                        <div className="subTotal_content">
                            <div className="subTotal_inner1">
                                <p className="paragraph">Subtotal</p>
                                <p className="product_para2">$113.00</p>
                            </div>
                            <div className="subTotal_inner1 shippingSec">
                                <p className="paragraph">Shipping</p>
                                <div className="shipping_rate">
                                    <div className="form-check">
                                        <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                                        <label className="form-check-label" for="flexRadioDefault1">
                                        Flat rate: $20.00 
                                        </label>
                                        </div>
                                        <div className="form-check">
                                        <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked />
                                        <label className="form-check-label" for="flexRadioDefault2">
                                        Local pickup: $40.00
                                        </label>
                                    </div>
                                    <div className="shipping_address">
                                        <p className="product_para1">Shipping to CA.</p>
                                        <a href="#!">Change address</a>
                                    </div>
                                </div>
                            </div>
                            <div className="SubTotal_bottomSec">
                                <div className="subTotal_inner1">
                                    <p className="paragraph">Total</p>
                                    <p className="product_para2">$113.00</p>
                                </div>
                                <button className="checkout_btn" type="button"><a href="checkout.php">Procced to checkout</a></button>
                                <p className="para">- OR -</p>
                                <p className="paragraph mt-2"><a href="">lorem ipsum dolar</a> sit amet, consectetur adipiscing elitgr.</p>
                                <button className="checkout_btn" type="button">PayPal</button>
                                <button className="checkout_btn" type="button">Visa</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
    </section>

</div>
  )
}

export default Maincart