// Import the functions you need from the SDKs you need
import { getAnalytics } from 'firebase/analytics';
import { initializeApp } from 'firebase/app';
import { AppFirebaseConfig } from '@/config';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = new AppFirebaseConfig();

// Initialize Firebase
const app = initializeApp(firebaseConfig.getFirebaseInitializeConfig);
const analytics = getAnalytics(app);
