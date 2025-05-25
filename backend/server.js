// var client =require('./db')

// var express = require('express')
// var app =express()

// var d=[]
// app.get("/fetch",(req,res)=>{
//     client.db("bloodBank").collection("doner").find().forEach((e)=>{
//         d.push(e)

//     })
//     res.json(d)
// })
// app.listen(8089)


var express=require('express')
var bodyParser=require('body-parser')
var client=require('./db')
var app=express()
app.use(bodyParser.json())

var cors=require("cors")
app.use(cors())


app.get('/', (req, res) =>{
    res.send("Process")
})

app.post('/addDoner',(req,res)=>{
const {donarname, contact,city, age,bloodGroup}=req.body


client.db("bloodBank").collection("doner").insertOne({donarname,contact,city,age,bloodGroup})
//console.log(donarname +" "+ contact +" "+ city +" "+  age +" "+ bloodGroup)
})

app.post('/donerRegister',async(req,res)=>{
const {doner_name,email,password,dob,state_,city,bloodGroup,contact,status}=req.body
    console.log(doner_name,email,password,dob,state_,city,bloodGroup,contact,status)

    
const response=await client.db("bloodBank").collection("donerRegister").findOne
({email:email})

if(response)
{
    console.log("already registerd user")
    return res.status(400).json({message:'this email id alredy register'})//not ok 400 stats
    //200 and 400 status hote hai agar sussefully hua to200 ayeba
}
else{
    client.db("bloodBank").collection("donerRegister").insertOne({doner_name,email,password,dob,state_,city,bloodGroup,contact,status})
    console.log("new user")
    return res.status(200).json({message:'New user successfully register'})// 200 status all ok
}
})
//async jab tab data ka wait karega jab tak puriprocess nhi ho jati
app.get('/showData',async(req,res)=>{
    const response=await client.db("blookBank").collection("donerRegister").find().toArray()
    return res.status(200).json(response)
    console.log("test")
    console.log(response)
})


app.get("/showD",async(req,res)=>{
    const respo=await client.db("bloodBank").collection("donerRegister").find().toArray()

    return res.status(200).json(respo)
})

// Delete metod
app.delete('/deleteDoner/:id', async(req,res)=>{
    const{id}=req.params // id here avobe 
    console.log(id) //same avobe id 
    const resp=await client.db("bloodBank").collection("donerRegister").deleteOne({email:id})
    if(resp)
    {
        return res.status(200).json({s:true})
    }
    else{
        return res.status(400).json({s:false})
    }
})

//requester register
app.post('/requester',async(req, res)=>{
    const{req_name, req_email, req_password, req_number, req_city, req_state,req_blooodGroup}=req.body
    console.log(req_name, req_email, req_password, req_number, req_city, req_state, req_password,req_blooodGroup)
    const response=await client.db("bloodBank").collection("requesterRegister").findOne({email:email})
})



app.listen(9090)