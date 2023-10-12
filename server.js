
//require():to import files
const express=require("express");
//Exporting files,specify the path-> ("./test")
const Router=require("./Routes/application")

//const greeting=require("./test")
//initialising an app  
const app=express();//Creates a small server
//specify where the application should run/be executed
//specify the port it should listen to....
//3000 is the port number
app.listen(3000)
//views folder: store hmtl files but they must have the extension ".ejs"
//views folder: store .ejs(.html) files

//specify the node engine
app.set("view engine","ejs");
//accept static files 
app.use(express.static("public"))//FOR SPECIFYING/ACCEPTING CSS,IMAGES,FRONT-END JAVASCRIPT FILES[FRONT-END]
app.use(express.json())//ACCEPTING JSON DATA FROM FRONT-END
app.use(Router)//middleware
//app.use(express.urlencoded({extended:true}))
//req=request
//res=respond

// //linking javascript files
// app.use(express.static("app-first-Page"))


//app.get()
//render():for responding / outputting html page
//send():for bringing message to the user
//reditrcy:checks condition







//app.get:an endpoint for responding 

// app.get("/app2",(req,res)=>{
//     res.render("app2") 
// });
// app.get("/app3",(req,res)=>{
//     res.render("app3") 
// });
// app.get("/app4",(req,res)=>{
//     res.render("app4") 
// });
// app.get("/app5",(req,res)=>{
//     res.render("app5") 
// });
// app.get("/app6",(req,res)=>{
//     res.render("app6") 
// });

// app.get("/app7",(req,res)=>{
//     res.render("app7") 
// });
// app.get("/app8",(req,res)=>{
//     res.render("app8") 
// });
// app.get("/app9",(req,res)=>{
//     res.render("app9") 
// });

// app.get("/app10",(req,res)=>{
//     res.render("app10") 
// });
// app.get("/app11",(req,res)=>{
//     res.render("app11") 
// });


// app.get("/aboutus",(req,res)=>{
//     res.render("aboutus")
 
// });
// app.get("/app1",(req,res)=>{
//     res.render("app1")
// });
//console.log(greeting)

