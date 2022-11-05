import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: 'AIzaSyAciw2fWDwjzLLo1AyhMADkONNQAwen-3o',
	authDomain: 'tcl-49-smart-shopping-list.firebaseapp.com',
	projectId: 'tcl-49-smart-shopping-list',
	storageBucket: 'tcl-49-smart-shopping-list.appspot.com',
	messagingSenderId: '618274190288',
	appId: '1:618274190288:web:ff9c8967a750fdc24d3fd5',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
