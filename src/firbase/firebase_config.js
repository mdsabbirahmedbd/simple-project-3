// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDvcf_dg_-HrRbBJlAIQVRtknR6M54M2f4",
  authDomain: "assignment-setup.firebaseapp.com",
  projectId: "assignment-setup",
  storageBucket: "assignment-setup.appspot.com",
  messagingSenderId: "695639289609",
  appId: "1:695639289609:web:4edde4744f4df6b08a2dd8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app