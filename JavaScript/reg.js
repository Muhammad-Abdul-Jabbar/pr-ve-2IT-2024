
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-app.js";
  import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-auth.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyBUxSe6guEi8HsQ1mTmx5Cka41R6LXVUKw",
    authDomain: "tentamen-pr.firebaseapp.com",
    projectId: "tentamen-pr",
    storageBucket: "tentamen-pr.appspot.com",
    messagingSenderId: "506204527398",
    appId: "1:506204527398:web:cbefb3fd40aad41bcfffe7"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);

const auth = getAuth()

var firstname = document.getElementById("firstname")
var lastname = document.getElementById("lastname")
var email = document.getElementById("Email")
var password = document.getElementById("password")

window.signup = function(e){
   e.preventDefault();
   var obj = {
       firstname:firstname.value,
       lastname:lastname.value,
       email:email.value,
       password:password.value,
   }
   createUserWithEmailAndPassword(auth, obj.email,obj.password)
   .then(function(success){
       window.location.href = "tos.html";
   })
   .catch(function(err){
       alert("error" + err)
   }) 
   console.log(obj)
}; 


