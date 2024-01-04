import React from 'react'

function Offerbanner() {
  return (
    <>
    {/*=============================================
	=            hover banner area         =
	=============================================*/}
  <div className="hover-banner-area mb-70 mb-md-60 mb-sm-60">
    <div className="container wide">
      <div className="row">
        <div className="col-md-6 mb-30">
          {/*=======  single banner  =======*/}
          <div className="single-banner single-banner--hoverborder">
            <a className="banner-link" href="shop-left-sidebar.html" />
            <img
              src="https://img.freepik.com/premium-photo/black-eye-glasses-small-present-light-blue-background-web-banner_242270-127.jpg"
              className="img-fluid"
              alt=""
            />
            <div className="banner-content banner-content--middle-white banner-content--middle-dark">
              <p>
                {" "}
                <span className="bold-white">10%</span> off your{" "}
                <span className="d-block">next purchase</span>
              </p>
            </div>
          </div>
          {/*=======  End of single banner  =======*/}
        </div>
        <div className="col-md-6 mb-30">
          {/*=======  single banner  =======*/}
          <div className="single-banner single-banner--hoverborder">
            <a className="banner-link" href="shop-left-sidebar.html" />
            <img
              src="https://img.freepik.com/premium-photo/black-eye-glasses-small-present-light-blue-background-web-banner_242270-127.jpg"
              className="img-fluid"
              alt=""
            />
            <div className="banner-content banner-content--black-left">
              <p>
                {" "}
                <span className="big-text">Free shipping</span>{" "}
                <span className="small-text d-block">
                  Free shipping on domestic orders
                </span>
              </p>
            </div>
          </div>
          {/*=======  End of single banner  =======*/}
        </div>
      </div>
    </div>
  </div>
  {/*=====  End of hover banner area  ======*/}
   </>
  )
}

export default Offerbanner