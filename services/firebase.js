import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyAWXFmleGHeYeg8khl2gxLKWnlwhvjYTTI",
  authDomain: "fir-authapp-f8c6c.firebaseapp.com",
  projectId: "fir-authapp-f8c6c",
  storageBucket: "fir-authapp-f8c6c.firebasestorage.app",
  messagingSenderId: "204962506004",
  appId: "1:204962506004:web:64245b43675d6b4661ce01",
  measurementId: "G-VQR2V584HL"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
