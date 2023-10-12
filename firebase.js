//1:install firebase 
//2:import firebase
//connect to database(firebase)
const firebase=require("firebase");
const firebaseApp=firebase.initializeApp(
 {
    apiKey: "AIzaSyB0tDAbZkpLU87qZIQyLH8Bun_upJgzdac",
authDomain: "gns-enterprise-1364c.firebaseapp.com",
projectId: "gns-enterprise-1364c",
storageBucket: "gns-enterprise-1364c.appspot.com",
messagingSenderId: "651977652775",
appId: "1:651977652775:web:2ed271b4a534c92b0aac02",
measurementId: "G-V6F7KN3RKL"


 } 
)

//exporting firebaseApp,making it accessible anywhere in the system
module.exports=firebaseApp;
