import React from "react"
import Header from "../Layout/Header"
class RegDonerAndRequester extends React.Component {

    state = {

        doner_name: '',
        email: '',
        password: '',
        dob: '',
        state_: '',
        city: '',
        bloodGroup: '',
        contact: '',
        message: '',
        status: 1
    }

    donar_data_handle = (e) => {
        const { name, value } = e.target
        this.setState({ [name]: value })
    }
    donar_record = async (ev) => {
        ev.preventDefault() // page hold k liye
        const { doner_name, email, password, dob, state_, city, bloodGroup, contact, status } = this.state
        try {
            var response = await fetch("http://localhost:9090/donerRegister", {
                method: 'post',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ doner_name, email, password, dob, state_, city, bloodGroup, contact, status })
            })
            var data = await response.json()

            if (!response.ok) {
                this.setState({ message: data.message })
            } else {
                this.setState({ message: data.message })
            }
        }
        catch (error) {
            console.log(error)
        }
    }
    //========================()=================================

    state1 = {
        req_name: '',
        req_email: '',
        req_password: '',
        req_number: '',
        req_state: '',
        req_city: '',
        req_bloodGroup: '',
        message: '',
        status: 1

    }
    requester_data_handle = (e1) => {
        const { name, value } = e1.target
        this.setState({ [name]: value })
    }

    requester_record = async (ev1) => {
        ev1.preverntDefault();
        const { req_name, req_email, req_password, req_number, req_state, req_city, req_bloodGroup, message, status } = this.state1
        try {

            var response = await fetch("http://location:9090/requester", {
                method: 'post',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ req_name, req_email, req_password, req_number, req_state, req_city, req_bloodGroup, message, status })

            })
            var data = await response.json()
            if (!response.ok) {
                this.setState({ message: data.message })
            } else {
                this.setState({ message: data.message })


            }
        } catch (error) {
            console.log(error)

        }
    }
        render()
        {
            return (
                <>
                    <Header />
                    <div className="container">
                        <div className="card">
                            <div className="card-body">
                                <div className="row">
                                    <div className="col-lg-6">
                                        <h4>Add doner</h4>
                                        <p style={{ color: "red" }}>{this.state.message}</p>
                                        <form onSubmit={this.donar_record}>
                                            <div className="row mt-1 mb-1">
                                                <div className="col-lg-12">
                                                    <input type="hidden" name="status" value={this.state.status} onChange={this.donar_data_handle} />
                                                    <input type="text" className="form-control" name="doner_name" placeholder="Enter-doner" value={this.state.doner_name} onChange={this.donar_data_handle} />
                                                </div>
                                            </div>
                                            <div className="row mt-1 mb-1">
                                                <div className="col-lg-12">
                                                    <input type="text" className="form-control" name="email" placeholder="Email" value={this.state.email} onChange={this.donar_data_handle} />
                                                </div>
                                            </div>
                                            <div className="row mt-1 mb-1">
                                                <div className="col-lg-12">
                                                    <input type="text" className="form-control" name="password" placeholder="Password" value={this.state.password} onChange={this.donar_data_handle} />
                                                </div>
                                            </div>
                                            <div className="row mt-1 mb-1">
                                                <div className="col-lg-12">
                                                    <input type="date" className="form-control" name="dob" value={this.state.dob} onChange={this.donar_data_handle} />
                                                </div>
                                            </div>
                                            <div className="row mt-1 mb-1">
                                                <div className="col-lg-12">
                                                    <select className="form-control" name="state_" value={this.state.state_} onChange={this.donar_data_handle}>
                                                        <option value="MP">MP</option>
                                                        <option value="UP">UP</option>

                                                        <option value="Bihar">Bihar</option>
                                                        <option value="Patna">Patna</option>

                                                    </select>
                                                </div>
                                            </div>
                                            <div className="row mt-1 mb-1">
                                                <div className="col-lg-12">
                                                    <select className="form-control" name="city" value={this.state.city} onChange={this.donar_data_handle}>
                                                        <option value="Indore">Indore</option>
                                                        <option value="Gwalior">Gwalior</option>


                                                        <option value="Guna">Guna</option>
                                                        <option value="Shivpuri">Shivpuri</option>
                                                    </select>
                                                </div>
                                            </div>
                                            <div className="row mt-1 mb-1">
                                                <div className="col-lg-12">
                                                    <select className="form-control" name="bloodGroup" value={this.state.bloodGroup} onChange={this.donar_data_handle}>
                                                        <option value="A+">A+</option>
                                                        <option value="B+">B+</option>
                                                        <option value="O+">O+</option>
                                                        <option value="O-">O-</option>
                                                    </select>
                                                </div>
                                            </div>

                                            <div className="row mt-1 mb-1">
                                                <div className="col-lg-12">
                                                    <input type="number" className="form-control" placeholder="Enter-Contact" name="contact" value={this.state.contact} onChange={this.donar_data_handle} />
                                                </div>
                                            </div>

                                            <div className="row mt-1 mb-1">
                                                <div className="col-lg-12">
                                                    <input type="submit" className="form-control btn btn-primary " placeholder="Enter-Contact" value="Add doner detail" />
                                                </div>
                                            </div>

                                        </form>
                                    </div>

                                    <div className="col-lg-6">
                                        <h4>Add Requester</h4>
                                        <p style={{ color: "red" }}>{this.state1.message}</p>
                                        <form onSubmit={this.requester_record}>
                                            <div className="row mt-1 mb-1">
                                                <div className="col-lg-12">
                                                    <input type="hidden" name="status" value={this.state1.status} onChange={this.requester_data_handle} />

                                                    <input type="text" name="req_name" className="form-control" placeholder="Enter-doner" onChange={this.state1.req_name} value={this.state1.req_name} />
                                                </div>
                                            </div>
                                            <div className="row mt-1 mb-1">
                                                <div className="col-lg-12">
                                                    <input type="text" name="req_email" className="form-control" placeholder="Email" value={this.state1.req_email} onChange={this.requester_data_handle} />
                                                </div>
                                            </div>
                                            <div className="row mt-1 mb-1">
                                                <div className="col-lg-12">
                                                    <input type="text" name="req_password" className="form-control" placeholder="Password" value={this.state1.req_password} onChange={this.requester_data_handle} />
                                                </div>
                                            </div>
                                            {/* <div className="row mt-1 mb-1">
                                 <div className="col-lg-12">
                                     <input type="date"  name="date" className="form-control"/>
                                 </div>
                            </div> */}

                                            <div className="row mt-1 mb-1">
                                                <div className="col-lg-12">
                                                    <select className="form-control" name="req_state" value={this.state1.req_state} onChange={this.requester_data_handle}>
                                                        <option value="MP">MP</option>
                                                        <option value="">UP</option>

                                                    </select>
                                                </div>
                                            </div>

                                            <div className="row mt-1 mb-1">
                                                <div className="col-lg-12" >
                                                    <select name="req_city" className="form-control" value={this.state1.req_city} onChange={this.requester_data_handle}>
                                                        <option value="Indore">Indore</option>
                                                        <option value="Mumbai">Mumbai</option>
  
                                                    </select>
                                                </div>
                                            </div>

                                            <div className="row mt-1 mb-1">
                                                <div className="col-lg-12">
                                                    <select className="form-control" name="req_bloodGroup" value={this.state1.req_bloodGroup} onChange={this.requester_data_handle} >
                                                        <option value="A+">A+</option>
                                                        <option value="B+">B+</option>

                                                    </select>
                                                </div>
                                            </div>

                                            <div className="row mt-1 mb-1">
                                                <div className="col-lg-12">
                                                    <input type="number" name="req_number" className="form-control" placeholder="Enter-Contact" value={this.state1.req_number} onChange={this.requester_data_handle} />
                                                </div>
                                            </div>

                                            <div className="row mt-1 mb-1">
                                                <div className="col-lg-12">
                                                    <input type="submit" className="form-control btn btn-primary " placeholder="Enter-Contact" value="Add Requester detail" />
                                                </div>
                                            </div>

                                        </form>
                                    </div>
                                    <div>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </>
            )
        }
    }
export default RegDonerAndRequester
