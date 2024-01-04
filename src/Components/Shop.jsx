import React from 'react'
import image1 from '/assets/images/products/glass1.jpg'
import image2 from '/assets/images/products/glass2.jpg'
import { Link } from 'react-router-dom'
import Breadcrumb from './Breadcrumb'
import Shopsidebar from './Shopsidebar'
import Shopheader from './Shopheader'
const products = [
    {
      id: 1,
      title: 'Sample Glass',
      image1: '/assets/images/products/glass1.jpg',
      image2: '/assets/images/products/glass2.jpg',
      price: '₹230.00',
      discountedPrice: '₹260.00',
      shortDescription: 'Short description for product 1'
    },
    {
        id: 1,
        title: 'Sample Glass',
        image1: '/assets/images/products/glass1.jpg',
        image2: '/assets/images/products/glass2.jpg',
        price: '₹230.00',
        discountedPrice: '₹260.00',
        shortDescription: 'Short description for product 1'
      },
    // Add more products in a similar format
  ];
  
function Shop() {
  return (
    <>
    {/*=======  breadcrumb area =======*/}
   <Breadcrumb/>
    {/*=======  End of breadcrumb area =======*/}

  {/*=============================================
    =            shop page content         =
    =============================================*/}
  <div className="shop-page-wrapper">
    {/*=======  shop page header  =======*/}
    <div className="shop-page-header">
    <div className="container">
      <div className="row align-items-center">
        <div className="col-12 col-lg-7 col-md-10 d-none d-md-block">
          {/*=======  fitler titles  =======*/}
          <div className="filter-title filter-title--type-two">
            <ul className="product-filter-menu">
              <li className="active" data-filter="*">
                All
              </li>
              <li data-filter=".hot">hot products</li>
              <li data-filter=".new">new products</li>
              <li data-filter=".sale">sale products</li>
            </ul>
          </div>
          {/*=======  End of fitler titles  =======*/}
        </div>
        <div className="col-12 col-lg-5 col-md-2">
          {/*=======  filter icons  =======*/}
          <div className="filter-icons">
            {/*=======  filter dropdown  =======*/}
            <div className="single-icon filter-dropdown">
            {/* <select className="nice-select"> */}
              <select className='border-none'>
                <option value={0}>Default sorting</option>
                <option value={1}>Sort ny popularity</option>
                <option value={0}>Sort by average rating</option>
                <option value={0}>Sort by latest</option>
                <option value={0}>Sort by price: low to high</option>
                <option value={0}>Sort by price: high to low</option>
              </select>
            </div>
            {/*=======  End of filter dropdown  =======*/}
            {/*=======  grid icons  =======*/}
            <div className="single-icon grid-icons">
              {/* <a data-target="five-column" href="javascript:void(0)">
                <i className="ti-layout-grid4-alt" />
              </a> */}
              <a
                data-target="four-column"
                className="active"
                href="javascript:void(0)"
              >
                <i className="ti-layout-grid3-alt" />
              </a>
              <a data-target="three-column" href="javascript:void(0)">
                <i className="ti-layout-grid2-alt" />
              </a>
              <a data-target="list" href="javascript:void(0)">
                <i className="ti-view-list" />
              </a>
            </div>
            {/*=======  End of grid icons  =======*/}
            {/*=======  advance filter icon  =======*/}
            {/* <div className="single-icon advance-filter-icon">
              <a href="javascript:void(0)" id="advance-filter-active-btn">
                <i className="ion-android-funnel" />
                Filters
              </a>
            </div> */}
            {/*=======  End of advance filter icon  =======*/}
          </div>
          {/*=======  End of filter icons  =======*/}
        </div>
      </div>
    </div>
  </div>
    {/*=======  End of shop page header  =======*/}
    {/*=============================================
  =            shop advance filter area         =
  =============================================*/}

    {/*=====  End of shop advance filter area  ======*/}
    {/*=============================================
		=            shop page content         =
		=============================================*/}
    <div className="shop-page-content mt-100 mb-100">
      <div className="container">
        <div className="row">
          <div className="col-lg-3 order-2 order-lg-1">
            {/*=======  page sidebar  =======*/}
            <Shopsidebar/>
            {/*=======  End of page sidebar  =======*/}
          </div>
          <div className="col-lg-9 order-1 order-lg-2 mb-md-80 mb-sm-80">
            <div className="row product-isotope shop-product-wrap four-column">
              {/*=======  single product  =======*/}
            
              {/*=======  End of single product  =======*/}
              {/*=======  single product  =======*/}
           

             
              <div className="col-12 col-lg-3 col-md-6 col-sm-6 mb-45 sale">
                <div className="single-product">
                  {/*=======  single product image  =======*/}
                  <div className="single-product__image">
                    <Link className="image-wrap" to={"/singlepage"}>
                      <img
                        src={image2}
                        className="img-fluid"
                        alt=""
                      />
                      <img
                        src={image1}
                        className="img-fluid"
                        alt=""
                      />
                    </Link>
                    <div className="single-product__floating-badges">
                      <span className="onsale">-10%</span>
                    </div>
                    <div className="single-product__floating-icons">
                      <span className="wishlist">
                        <a
                          href="#"
                          data-tippy="Add to wishlist"
                          data-tippy-inertia="true"
                          data-tippy-animation="shift-away"
                          data-tippy-delay={50}
                          data-tippy-arrow="true"
                          data-tippy-theme="sharpborder"
                          data-tippy-placement="left"
                        >
                          <i className="ion-android-favorite-outline" />
                        </a>
                      </span>
                      <span className="compare">
                        <a
                          href="#"
                          data-tippy="Compare"
                          data-tippy-inertia="true"
                          data-tippy-animation="shift-away"
                          data-tippy-delay={50}
                          data-tippy-arrow="true"
                          data-tippy-theme="sharpborder"
                          data-tippy-placement="left"
                        >
                          <i className="ion-ios-shuffle-strong" />
                        </a>
                      </span>
                      <span className="quickview">
                        <a
                          className="cd-trigger"
                          href="#qv-1"
                          data-tippy="Quick View"
                          data-tippy-inertia="true"
                          data-tippy-animation="shift-away"
                          data-tippy-delay={50}
                          data-tippy-arrow="true"
                          data-tippy-theme="sharpborder"
                          data-tippy-placement="left"
                        >
                          <i className="ion-ios-search-strong" />
                        </a>
                      </span>
                    </div>
                  </div>
                  {/*=======  End of single product image  =======*/}
                  {/*=======  single product content  =======*/}
                  <div className="single-product__content">
                    <div className="title">
                      <h3>
                        {" "}
                        <a href="/singlepage">sample glass</a>
                      </h3>
                      <a href="#">Add to cart</a>
                    </div>
                    <div className="price">
                      <span className="main-price">₹130.00</span>
                    </div>
                  </div>
                  {/*=======  End of single product content  =======*/}
                </div>
                
                <div className="single-product--list">
                  {/*=======  single product image  =======*/}
                  <div className="single-product__image">
                    <Link className="image-wrap" to={"/singlepage"}>
                      <img
                        src={image1}
                        className="img-fluid"
                        alt=""
                      />
                      <img
                        src={image2}
                        className="img-fluid"
                        alt=""
                      />
                    </Link>
                    <div className="single-product__floating-badges">
                      <span className="onsale">-10%</span>
                    </div>
                    <div className="single-product__floating-icons">
                      <span className="wishlist">
                        <a
                          href="#"
                          data-tippy="Add to wishlist"
                          data-tippy-inertia="true"
                          data-tippy-animation="shift-away"
                          data-tippy-delay={50}
                          data-tippy-arrow="true"
                          data-tippy-theme="sharpborder"
                          data-tippy-placement="bottom"
                        >
                          <i className="ion-android-favorite-outline" />
                        </a>
                      </span>
                      <span className="compare">
                        <a
                          href="#"
                          data-tippy="Compare"
                          data-tippy-inertia="true"
                          data-tippy-animation="shift-away"
                          data-tippy-delay={50}
                          data-tippy-arrow="true"
                          data-tippy-theme="sharpborder"
                          data-tippy-placement="bottom"
                        >
                          <i className="ion-ios-shuffle-strong" />
                        </a>
                      </span>
                      <span className="quickview">
                        <a
                          className="cd-trigger"
                          href="#qv-1"
                          data-tippy="Quick View"
                          data-tippy-inertia="true"
                          data-tippy-animation="shift-away"
                          data-tippy-delay={50}
                          data-tippy-arrow="true"
                          data-tippy-theme="sharpborder"
                          data-tippy-placement="bottom"
                        >
                          <i className="ion-ios-search-strong" />
                        </a>
                      </span>
                    </div>
                  </div>
                  {/*=======  End of single product image  =======*/}
                  {/*=======  single product content  =======*/}
                  <div className="single-product__content">
                    <div className="title">
                      <h3>
                        {" "}
                        <a href="/singlepage">sample glass</a>
                      </h3>
                    </div>
                    <div className="price">
                      <span className="main-price">₹130.00</span>
                    </div>
                    <p className="short-desc">
                      {" "}
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                      Laudantium consequuntur voluptatem ad molestiae. Expedita
                      nesciunt quam totam, sapiente eveniet consectetur voluptas
                      quas harum impedit quia quibusdam tempora ab facilis. Non
                      assumenda veritatis,
                    </p>
                    <a href="#" className="lezada-button lezada-button--medium">
                      ADD TO CART
                    </a>
                  </div>
                  {/*=======  End of single product content  =======*/}
                </div>
              </div>

              
               
              {/*=======  End of single product  =======*/}
              {/*=======  single product  =======*/}
              <div className="col-12 col-lg-3 col-md-6 col-sm-6 mb-45 hot">
                <div className="single-product">
                  {/*=======  single product image  =======*/}
                  <div className="single-product__image">
                    <Link className="image-wrap" to={"/singlepage"}>
                      <img
                        src={image1}
                        className="img-fluid"
                        alt=""
                      />
                      <img
                        src={image2}
                        className="img-fluid"
                        alt=""
                      />
                    </Link>
                    <div className="single-product__floating-badges">
                      <span className="hot">hot</span>
                    </div>
                    <div className="single-product__floating-icons">
                      <span className="wishlist">
                        <a
                          href="#"
                          data-tippy="Add to wishlist"
                          data-tippy-inertia="true"
                          data-tippy-animation="shift-away"
                          data-tippy-delay={50}
                          data-tippy-arrow="true"
                          data-tippy-theme="sharpborder"
                          data-tippy-placement="left"
                        >
                          <i className="ion-android-favorite-outline" />
                        </a>
                      </span>
                      <span className="compare">
                        <a
                          href="#"
                          data-tippy="Compare"
                          data-tippy-inertia="true"
                          data-tippy-animation="shift-away"
                          data-tippy-delay={50}
                          data-tippy-arrow="true"
                          data-tippy-theme="sharpborder"
                          data-tippy-placement="left"
                        >
                          <i className="ion-ios-shuffle-strong" />
                        </a>
                      </span>
                      <span className="quickview">
                        <a
                          className="cd-trigger"
                          href="#qv-1"
                          data-tippy="Quick View"
                          data-tippy-inertia="true"
                          data-tippy-animation="shift-away"
                          data-tippy-delay={50}
                          data-tippy-arrow="true"
                          data-tippy-theme="sharpborder"
                          data-tippy-placement="left"
                        >
                          <i className="ion-ios-search-strong" />
                        </a>
                      </span>
                    </div>
                  </div>
                  {/*=======  End of single product image  =======*/}
                  {/*=======  single product content  =======*/}
                  <div className="single-product__content">
                    <div className="title">
                      <h3>
                        {" "}
                        <a href="/singlepage">sample glass</a>
                      </h3>
                      <a href="#">Add to cart</a>
                    </div>
                    <div className="price">
                      <span className="main-price discounted">₹260.00</span>
                      <span className="discounted-price">₹230.00</span>
                    </div>
                  </div>
                  {/*=======  End of single product content  =======*/}
                </div>
                <div className="single-product--list">
                  {/*=======  single product image  =======*/}
                  <div className="single-product__image">
                    <Link className="image-wrap" to={"/singlepage"}>
                      <img
                        src="assets/images/products/watch-2-1-600x800.jpg"
                        className="img-fluid"
                        alt=""
                      />
                      <img
                        src="assets/images/products/watch-2-2-600x800.jpg"
                        className="img-fluid"
                        alt=""
                      />
                    </Link>
                    <div className="single-product__floating-badges">
                      <span className="hot">hot</span>
                    </div>
                    <div className="single-product__floating-icons">
                      <span className="wishlist">
                        <a
                          href="#"
                          data-tippy="Add to wishlist"
                          data-tippy-inertia="true"
                          data-tippy-animation="shift-away"
                          data-tippy-delay={50}
                          data-tippy-arrow="true"
                          data-tippy-theme="sharpborder"
                          data-tippy-placement="bottom"
                        >
                          <i className="ion-android-favorite-outline" />
                        </a>
                      </span>
                      <span className="compare">
                        <a
                          href="#"
                          data-tippy="Compare"
                          data-tippy-inertia="true"
                          data-tippy-animation="shift-away"
                          data-tippy-delay={50}
                          data-tippy-arrow="true"
                          data-tippy-theme="sharpborder"
                          data-tippy-placement="bottom"
                        >
                          <i className="ion-ios-shuffle-strong" />
                        </a>
                      </span>
                      <span className="quickview">
                        <a
                          className="cd-trigger"
                          href="#qv-1"
                          data-tippy="Quick View"
                          data-tippy-inertia="true"
                          data-tippy-animation="shift-away"
                          data-tippy-delay={50}
                          data-tippy-arrow="true"
                          data-tippy-theme="sharpborder"
                          data-tippy-placement="bottom"
                        >
                          <i className="ion-ios-search-strong" />
                        </a>
                      </span>
                    </div>
                  </div>
                  {/*=======  End of single product image  =======*/}
                  {/*=======  single product content  =======*/}
                  <div className="single-product__content">
                    <div className="title">
                      <h3>
                        {" "}
                        <a href="/singlepage">sample glass</a>
                      </h3>
                    </div>
                    <div className="price">
                      <span className="main-price discounted">₹260.00</span>
                      <span className="discounted-price">₹230.00</span>
                    </div>
                    <p className="short-desc">
                      {" "}
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                      Laudantium consequuntur voluptatem ad molestiae. Expedita
                      nesciunt quam totam, sapiente eveniet consectetur voluptas
                      quas harum impedit quia quibusdam tempora ab facilis. Non
                      assumenda veritatis,
                    </p>
                    <a href="#" className="lezada-button lezada-button--medium">
                      ADD TO CART
                    </a>
                  </div>
                  {/*=======  End of single product content  =======*/}
                </div>
              </div>
               
              {/*=======  End of single product  =======*/}
              {/*=======  single product  =======*/}
              
              {/*=======  End of single product  =======*/}
              {/*=======  single product  =======*/}
              
              {/*=======  End of single product  =======*/}
              {/*=======  single product  =======*/}
              
              {/*=======  End of single product  =======*/}
              {/*=======  single product  =======*/}
              
              {/*=======  End of single product  =======*/}
              {/*=======  single product  =======*/}
              
              {/*=======  End of single product  =======*/}
              {/*=======  single product  =======*/}
              
              {/*=======  End of single product  =======*/}
              {/*=======  single product  =======*/}
              
              {/*=======  End of single product  =======*/}
              {/*=======  single product  =======*/}
              
              {/*=======  End of single product  =======*/}
              {/*=======  single product  =======*/}
              
              {/*=======  End of single product  =======*/}
              {/*=======  single product  =======*/}
              
              {/*=======  End of single product  =======*/}
              {/*=======  single product  =======*/}
              
              {/*=======  End of single product  =======*/}
              {/*=======  single product  =======*/}
              
              {/*=======  End of single product  =======*/}
              {/*=======  single product  =======*/}
              {/*=======  End of single product  =======*/}
            </div>
            <div className="row">
              <div className="col-lg-12 text-center mt-30">
                <a
                  className="lezada-button lezada-button--medium lezada-button--icon--left"
                  href="#"
                >
                  <i className="ion-android-add" /> MORE
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/*=====  End of shop page content  ======*/}
  </div>
  {/*=====  End of shop page content  ======*/}
</>

  )
}

export default Shop