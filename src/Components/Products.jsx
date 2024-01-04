import React from 'react'
// import image1 from 'https://lenzstore.cyenosure.in/assets/images/products/logowithtext.png'
// import image2 from 'https://lenzstore.cyenosure.in/assets/images/products/glass1.jpg'

function Products() {
    const products = [
        {
          id: 1,
          name: 'Product name',
          image1: "https://lenzstore.cyenosure.in/assets/images/products/glass1.jpg",
          image2: "data:image/webp;base64,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Y2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+Cjx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iPgoJPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4KCQk8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczpwaG90b3Nob3A9Imh0dHA6Ly9ucy5hZG9iZS5jb20vcGhvdG9zaG9wLzEuMC8iIHhtbG5zOklwdGM0eG1wQ29yZT0iaHR0cDovL2lwdGMub3JnL3N0ZC9JcHRjNHhtcENvcmUvMS4wL3htbG5zLyIgICB4bWxuczpHZXR0eUltYWdlc0dJRlQ9Imh0dHA6Ly94bXAuZ2V0dHlpbWFnZXMuY29tL2dpZnQvMS4wLyIgeG1sbnM6ZGM9Imh0dHA6Ly9wdXJsLm9yZy9kYy9lbGVtZW50cy8xLjEvIiB4bWxuczpwbHVzPSJodHRwOi8vbnMudXNlcGx1cy5vcmcvbGRmL3htcC8xLjAvIiAgeG1sbnM6aXB0Y0V4dD0iaHR0cDovL2lwdGMub3JnL3N0ZC9JcHRjNHhtcEV4dC8yMDA4LTAyLTI5LyIgeG1sbnM6eG1wUmlnaHRzPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvcmlnaHRzLyIgZGM6UmlnaHRzPSIyMDIzIEdldHR5IEltYWdlcyIgcGhvdG9zaG9wOkNyZWRpdD0iR2V0dHkgSW1hZ2VzIiBHZXR0eUltYWdlc0dJRlQ6QXNzZXRJRD0iMTc5NzUyNjk1NiIgeG1wUmlnaHRzOldlYlN0YXRlbWVudD0iaHR0cHM6Ly93d3cuZ2V0dHlpbWFnZXMuY29tL2V1bGE/dXRtX21lZGl1bT1vcmdhbmljJmFtcDt1dG1fc291cmNlPWdvb2dsZSZhbXA7dXRtX2NhbXBhaWduPWlwdGN1cmwiID4KPGRjOmNyZWF0b3I+PHJkZjpTZXE+PHJkZjpsaT5NYXJjb3MgQnJpbmRpY2NpPC9yZGY6bGk+PC9yZGY6U2VxPjwvZGM6Y3JlYXRvcj48ZGM6ZGVzY3JpcHRpb24+PHJkZjpBbHQ+PHJkZjpsaSB4bWw6bGFuZz0ieC1kZWZhdWx0Ij5CVUVOT1MgQUlSRVMsIEFSR0VOVElOQSAtIE5PVkVNQkVSIDE2OiBMaW9uZWwgTWVzc2kgb2YgQXJnZW50aW5hIHdhdmVzIGZhbnMgcHJpb3IgdG8gYSBGSUZBIFdvcmxkIEN1cCAyMDI2IFF1YWxpZmllciBtYXRjaCBiZXR3ZWVuIEFyZ2VudGluYSBhbmQgVXJ1Z3VheSBhdCBFc3RhZGlvIEFsYmVydG8gSi4gQXJtYW5kbyBvbiBOb3ZlbWJlciAxNiwgMjAyMyBpbiBCdWVub3MgQWlyZXMsIEFyZ2VudGluYS4gKFBob3RvIGJ5IE1hcmNvcyBCcmluZGljY2kvR2V0dHkgSW1hZ2VzKTwvcmRmOmxpPjwvcmRmOkFsdD48L2RjOmRlc2NyaXB0aW9uPgo8cGx1czpMaWNlbnNvcj48cmRmOlNlcT48cmRmOmxpIHJkZjpwYXJzZVR5cGU9J1Jlc291cmNlJz48cGx1czpMaWNlbnNvclVSTD5odHRwczovL3d3dy5nZXR0eWltYWdlcy5jb20vZGV0YWlsLzE3OTc1MjY5NTY/dXRtX21lZGl1bT1vcmdhbmljJmFtcDt1dG1fc291cmNlPWdvb2dsZSZhbXA7dXRtX2NhbXBhaWduPWlwdGN1cmw8L3BsdXM6TGljZW5zb3JVUkw+PC9yZGY6bGk+PC9yZGY6U2VxPjwvcGx1czpMaWNlbnNvcj4KCQk8L3JkZjpEZXNjcmlwdGlvbj4KCTwvcmRmOlJERj4KPC94OnhtcG1ldGE+Cjw/eHBhY2tldCBlbmQ9InciPz4KAA==",
          sizes: ['L', 'M', 'S', 'XS'],
          colors: ['black', 'blue', 'yellow'],
          discountPercentage: 10,
          originalPrice: 180.00,
          discountedPrice: 160.00,
        },
        {
          id: 2,
          name: 'Product name',
          image1: "https://lenzstore.cyenosure.in/assets/images/products/glass1.jpg",
          image2: "https://lenzstore.cyenosure.in/assets/images/products/glass1.jpg",
          sizes: ['L', 'M', 'S', 'XS'],
          colors: ['black', 'blue', 'yellow'],
          discountPercentage: 10,
          originalPrice: 180.00,
          discountedPrice: 160.00,
        },
        {
          id: 3,
          name: 'Product name',
          image1: "https://lenzstore.cyenosure.in/assets/images/products/glass1.jpg",
          image2: "https://lenzstore.cyenosure.in/assets/images/products/glass1.jpg",
          sizes: ['L', 'M', 'S', 'XS'],
          colors: ['black', 'blue', 'yellow'],
          discountPercentage: 10,
          originalPrice: 180.00,
          discountedPrice: 160.00,
        },
        {
          id: 4,
          name: 'Product name',
          image1: "https://lenzstore.cyenosure.in/assets/images/products/glass1.jpg",
          image2: "https://lenzstore.cyenosure.in/assets/images/products/glass1.jpg",
          sizes: ['L', 'M', 'S', 'XS'],
          colors: ['black', 'blue', 'yellow'],
          discountPercentage: 10,
          originalPrice: 180.00,
          discountedPrice: 160.00,
        },
        {
          id: 5,
          name: 'Product name',
          image1: "https://lenzstore.cyenosure.in/assets/images/products/glass1.jpg",
          image2: "https://lenzstore.cyenosure.in/assets/images/products/glass1.jpg",
          sizes: ['L', 'M', 'S', 'XS'],
          colors: ['black', 'blue', 'yellow'],
          discountPercentage: 10,
          originalPrice: 180.00,
          discountedPrice: 160.00,
        },
        {
          id: 6,
          name: 'Product name',
          image1: "https://lenzstore.cyenosure.in/assets/images/products/glass1.jpg",
          image2: "https://lenzstore.cyenosure.in/assets/images/products/glass1.jpg",
          sizes: ['L', 'M', 'S', 'XS'],
          colors: ['black', 'blue', 'yellow'],
          discountPercentage: 10,
          originalPrice: 180.00,
          discountedPrice: 160.00,
        },
       
        // {
        //   id: 9,
        //   name: 'Product name',
        //   image1: './assets/images/products/glass2.jpg',
        //   image2: './assets/images/products/glass1.jpg',
        //   sizes: ['L', 'M', 'S', 'XS'],
        //   colors: ['black', 'blue', 'yellow'],
        //   discountPercentage: 10,
        //   originalPrice: 180.00,
        //   discountedPrice: 160.00,
        // },
        // {
        //   id: 10,
        //   name: 'Product name',
        //   image1: './assets/images/products/glass2.jpg',
        //   image2: './assets/images/products/glass1.jpg',
        //   sizes: ['L', 'M', 'S', 'XS'],
        //   colors: ['black', 'blue', 'yellow'],
        //   discountPercentage: 10,
        //   originalPrice: 180.00,
        //   discountedPrice: 160.00,
        // },
      ];
  return (
   <>
    {/*=======  single product  =======*/}
    {products.map((product) => (
        <div  key={product.id} className="col-12 col-lg-3 col-md-6 col-sm-6 mb-45">
          <div className="single-product">
            {/*=======  single product image  =======*/}
            <div className="single-product__image">
              <a className="image-wrap" href="shop-product-basic.html">
                <img
                  src={product.image1}
                  className="img-fluid"
                  alt=""
                />
                <img
                  src={product.image2}
                  className="img-fluid"
                  alt=""
                />
              </a>
              <div className="single-product__floating-badges">
                <span className="onsale">-{product.discountPercentage}%</span>
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
                  <a href="shop-product-basic.html">{product.name}</a>
                </h3>
                <a href="#">Add to cart</a>
              </div>
              {/* <div className="price">
                <span className="main-price">$130.00</span>
              </div> */}
              <div className="price">
                <span className="main-price discounted">₹{product.discountedPrice}</span>
                <span className="discounted-price">₹{product.originalPrice}</span>
              </div>
            </div>
            {/*=======  End of single product content  =======*/}
          </div>
        </div>
          ))}
   </>
  )
}

export default Products