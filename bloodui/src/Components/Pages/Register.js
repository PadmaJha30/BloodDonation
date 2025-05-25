import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "../Layout/Header";
class Register extends React.Component
{
    render()
    {
        return(
            <>
            <Header/>
            <div className=" container-fluid demo">
            <div className="container mt-5 mb-5 ">
        <div className="row" style={{width:'600px', height:'600px' }}>
        <form>
         
         <div className="divhead">
         <h1>Donation</h1>
         </div>
          
          <div className="card cardreg">
            
              <div className="card-body mt-3 mb-3 cardbreg">
                <div className="row">
                    <div className="col-lg-6 mt-3 mb-3" >
                        <span>First Name : </span>
                        <input className="form-control"  type="text" name="fname"/>
                    </div>
                    <div className="col-lg-6 mt-3 mb-3" >
                        <span>Last Name : </span>
                        <input className="form-control"  type="text" name="lname"/>
                    </div>
                </div>

                <div className="row">
                    <div className="col-lg-6 mt-3 mb-3" >
                        <span>Password : </span>
                        <input className="form-control"  type="text" name="pass"/>
                    </div>
                    <div className="col-lg-6 mt-3 mb-3" >
                        <span>Email : </span>
                        <input className="form-control"  type="text" name="email"/>
                    </div>
                </div>

                <div className="row">
                    <div className="col-lg-6 mt-3 mb-3" >
                        <span>Phone no. : </span>
                        <input className="form-control"  type="text" name="phn"/>
                    </div>
                    <div className="col-lg-6 mt-3 mb-3" >
                        <span>Address : </span>
                        <input className="form-control"  type="text" name="addr"/>
                    </div>
                </div>

                <div className="row">
                    <div className="col-lg-12">
                       <input type="submit" name="button" value="Submit" className="btn btn-primary rounded-pill"/> 
                    </div>
                </div>
                
              </div>
          </div>
            </form>
            </div>
            </div>
            </div>
            </>
        )
    }
}
export default Register
