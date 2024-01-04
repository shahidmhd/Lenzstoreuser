// import React, { useState } from "react";
// // import {Link} from 'react-router-dom'
// import 'bootstrap/dist/css/bootstrap.min.css';
// import './App.css'
// import { FaInstagram } from "react-icons/fa6";
// import { FaFacebookF } from "react-icons/fa";
// import { FaYoutube } from "react-icons/fa";
// import { FaTwitter } from "react-icons/fa";
// import { BrowserRouter as Router } from 'react-router-dom';
// function App() {
//   return (
//     <>
//     {/*=======  header top  =======*/}
//   <div className="header-top pb-2 bg-gray-400 ">
//     <div className="container ">
//       {/*=======  header top container  =======*/}
//       <div className="header-top-container">
//         {/*=======  header top left  =======*/}
//         <div className="header-top-left">
//           {/*=======  language change =======*/}
//           <div className="language-change change-dropdown d-none d-lg-block">
//             <a href="#">English</a>
//             <ul>
//               <li>
//                 <a href="#">English</a>
//               </li>
//               <li>
//                 <a href="#">Deustch</a>
//               </li>
//             </ul>
//           </div>
//           {/*=======  End of language change =======*/}
//           {/*=======  header separator  =======*/}
//           <span className="header-separator d-none d-lg-block">|</span>
//           {/*=======  End of header separator  =======*/}
//           {/*=======  currency change =======*/}
//           <div className="currency-change change-dropdown d-none d-lg-block">
//             <a href="#">USD</a>
//             <ul>
//               <li>
//                 <a href="#">EURO</a>
//               </li>
//               <li>
//                 <a href="#">GBP</a>
//               </li>
//             </ul>
//           </div>
//           {/*=======  End of currency change =======*/}
//           {/*=======  header separator  =======*/}
//           <span className="header-separator d-none d-lg-block">|</span>
//           {/*=======  End of header separator  =======*/}
//           {/*=======  order online text  =======*/}
//           <div className="order-online-text">
//             Order Online Call Us{" "}
//             <a href="#">
//               <span className="number">+91 1122334455</span>
//             </a>
//           </div>
//           {/*=======  End of order online text  =======*/}
//         </div>
//         {/*=======  End of header top left  =======*/}
//         {/*=======  header top right  =======*/}
//         <div className="header-top-right">
//           {/*=======  top shop sropdown =======*/}
//           <div className="top-shop-dropdown change-dropdown">
//             <a href="#">Purchase Now</a>
//             <ul>
//               <li>
//                 <a href="#">Shoping Cart</a>
//               </li>
//               <li>
//                 <a href="#">Checkout</a>
//               </li>
//             </ul>
//           </div>
//           {/*=======  End of top shop dropdown =======*/}
//           {/*=======  header separator  =======*/}
//           <span className="header-separator">|</span>
//           {/*=======  End of header separator  =======*/}
//           {/*======= top newsletter subscription   =======*/}
//           <div className="top-newsletter-subscription no-dropdown">
//             <a>Login/ Signup</a>
//           </div>
//           {/*=======  End of top newsletter subscription   =======*/}
//           {/*=======  header separator  =======*/}
//           <span className="header-separator">|</span>
//           {/*=======  End of header separator  =======*/}
//           {/*=======  top social icons  =======*/}
//           <div className="top-social-icons">
//             <ul>
//               <li>
//                 <a href="#">
//                  <FaTwitter/>
//                 </a>
//               </li>
//               <li>
//                 <a href="#">
//                  <FaFacebookF/>
//                 </a>
//               </li>
//               <li>
//                 <a href="#">
//                 <FaInstagram />
//                 </a>
//               </li>
//               <li>
//                 <a href="#">
//                   <FaYoutube/>
//                 </a>
//               </li>
//               <li>
//                 <a href="#">
//                   <FaYoutube/>
//                 </a>
//               </li>
//             </ul>
//           </div>
//           {/*=======  End of top social icons  =======*/}
//         </div>
//         {/*=======  End of header top right  =======*/}
//       </div>
//       {/*=======  End of header top container  =======*/}
//     </div>
//   </div>
//   {/*=======  End of header top  =======*/}
//     </>
  
//   );
// }

// export default App;

import React, { useEffect, useState } from "react";
import Topheader from "./Components/Topheader";
import Navbar from "./Components/Navbar";
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Footer from "./Components/Footer";
import Bottomnavbar from "./Components/Bottomnavbar";
import Singleproduct from "./Components/Singleproduct";
import Home from "./Pages/Home";
import Cartpage from "./Pages/Cartpage";
import Checkoutpage from "./Pages/Checkoutpage";
import Shop from "./Components/Shop";

function App() {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768); // Adjust the breakpoint as needed

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768); // Adjust the breakpoint as needed
    };

    window.addEventListener('resize', handleResize);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
 
  return (
   <>
    <Router>
   <Topheader/>
   <Navbar/>
   <Routes>
   <Route path="/" element={<Home/>} />
   <Route path="/cart" element={<Cartpage/>} />
   <Route path="/checkout" element={<Checkoutpage/>} />
   <Route path="/singleproduct" element={<Singleproduct/>} />
   <Route path="/shop" element={<Shop/>} />
   </Routes>
   {/* <Singleproduct/> */}
   <Footer/>
   
   {isMobile && <Bottomnavbar />}
   {/*sss  */}

   {/*  */}
   </Router>
   </>
  );
}

export default App;
