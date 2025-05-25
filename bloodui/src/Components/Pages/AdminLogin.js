import React from "react";
import AdminHeader from "../Layout/AdminHeader";
class AdminLogin extends React.Component
{
    // state={
    //     email:"",
    //     password:""
    // }
    // changeHandler=(e)=>
    // {
    //     this.setState({[e.target.name]:e.target.value})
    // }
    // submitHandler=async(e)=>
    // {
    //     e.preventDefault()
    //     try {
    //         var response=await fetch("http://localhost:9090/adminLogin",
    //         {
    //             method:'post',
    //             headers:{
    //                 'Content-Type':'application/json'
    //             },
    //             body:JSON.stringify(this.state)
    //         })
    //         if(response.ok)
    //         {
    //             var data=await response.json()
    //             if(data.message==="success")
    //             {
    //                 window.location.href="/allDoner"
    //             }
    //             else{
    //                 alert("Invalid Email or Password")
    //             }
    //         }
    //         else{
    //             alert("Invalid Email or Password")
    //         }
    //     } catch (error) {
    //         console.log(error)
    //     }
    // }

    render()
    {
        return(
            <>
            <AdminHeader/>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-6">
                        <div className="card">
                            <div className="card-body">
                                <h3>Admin Login</h3>
                                <form>
                                    <div className="form-group">
                                        <label>Email</label>
                                        <input type="email" name="email" className="form-control" />
                                    </div>
                                    <div className="form-group">
                                        <label>Password</label>
                                        <input type="password" name="password" className="form-control"/>
                                    </div>
                                    <button className="btn btn-primary">Login</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </>
        )
    }
}
export default AdminLogin