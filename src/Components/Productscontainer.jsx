// import React from 'react'

// function Products() {
//   return (
//     <div>Products</div>
//   )
// }

// export default Products

import React from "react";
import Products from "./Products";

function Productscontainer() {
  return (
    <>
    {/*  */}
      <div className="section-title-container mb-80 mb-md-60 mb-sm-40 pt-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              {/*=======  section title  =======*/}
              <div className="section-title section-title--one text-center">
                <h1 className="text-2xl font-bold ">EyeGlass</h1>
                <p className="subtitle subtitle--deep subtitle--trending-home text-sm font-sm">
                  Find your style. Fall fashion 20xx
                </p>
              </div>
              {/*=======  End of section title  =======*/}
            </div>
          </div>
        </div>
      </div>
      {/*  */}

       {/*==============================================            product carousel container         ==============================================*/}
       <div className="product-carousel-container mb-70 mb-md-50 mb-sm-30">
        <div className="container wide">
          <div className="row column-four">
            {/*=======  single product  =======*/}
            <Products />
            {/*=======  End of single product  =======*/}
          </div>
          <div className="row">
            <div className="col-lg-12 text-center mb-25 mt-30 mt-sm-20">
              <a className="lezada-loadmore-button" href="#">
                <i className="ion-ios-plus-empty" /> LOAD MORE ...
              </a>
            </div>
          </div>
        </div>
      </div>
      {/*=====  End of product carousel container  ======*/}
    </>
  );
}

export default Productscontainer;