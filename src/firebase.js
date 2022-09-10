// 必要な関数を import
import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCzEjNuF39JqQt2X5wYBxru2TsLCwoaA6g",
  authDomain: "my-teach-89179.firebaseapp.com",
  projectId: "my-teach-89179",
  storageBucket: "my-teach-89179.appspot.com",
  messagingSenderId: "484415036132",
  appId: "1:484415036132:web:1f86ea22ad226f40cb2af1",
  measurementId: "G-SDR3F92LTD",
}

// Firebaseアプリオブジェクトを初期化
const app = initializeApp(firebaseConfig)
// Firestoreを読み込み、db(databaseの略)として export
export const db = getFirestore(app)
