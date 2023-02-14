import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"

export const cargarConfiguracion = () => {
    console.log("Cargar configracuion de FireBase ")
    // Initialize Firebase
    const app = initializeApp(firebaseConfig);
    global.dbCon=getFirestore(app);
}
// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyB50hOrQSeBFlPEAct6muC1sducKaC8iPg",
    authDomain: "fir-rn-955fc.firebaseapp.com",
    projectId: "fir-rn-955fc",
    storageBucket: "fir-rn-955fc.appspot.com",
    messagingSenderId: "99424606536",
    appId: "1:99424606536:web:e780eea12b6c13788cfb7d"
};

