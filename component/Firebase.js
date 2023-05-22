import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyBuVyr4uj_0t-zKZXvnyA0-mgnF8GmFq7A",
    authDomain: "covid19-93267.firebaseapp.com",
    databaseURL: "https://covid19-93267-default-rtdb.firebaseio.com",
    projectId: "covid19-93267",
    storageBucket: "covid19-93267.appspot.com",
    messagingSenderId: "709726013376",
    appId: "1:709726013376:web:04749c92c3e36191ccea25",
    measurementId: "G-R75LZ5H9JJ"
}
const app = initializeApp(firebaseConfig);
export const db = app.database();
