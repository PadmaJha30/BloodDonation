// import react from "react";
// import 'bootstrap/dist/css/bootstrap.css';
// import {Link} from 'react-router-dom';
// function Header()
// {
//     return(
// <>
//         <div className="container">
//             <div className="row justify-content-center">
//                 <div className="col-lg-5">
//                     <h3>Blood Donate app</h3>
//                 </div>
//             </div>
//             <div className="row">
          
//                 <div className="col-lg-2">
//                     <Link to='/'>
//                     <button className="btn btn-link"  type="">Home</button>
//                     </Link>
//                 </div>

//                 {/* Add doner not in user thus commented*/}
//                 {/* <div className="col-lg-2">
//                     <Link to='/addDoner'>
//                     <button className="btn btn-link"  type="">Add Doner</button>
//                     </Link>
//                 </div> */}

//                 <div className="col-lg-2">
//                     <Link to='/register'>
//                     <button className="btn btn-link"  type="">Register</button>
//                     </Link>
//                 </div>

//                 <div className="col-lg-2">
//                     <Link to='/regDonerAndReqester'>
//                     <button className="btn btn-link"  type="">Register doner requester</button>
//                     </Link>
//                 </div>

                
//                 <div className="col-lg-2">
//                     <Link to='/showDoner'>
//                     <button className="btn btn-link"  type="">Show Doner</button>
//                     </Link>
//                 </div>

                  
//                 <div className="col-lg-2">
//                     <Link to='/doner'>
//                     <button className="btn btn-link"  type="">Admin</button>
//                     </Link>
//                 </div>
//             </div>
//         </div>
//         </>
//     )
// }
// export default Header




import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import { Link } from 'react-router-dom';
import './Header.css'; // We'll create this file for CSS

function Header() {
    return (
        <div className="header-container">
            <div className="text-center py-3">
                <h1 className="app-title">Blood Donate App</h1>
            </div>
            <div className="nav-links d-flex justify-content-center flex-wrap">
                <Link to='/' className="nav-button">Home</Link>
                <Link to='/register' className="nav-button">Register</Link>
                <Link to='/regDonerAndReqester' className="nav-button">Register Donor Requester</Link>
                <Link to='/showDoner' className="nav-button">Show Donor</Link>
                <Link to='/doner' className="nav-button">Admin</Link>
            </div>
        </div>
    );
}

export default Header;
