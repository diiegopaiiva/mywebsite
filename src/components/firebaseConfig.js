import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
    apiKey: "AIzaSyBrWpLX-fnNGAPTUXgCzWRpWHzgOcvQpg8",
    authDomain: "reciclapp-2939c.firebaseapp.com",
    projectId: "reciclapp-2939c",
    storageBucket: "reciclapp-2939c.appspot.com",
    messagingSenderId: "193667809491",
    appId: "1:193667809491:web:f66113a372c9af3fc7d426",
    measurementId: "G-HP3HH3BN8W"
};

// Inicialize o Firebase
const app = initializeApp(firebaseConfig);

// Obtenha a instância de autenticação
const auth = getAuth(app);

// Obtenha a instância do Firestore
const firestore = getFirestore(app);

const analytics = getAnalytics(app);

// Exporte as instâncias de autenticação e Firestore
export { auth, firestore, firebaseConfig, analytics };
