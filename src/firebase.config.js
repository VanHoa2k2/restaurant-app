import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyABefjvvP3CGyUEB1PcwTfYEU0kzJ7XdxM",
  authDomain: "restaurantapp-105ef.firebaseapp.com",
  databaseURL: "https://restaurantapp-105ef-default-rtdb.firebaseio.com",
  projectId: "restaurantapp-105ef",
  storageBucket: "restaurantapp-105ef.appspot.com",
  messagingSenderId: "119053032178",
  appId: "1:119053032178:web:783573fb4b7399ac410e6b",
};

const app = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig);

const firestore = getFirestore(app);
const storage = getStorage(app);

export { app, firestore, storage };
