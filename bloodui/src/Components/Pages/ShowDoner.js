import React from "react";
import Header from "../Layout/Header";
class ShowDoner extends React.Component
{
    state={
        record:[],
        loading:true // loding true meand
    }
async componentDidMount()
{
    try{
        var response=await fetch("http://localhost:9090/showD",
        {
            method:'get',
            headers:{
                'Content-Type':'application/json'
            }

        })
    

var data=await response.json()

console.log(data)
this.setState({record:data,loading:false})

    }
catch(error)
{
    console.error("Error fetching data:", error); this.setState({ loading: false });
}
}
    render()
    {
        const {loading,record}=this.state
        if(loading)
        {
            return(
            <>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR29Vj-mL4S6JfFEBERRwo_975c96tZmXZ6vg&s" alt=""/>
            </>
            )
        }
        else
        {
        return(
            <>
            <Header/>
            <div className="container">
                <h3>All Doners</h3>
                <div className="card">
                    <div className="card-body">
                        
                
               <table className="table hover border" style={{border:"1"}}>
                <tr>
                    <th>Name</th><th>State</th><th>City</th>
                    <th>Contact</th>
                </tr>
                {record.map((e)=><tr>
                    <td>{e.doner_name}</td>
                    <td>{e.state_}</td>
                    <td>{e.city}</td>
                    <td>{e.contact}</td>
                    <td>{e.status==1?"Available":"Unavailable"}</td>

                    <td><button classNam    e="btn btn-primary"  type="">Available</button></td>            
                    </tr>)}
               </table>
               </div>
               </div>
            </div>
            </>
        )
        }
    }
}
export default ShowDoner