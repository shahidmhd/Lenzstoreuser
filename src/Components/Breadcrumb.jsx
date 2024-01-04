import React from 'react'

function Breadcrumb() {
  return (
    <div className="breadcrumb-area breadcrumb-bg-2 pt-50 pb-70">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <h1 className="breadcrumb-title">Shop</h1>
            {/*=======  breadcrumb list  =======*/}
            <ul className="breadcrumb-list">
              <li className="breadcrumb-list__item">
                <a href="index.html">HOME</a>
              </li>
              <li className="breadcrumb-list__item breadcrumb-list__item--active">
                PRODUCTS
              </li>
            </ul>
            {/*=======  End of breadcrumb list  =======*/}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Breadcrumb