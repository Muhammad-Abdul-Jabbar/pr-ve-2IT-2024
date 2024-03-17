  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-app.js";
  import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-auth.js";
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
 
var email = document.getElementById("email");
var password = document.getElementById("password");
window.login= function(e) {
  e.preventDefault();
  var obj = {
    email: email.value,
    password: password.value,
  };

  signInWithEmailAndPassword(auth, obj.email, obj.password)
    .then(function (success) { 
      var aaaa =  (success.user.uid);
      localStorage.setItem("uid",aaaa)
      console.log(aaaa)
      window.location.href = "nettbutikk.html";
     // localStorage.setItem(success,user,uid)
      
    })
    .catch(function (err) {
      alert("login error"+err);
    });

  console.log(obj);
}