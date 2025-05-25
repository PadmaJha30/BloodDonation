const {MongoClient} = require("mongodb")//mongoclient is a class

var url= "mongodb://localhost:27017"
//mongodb is protocol
//loacal host is a domain
//27017 is a port numbre 

const client=new MongoClient(url)

client.connect()
.then((msj)=>{
    console.log("connected")
})
.catch((error)=>
{
   console.log("faild", error) 
})

module.exports=client
