import React from 'react'

function Shopheader() {
  return (
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
  )
}

export default Shopheader