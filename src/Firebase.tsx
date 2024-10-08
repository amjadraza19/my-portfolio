import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCKh7gbgFiBVH84kC00oQkQmVG1h2u4D5o",
  authDomain: "portfolio-40268.firebaseapp.com",
  projectId: "portfolio-40268",
  storageBucket: "portfolio-40268.appspot.com",
  messagingSenderId: "935920290393",
  appId: "1:935920290393:web:eaab9ea015d0d55c6d3f48",
  measurementId: "G-8K9059NLGN"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);