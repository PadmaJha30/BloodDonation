import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import {Link} from 'react-router-dom';
function AdminHeader()
{
    return (
          
        <>
<header class="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom">
      <a href="/" class="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-dark text-decoration-none">
        <span class="fs-4">Admin Page</span>
      </a>

      <ul class="nav nav-pills">
        <li class="nav-item"><Link to='/adminLogin' className="nav-link"> Admin Login</Link></li>
       
        <li class="nav-item"> <Link to='/allDoner' className="nav-link">
                    All Doner
                    </Link></li>
        <li class="nav-item"><Link to='/allRequester' className="nav-link">
                    All Requester
                    </Link></li>
        <li class="nav-item"> <Link to='/allRequest' className="nav-link">
                    All Request
                    </Link></li>
        <li class="nav-item"><Link to='/availRecord' className="nav-link">
                     All Record
                    </Link></li>
        <li class="nav-item"> <Link className="nav-link" to='/donreHistory'>
                     Doner History
                    </Link></li>
        <li class="nav-item"><Link className="nav-link" to='/logOut'>
                    Logout
                    </Link></li>
      </ul>
    </header>





















{/*         
          <div className="container">
            <div className="row justify-content-center" >
                 <div className="col-lg-2">
                    <Link to='/adminLogin'>
                    <button className="btn btn-Link btnAH" type="">Admin Login</button>
                    </Link>
                 </div>

                 <div className="col-lg-2">
                    <Link to='/allDoner'>
                    <button className="btn btn-Link" type="">All Doner</button>
                    </Link>
                 </div>

                 <div className="col-lg-2">
                    <Link to='/allRequester'>
                    <button className=" btn btn-Link" type="">All Requester</button>
                    </Link>
                 </div>

                 <div className="col-lg-2">
                    <Link to='/allRequest'>
                     <button className="btn btn-Link" type="">All Request</button>
                    </Link>
                 </div>
                 <div className="col-lg-2">
                    <Link to='/availRecord'>
                     <button className="btn btn-Link" type="">All Record</button>
                    </Link>
                 </div>
                 <div className="col-lg-2">
                    <Link to='/donreHistory'>
                     <button className="btn btn-Link" type="">Doner History</button>
                    </Link>
                 </div>
                 <div className="col-lg-2">
                    <Link to='/logOut'>
                     <button className="btn btn-Link" type="">Logout</button>
                    </Link>
                 </div>

                </div>    
            </div> */}
        </>
    
   )
}
export default AdminHeader