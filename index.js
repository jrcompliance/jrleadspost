const express = require("express");
const firebase = require("firebase")
const cors = require("cors");
const User = require("./config");
const port = process.env.PORT || 3000
const { firestore } = require("firebase-admin");
const app = express();
app.use(express.json());
app.use(cors());


app.post("/create", async (req, res) => {
  const data = req.body;
  const did  = User.doc().id;
  console.log(did);
  
  await User.doc(did).set({
    Attachments:[],
    Attachments1:[],
    Certificates:[],
    CompanyDetails:[
        {
            contactperson:req.body.contactperson,
            email:req.body.email,
            phone:req.body.phone   
        }
      ],
    CxID:102,
    cat:"NEW",
    companyname:"",
    endDate:new Date().toISOString().split('T')[0],
    fail:0,
    flag:false,
    id:did,
    lastseen:firebase.firestore.Timestamp.fromDate(new Date()),
    logo:"",
    message:req.body.message==null?"No message available from client":req.body.message,
    priority:"E",
    qDate:new Date().toISOString().split('T')[0],
    startDate:firebase.firestore.Timestamp.fromDate(new Date()),
    status:"NEW",
    status1:"AVERAGE",
    status2:"FOLLOWUP",
    status4:"PAYMENT",
    status5:"IRRELEVANT",
    success:0,
    task:req.body.task +" "+ req.body.contactperson,
    time:firebase.firestore.Timestamp.fromDate(new Date()),
    website:""          
});
  res.send({ msg: "User Added" });

});


app.listen(port, () => console.log("Up & RUnning *3000"));
