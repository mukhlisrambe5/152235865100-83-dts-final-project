// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyALJv6o0ifQ2DIYM4ugDZ5AHfCmeLv1mTw",
  authDomain: "dts-final-project-dd376.firebaseapp.com",
  projectId: "dts-final-project-dd376",
  storageBucket: "dts-final-project-dd376.appspot.com",
  messagingSenderId: "14314684606",
  appId: "1:14314684606:web:01748c9f63c27fa5a39eef"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

const registerWithEmailAndPassword = async(email, password)=>{
  try{
    const GetUser = await createUserWithEmailAndPassword (auth, email, password);
  } catch(err){
    console.log("Error code: ", err.code);
    console.log("Error message: ", err.message);
  }
};

const loginWithEmailAndPassword =  async(email, password)=>{
  try{
    const loginUser= await signInWithEmailAndPassword(auth, email, password);
  }catch(err){
    console.log("Error code: ", err.code);
    console.log("Error message: ", err.message);
  }
}

// signInWithEmailAndPassword(auth, email, password)
//   .then((userCredential) => {
//     // Signed in 
//     const user = userCredential.user;
//     // ...
//   })
//   .catch((error) => {
//     const errorCode = error.code;
//     const errorMessage = error.message;
//   });

const logout =  async()=>{
  try{
    await signOut(auth)
  }catch(err){
    console.log("Error code: ", err.code);
    console.log("Error message: ", err.message);
  }
}

export {auth, registerWithEmailAndPassword, loginWithEmailAndPassword, logout}  