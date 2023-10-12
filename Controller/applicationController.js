//EXPORT FIREBASE
const firebaseApp=require("../firebase");
const db=firebaseApp.firestore();//CONNECTS TO firestore
const auth=firebaseApp.auth();//CONNECTS TO AUTHENTICATION

const finalSubmission =(req,res)=>{
    //console.log(req.body)
    const data=req.body;
    const email=data.ContactDetails[0].Email;
    const password=data.Password;
    console.log(email)
    console.log(password)
    
        auth.createUserWithEmailAndPassword(email,password)
        .then((feedback)=>
        {
//console.log(feedback)
db.collection("studentApplication").doc(auth.currentUser.uid).set({
                       
       application:data
   }).then(()=>{
   console.log("running")
    console.log("successfully submitted");
    res.send({message:auth.currentUser.uid,code:200});  
    //res.redirect("/app9")
                
   })
        }).catch ((error)=>{
          //  console.log(error)
            res.send(error)

        }) 


    
}
module.exports={finalSubmission};
