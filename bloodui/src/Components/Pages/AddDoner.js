import Header from "../Layout/Header";
import React from "react";
class AddDoner extends React.Component
{
    state={
        donarname:'',
        contact:'',
        city:'',
        age:'',
        bloodGroup:''
    }

    data_handle=(event)=> // data le kar aayega  // event is parameter
    {
        const{name, value}=event.target //event .target ,is fatching the data from the value
        this.setState({[name]:value})
    }



    handle= async(e)=> //submit click par handle call hpga
    {
       e.preventDefault(); //by default page load hone se rokta hai 
     
      const{donarname, contact,city,age,bloodGroup}= this.state;
      // console.log(donarname + " " + contact + " " + city + " " + age + " " + bloodGroup);
       
       try{
        var response = await fetch("http://localhost:9090/addDoner",{
        method:'POST',
        headers:{
               'Content-Type': 'application/json'
        },
        body:JSON.stringify({donarname, contact,city,age,bloodGroup})
      });


      if (response.ok) { const result = await response.json(); console.log(result); alert("Data saved successfully!"); } else { const errorText = await response.text(); console.error("Failed to save data:", errorText); alert("Failed to save data."); }   


       }
      
    catch(e)
    {
        console.log(e)
    }
      }

    render()
    {
        return(
            <>
            <Header/>
           <div className="container">
            <div className="row">
                <form onSubmit={this.handle}>
                <div className="col-lg-8">
                    <div className="card">
                        <div className="card-body">
                        <h3>Add Doner Details</h3>
                        <div className="row mt-1 mb-1">
                          <div className="col-lg-12">
                            <p>Doner Name</p>
                            <input type="text" className="form-control" name="donarname" value={this.state.donarname} onChange={this.data_handle}/>
                          </div>
                        </div>
                          
                        <div className="row mt-1 mb-1">
                          <div className="col-lg-12">
                            <p>Contact</p>
                            <input type="text" className="form-control" name="contact" value={this.state.contact} onChange={this.data_handle}/>
                          </div>
                        </div>

                        <div className="row mt-1 mb-1">
                          <div className="col-lg-12">
                            <p>City</p>
                            <input type="text" className="form-control" name="city" value={this.state.city} onChange={this.data_handle}/>
                          </div>
                        </div>
                        <div className="row mt-1 mb-1">
                          <div className="col-lg-12">
                            <p>Age</p>
                            <input type="text" className="form-control" name="age" value={this.state.age} onChange={this.data_handle}/>
                          </div>
                        </div>

                        <div className="row mt-1 mb-4">
                          <div className="col-lg-12">
                            <p>Blood Group</p>
                            
                            <div className="col-lg-12">
                                <select className="form-control" name="bloodGroup" value={this.state.bloodGroup} onChange={this.data_handle}>
                                    <option value="A+">A+</option>
                                    <option value="A-">A-</option>
                                    <option value="B+">B+</option>
                                    <option value="B-">B-</option>
                                    <option value="O+">O+</option>
                                    <option value="O-">O-</option>
                                    <option value="AB+">AB+</option>
                                    <option value="AB-">AB-</option>
                                </select>
                            </div>
                          </div>
                        </div>

                        <div className="row mt-1 mb-1">
                          <div className="col-lg-12">
                           <input type="submit"  value="Add Details"
                           className="form-control btn btn-danger"/>                           
                          </div>
                        </div>
                        </div>
                    </div>
                </div>
                </form>
            </div>
           </div>
            </>
        )
    }
}
export default AddDoner