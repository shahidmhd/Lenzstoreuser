import React, { useState } from 'react'
import { Link } from "react-router-dom";

function Cart() {
    const initialCartData = [
        {
          id: 1,
          name: 'Eye glass',
          color: 'Brown',
          price: 150.0,
          quantity: 1,
          imageUrl: 'https://lenzstore.cyenosure.in/assets/images/products/glass1.jpg',
        },
        // Add two more entries with different data
        {
          id: 2,
          name: 'Eye glass',
          color: 'Silver',
          price: 200.0,
          quantity: 2,
          imageUrl: 'https://lenzstore.cyenosure.in/assets/images/products/glass1.jpg',
        },
        {
          id: 3,
          name: 'Eye glass',
          color: 'Black',
          price: 180.0,
          quantity: 3,
          imageUrl: 'https://lenzstore.cyenosure.in/assets/images/products/glass1.jpg',
        },
      ];
    
      const [cartData, setCartData] = useState(initialCartData);
    
      const increaseQuantity = (productId) => {
        setCartData((prevCartData) =>
          prevCartData.map((item) =>
            item.id === productId ? { ...item, quantity: item.quantity + 1 } : item
          )
        );
      };
    
      const decreaseQuantity = (productId) => {
        setCartData((prevCartData) =>
          prevCartData.map((item) =>
            item.id === productId && item.quantity > 1
              ? { ...item, quantity: item.quantity - 1 }
              : item
          )
        );
      };
    
      const removeProduct = (productId) => {
        setCartData((prevCartData) =>
          prevCartData.filter((item) => item.id !== productId)
        );
      };
    
      const buttonStyle = {
        border: 'none',
        background: 'none',
        cursor: 'pointer',
        fontSize: '16px',
        padding: 0,
        margin: 0,
        outline: 'none',
      };
  return (
    <>
    {/*=======  breadcrumb area =======*/}
    <div className="breadcrumb-area breadcrumb-bg-1 pt-50 pb-70 mb-130">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <h1 className="breadcrumb-title">Shopping Cart</h1>
            {/*=======  breadcrumb list  =======*/}
            <ul className="breadcrumb-list">
              <li className="breadcrumb-list__item">
                <a href="index.html">HOME</a>
              </li>
              <li className="breadcrumb-list__item breadcrumb-list__item--active">
                shopping cart
              </li>
            </ul>
            {/*=======  End of breadcrumb list  =======*/}
          </div>
        </div>
      </div>
    </div>
    {/*=======  End of breadcrumb area =======*/}

    {/*=============================================
  =            cart page content         =
  =============================================*/}
    <div className="shopping-cart-area mb-130">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 mb-30">
            {/*=======  cart table  =======*/}
            <div className="cart-table-container">
    <table className="cart-table">
      <thead>
        <tr>
          <th className="product-name" colSpan={2}>
            Product
          </th>
          <th className="product-price">Price</th>
          <th className="product-quantity">Quantity</th>
          <th className="product-subtotal">Total</th>
          <th className="product-remove">&nbsp;</th>
        </tr>
      </thead>
      <tbody>
        {cartData.map((product) => (
          <tr key={product.id}>
            <td className="product-thumbnail">
              <a href="shop-product-basic.html">
                <img
                  src={product.imageUrl}
                  className="img-fluid"
                  alt={product.name}
                />
              </a>
            </td>
            <td className="product-name">
              <a href="shop-product-basic.html">{product.name}</a>
              <span className="product-variation">Color: {product.color}</span>
            </td>
            <td className="product-price">
              <span className="price">₹{product.price.toFixed(2)}</span>
            </td>
            <td className="product-quantity">
              <div className="pro-qty d-inline-block mx-0">
                <button
                  style={buttonStyle}
                  onClick={() => decreaseQuantity(product.id)}
                >
                  -
                </button>
                <input type="text" value={product.quantity} readOnly />
                <button
                  style={buttonStyle}
                  onClick={() => increaseQuantity(product.id)}
                >
                  +
                </button>
              </div>
            </td>
            <td className="total-price">
              <span className="price">₹{(product.price * product.quantity).toFixed(2)}</span>
            </td>
            <td className="product-remove">
              <a href="#" onClick={() => removeProduct(product.id)}>
                <i className="ion-android-close" />
              </a>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
            {/*=======  End of cart table  =======*/}
          </div>
          <div className="col-lg-12 mb-80">
            {/*=======  coupon area  =======*/}
            <div className="cart-coupon-area pb-30">
              <div className="row align-items-center">
                <div className="col-lg-6 mb-md-30 mb-sm-30">
                  {/*=======  coupon form  =======*/}
                  <div className="lezada-form coupon-form">
                    <form action="#">
                      <div className="row">
                        <div className="col-md-7 mb-sm-10">
                          <input
                            type="text"
                            placeholder="Enter your coupon code"
                          />
                        </div>
                        <div className="col-md-5">
                          <button className="lezada-button lezada-button--medium">
                            apply coupon
                          </button>
                        </div>
                      </div>
                    </form>
                  </div>
                  {/*=======  End of coupon form  =======*/}
                </div>
                <div className="col-lg-6 text-start text-lg-end">
                  {/*=======  update cart button  =======*/}
                  <button className="lezada-button lezada-button--medium">
                    update cart
                  </button>
                  {/*=======  End of update cart button  =======*/}
                </div>
              </div>
            </div>
            {/*=======  End of coupon area  =======*/}
          </div>
          <div className="col-xl-4 offset-xl-8 col-lg-5 offset-lg-7">
            <div className="cart-calculation-area">
              <h2 className="mb-40">Cart totals</h2>
              <table className="cart-calculation-table mb-30">
                <tbody>
                  <tr>
                    <th>SUBTOTAL</th>
                    <td className="subtotal">₹100.00</td>
                  </tr>
                  <tr>
                    <th>TOTAL</th>
                    <td className="total">₹100.00</td>
                  </tr>
                </tbody>
              </table>
              <div className="cart-calculation-button text-center">
                {/* <button className="lezada-button lezada-button--medium">
                  proceed to checkout
                </button> */}
                <Link to={'/checkout'} className="lezada-button lezada-button--medium">proceed to checkout</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/*=====  End of cart page content  ======*/}
  </>
  )
}

export default Cart