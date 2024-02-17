import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: 'AIzaSyDB5vAkkW9mclhJT3FLacD_wTaUgRHGl2A',
	authDomain: 'tcl-shoppr.firebaseapp.com',
	projectId: 'tcl-shoppr',
	storageBucket: 'tcl-shoppr.appspot.com',
	messagingSenderId: '1051162275625',
	appId: '1:1051162275625:web:75aba3c32d538a410bd138',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
