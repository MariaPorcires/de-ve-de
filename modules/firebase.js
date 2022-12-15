 // Här har jag lagt koden för firebasekonfigurationen. 
 
 
 // Import the functions you need from the SDKs you need
 import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js";
 import { getFirestore, collection, addDoc, getDocs, doc, deleteDoc, query, where } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-firestore.js";
 // TODO: Add SDKs for Firebase products that you want to use
 // https://firebase.google.com/docs/web/setup#available-libraries

 // Your web app's Firebase configuration
 const firebaseConfig = {
   apiKey: "AIzaSyBy__UYPtYjLPI867Rb5dir03SB9KmTAL4",
   authDomain: "devede-27205.firebaseapp.com",
   projectId: "devede-27205",
   storageBucket: "devede-27205.appspot.com",
   messagingSenderId: "905513568571",
   appId: "1:905513568571:web:77c55b1e956f7e45db4f1e"
 };

 // Initialize Firebase
 const app = initializeApp(firebaseConfig);
 const db = getFirestore(app);

 export { db, collection, addDoc, getDocs, doc, query, deleteDoc, where }