const express=require("express");

const firebaseApp=require("../firebase");
const nodemailer=require("nodemailer");
const db=firebaseApp.firestore();//CONNECTS TO firestore
const auth=firebaseApp.auth();//CONNECTS TO AUTHENTICATION
//export function "finalSubmission" from the folder controller
const {finalSubmission}=require("../Controller/applicationController")
//allows us to create routes in a separate file 
const Router=express.Router();




Router.get("/",(req,res)=>{
    // (/) represent LOCALHOST 3000:ENDPOINT

    res.render("app1",{title:"Application Process"}) 
}); 

Router.get("/app2",(req,res)=>{
    res.render("app2")
});
Router.get("/app3",(req,res)=>{
    res.render("app3") 
});
Router.get("/app4",(req,res)=>{
    res.render("app4") 
});
Router.get("/app5",(req,res)=>{
    res.render("app5") 
});
Router.get("/app6",(req,res)=>{
    res.render("app6") 
});

Router.get("/app7",(req,res)=>{
    res.render("app7") 
});

Router.get("/app8",(req,res)=>{
    res.render("app8") 
});
//PASSING THE FUNCTION WE'VE CREATED
Router.post("/app8",finalSubmission);

Router.get("/app9:id",(req,res)=>{
    console.log(req.params.id)
    res.render("app9",{id:req.params.id}) 
});
Router.post("/fetchemail",(req,res)=>{
    console.log(req.body);//display on the terminal
    db.collection("studentApplication").doc(req.body.myid).get()
    .then((snapshot)=>{
        let userEmail=snapshot.data().application.ContactDetails[0].Email;
//console.log(userEmail)
//send():to send data back to front-end
res.send({message:userEmail});
    })
});

Router.post("/sendmail",(req,res)=>{

 console.log(req.body.myEmail)//display on the terminal
 //identify the email we'll use
 let userEmail=req.body.myEmail;
const transporter=nodemailer.createTransport({

service:"gmail",//specify that we use a gmail account
auth:{ user:"ashleymonamo@gmail.com",
       pass:"qvggksgpriykinlt"
    }

});   
//creates a small template
const mailOptions={from:"ashleymonamo@gmail.com",
                     to:userEmail,
                     subject:"GNS Application Confirmation",
                     //html is the body
                     html:` <h1>Confirmation email from GNS</h1>
                     <h4>Student No: 219739055</h4><br>
                     <h5>Username: ${userEmail}</h5>
                     <h5>Password: 123456</h5><br>
                     <h6>Regards</h6>
                     <h6>GNS Enterprise</h6> `
                 }
                 transporter.sendMail(mailOptions,((error,info)=>{
                     if (error)
                     {
                        console.log(error);

                    }else{
                        console.log("Email has been sent"); 
                        res.send(info)//respond to front-end
                     }
                 })
                 );

});

Router.get("/app10",(req,res)=>{
    res.render("app10") 
});
Router.get("/app11",(req,res)=>{
    res.render("app11") 
});
//if the code for sending emails isn't working add the line
//process.env.NODE_TLS_REJECT_UNATHORIZED=0;
module.exports=Router;//publictly accessable 

