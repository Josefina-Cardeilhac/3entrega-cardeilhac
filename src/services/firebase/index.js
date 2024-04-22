
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'


const firebaseConfig = {
  apiKey: "AIzaSyAB5VI0NNEzF6Rt9xMPjIigTv-ipneFow0",
  authDomain: "reactentrega.firebaseapp.com",
  projectId: "reactentrega",
  storageBucket: "reactentrega.appspot.com",
  messagingSenderId: "608310730103",
  appId: "1:608310730103:web:cdb4f3ec34f0f0d78a1572"
};


const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
