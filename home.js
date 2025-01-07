import { initializeApp } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-app.js";
import { getAuth, signOut, onAuthStateChanged} from "https://www.gstatic.com/firebasejs/11.1.0/firebase-auth.js";


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
const auth = getAuth();

let signout_btn = document.getElementById("signout-btn");
let login_user_navbar = document.getElementById("login_user");

signout_btn.addEventListener("click", () => {
    signOut(auth).then(() => {
    // Sign-out successful.
    window.location.href = "index.html";
    }).catch((error) => {
    // An error happened.
    });
});

// Use onAuthStateChanged to track the user's authentication state
onAuthStateChanged(auth, (user) => {
    if (user) {
        console.log("User is logged in:", user.email);
        login_user_navbar.innerText = user.email;
        
        // Optionally, display the user info or update UI to reflect logged-in state
    } else {
        console.log("No user is logged in.");
        // Optionally, update UI to show logged-out state
    }
});