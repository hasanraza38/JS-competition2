 import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-app.js";
 
 import { getAuth } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-auth.js";

 import { getFirestore } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-firestore.js";


 const firebaseConfig = {
   apiKey: "AIzaSyACwlqTQVE5ArKP1_pjrADtW_Ps6RlDsMw",
   authDomain: "expense-management-app1.firebaseapp.com",
   projectId: "expense-management-app1",
   storageBucket: "expense-management-app1.appspot.com",
   messagingSenderId: "697896152104",
   appId: "1:697896152104:web:959c67339b61965f54191d",
   measurementId: "G-1023ZM5Z7R"
 };

 // Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
