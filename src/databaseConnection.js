import firebase from "firebase"; 

const firebaseConfig = {
    apiKey: "AIzaSyB-ZOFGWh1RypwbK1I_Tz6Pw0S073k16zU",
    authDomain: "schedule-buddy-fc6c5.firebaseapp.com",
    databaseURL: "https://schedule-buddy-fc6c5.firebaseio.com",
    projectId: "schedule-buddy-fc6c5",
    storageBucket: "schedule-buddy-fc6c5.appspot.com",
    messagingSenderId: "701626130578",
    appId: "1:701626130578:web:c68e333703087b6d1d064b"
};

firebase.initializeApp(firebaseConfig); 
const db = firebase.firestore();

export default db; 