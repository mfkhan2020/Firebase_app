import { initializeApp } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-auth.js";


// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDct3wQuCXqJvM0_DI6pkqwBqefqVsxAOg",
    authDomain: "loginsignupapp-496d0.firebaseapp.com",
    projectId: "loginsignupapp-496d0",
    storageBucket: "loginsignupapp-496d0.firebasestorage.app",
    messagingSenderId: "259977373016",
    appId: "1:259977373016:web:3ccf6a5ae51d362890f12d"
  };
  
  // Initialize Firebase
const app = initializeApp(firebaseConfig);

let login_page_btn = document.getElementById("login-page-btn");
let signup_page_btn = document.getElementById("signup-page-btn");
let login_form = document.getElementById("login-form");
let signup_form = document.getElementById("signup-form");

login_form.addEventListener("submit", (event) => {
    event.preventDefault()
    let email = document.getElementById("login-user-id").value;
    let password = document.getElementById("login-user-pwd").value;

    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        window.location.href = "home.html"
    })
    .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Invalid UserName or Password!",
        });
    });
});

signup_form.addEventListener("submit", (event) => {
    event.preventDefault();
    let email = document.getElementById("signup-user-id").value;
    let password = document.getElementById("signup-user-pwd").value;

    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
        // Signed up 
        const user = userCredential.user;
        window.location.href = "home.html";
        Swal.fire({
            title: "Succesful...",
            icon: "success",
            text: "Account Created Sucessfully...",
        });
    })
    .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
    });
})

// Toggler Start
signup_page_btn.addEventListener("click", () => {
    signup_form.style.display = "block"
    login_form.style.display = "none"
    login_page_btn.style.backgroundColor = "#8AA6A3";
    login_page_btn.style.color = "#10403B";
    signup_page_btn.style.backgroundColor = "#10403B";
    signup_page_btn.style.color = "#8AA6A3";
});

login_page_btn.addEventListener("click", () => {
    signup_form.style.display = "none";
    login_form.style.display = "block";
    signup_page_btn.style.backgroundColor = "#8AA6A3";
    signup_page_btn.style.color = "#10403B";
    login_page_btn.style.backgroundColor = "#10403B";
    login_page_btn.style.color = "#8AA6A3";
});
// Toggler End
