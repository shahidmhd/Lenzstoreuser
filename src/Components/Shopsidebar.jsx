import React from 'react'
import image1 from '/assets/images/products/glass1.jpg'
import image2 from '/assets/images/products/glass2.jpg'
import { Link } from 'react-router-dom'
function Shopsidebar() {
  return (
    <div className="page-sidebar">
      {/*=======  single sidebar widget  =======*/}
      <div className="single-sidebar-widget mb-40">
        {/*=======  search widget  =======*/}
        <div className="search-widget">
          <form action="#">
            <input type="search" placeholder="Search products ..." />
            <button type="button">
              <i className="ion-android-search" />
            </button>
          </form>
        </div>
        {/*=======  End of search widget  =======*/}
      </div>
      {/*=======  End of single sidebarwidget  =======*/}
      {/*=======  single sidebar widget  =======*/}
      <div className="single-sidebar-widget mb-40">
        <h2 className="single-sidebar-widget--title">Categories</h2>
        <ul className="single-sidebar-widget--list single-sidebar-widget--list--category">
          {/* <li className="has-children">
          <a href="shop-left-sidebar.html">Brand </a>{" "}
          <span className="quantity">5</span>
          <ul>
            <li>
              <a href="shop-left-sidebar.html">For body</a>
            </li>
            <li>
              <a href="shop-left-sidebar.html">Make up</a>
            </li>
            <li>
              <a href="shop-left-sidebar.html">New</a>
            </li>
            <li>
              <a href="shop-left-sidebar.html">Perfumes</a>
            </li>
          </ul>
        </li> */}
          <li className="relative group has-children">
            <a
              href="shop-left-sidebar.html"
              className="flex items-center justify-between pr-15"
            >
              Brand
              <span className="ml-2 px-2 py-1 rounded">5</span>
            </a>
            <ul className="absolute left-0 mt-2 py-2 w-48 bg-white border rounded-md shadow-lg z-10 hidden group-hover:block overflow-y-auto max-h-48">
              <li>
                <a
                  href="shop-left-sidebar.html"
                  className="block px-4 py-2 hover:bg-gray-200"
                >
                  For body
                </a>
              </li>
              <li>
                <a
                  href="shop-left-sidebar.html"
                  className="block px-4 py-2 hover:bg-gray-200"
                >
                  Make up
                </a>
              </li>
              {/* Add more items */}
            </ul>
          </li>

          <li className="has-children">
            <a href="shop-left-sidebar.html">Size </a>{" "}
            <span className="quantity">23</span>
            <ul>
              <li>
                <a href="shop-left-sidebar.html">Sofas</a>
              </li>
              <li>
                <a href="shop-left-sidebar.html">Armchairs</a>
              </li>
              <li>
                <a href="shop-left-sidebar.html">Desk Chairs</a>
              </li>
              <li>
                <a href="shop-left-sidebar.html">Dining Chairs</a>
              </li>
            </ul>
          </li>
          <li>
            <a href="shop-left-sidebar.html">Thickness</a>{" "}
            <span className="quantity">12</span>
          </li>
          <li>
            <a href="shop-left-sidebar.html">Gender</a>{" "}
            <span className="quantity">22</span>
          </li>
        </ul>
      </div>
      {/*=======  End of single sidebar widget  =======*/}
      {/*=======  single sidebar widget  =======*/}
      <div className="single-sidebar-widget mb-40">
        <h2 className="single-sidebar-widget--title">Filters</h2>
        <div className="sidebar-price">
          <div id="price-range" />
          <div className="output-wrapper mt-20">
            <input
              type="text"
              id="price-amount"
              className="price-amount"
              readOnly=""
            />
            <a className="price-range-button" href="#">
              <i className="ion-android-funnel" /> Filter
            </a>
          </div>
        </div>
      </div>
      {/*=======  End of single sidebar widget  =======*/}
      {/*=======  single sidebar widget  =======*/}
      <div className="single-sidebar-widget mb-40">
        <h2 className="single-sidebar-widget--title">Popular products</h2>
        {/*=======  widget product wrapper  =======*/}
        <div className="widget-product-wrapper">
          {/*=======  single widget product  =======*/}
          <div className="single-widget-product-wrapper">
            <div className="single-widget-product">
              {/*=======  image  =======*/}
              <div className="single-widget-product__image">
                <Link to={"/singlepage"}>
                  <img
                    src="assets/images/products/product8.jpg"
                    className="img-fluid"
                    alt=""
                  />
                </Link>
              </div>
              {/*=======  End of image  =======*/}
              {/*=======  content  =======*/}
              <div className="single-widget-product__content">
                <div className="single-widget-product__content__top">
                  <h3 className="product-title">
                    <Link to={"/singlepage"}>Eyeglass</Link>
                  </h3>
                  <div className="price">
                    <span className="main-price discounted">₹270.00</span>
                    <span className="discounted-price">₹220.00</span>
                  </div>
                  <div className="rating">
                    <i className="ion-android-star" />
                    <i className="ion-android-star" />
                    <i className="ion-android-star-outline" />
                    <i className="ion-android-star-outline" />
                    <i className="ion-android-star-outline" />
                  </div>
                </div>
              </div>
              {/*=======  End of content  =======*/}
            </div>
          </div>
          {/*=======  End of single widget product  =======*/}
          {/*=======  single widget product  =======*/}
          <div className="single-widget-product-wrapper">
            <div className="single-widget-product">
              {/*=======  image  =======*/}
              <div className="single-widget-product__image">
                <a href="/singlepage">
                  <img
                    src="assets/images/products/product7.jpg"
                    className="img-fluid"
                    alt=""
                  />
                </a>
              </div>
              {/*=======  End of image  =======*/}
              {/*=======  content  =======*/}
              <div className="single-widget-product__content">
                <div className="single-widget-product__content__top">
                  <h3 className="product-title">
                    <a href="/singlepage">Computerglass</a>
                  </h3>
                  <div className="price">
                    <span className="main-price discounted">₹660.00</span>
                    <span className="discounted-price">₹600.00</span>
                  </div>
                  <div className="rating">
                    <i className="ion-android-star" />
                    <i className="ion-android-star" />
                    <i className="ion-android-star" />
                    <i className="ion-android-star" />
                    <i className="ion-android-star" />
                  </div>
                </div>
              </div>
              {/*=======  End of content  =======*/}
            </div>
          </div>
          {/*=======  End of single widget product  =======*/}
          {/*=======  single widget product  =======*/}
          <div className="single-widget-product-wrapper">
            <div className="single-widget-product">
              {/*=======  image  =======*/}
              <div className="single-widget-product__image">
                <a href="/singlepage">
                  <img
                    src="assets/images/products/product6.webp"
                    className="img-fluid"
                    alt=""
                  />
                </a>
              </div>
              {/*=======  End of image  =======*/}
              {/*=======  content  =======*/}
              <div className="single-widget-product__content">
                <div className="single-widget-product__content__top">
                  <h3 className="product-title">
                    <a href="/singlepage">Kids glass</a>
                  </h3>
                  <div className="price">
                    <span className="main-price discounted">₹36.00</span>
                    <span className="discounted-price">₹33.00</span>
                  </div>
                  <div className="rating">
                    <i className="ion-android-star" />
                    <i className="ion-android-star" />
                    <i className="ion-android-star" />
                    <i className="ion-android-star" />
                    <i className="ion-android-star-outline" />
                  </div>
                </div>
              </div>
              {/*=======  End of content  =======*/}
            </div>
          </div>
          {/*=======  End of single widget product  =======*/}
        </div>
        {/*=======  End of widget product wrapper  =======*/}
      </div>
      {/*=======  End of single sidebar widget  =======*/}
      {/*=======  single sidebar widget  =======*/}
      {/*=======  End of single sidebar widget  =======*/}
    </div>
  );
}

export default Shopsidebar