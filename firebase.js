// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from 'firebase/app'
import { getFireStore } from 'firebase/firestore'
import { getStorage } from 'firebase/storage'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyAYuX00IgouW3GxChvB-zw1bV8UZQbLLbs',
  authDomain: 'instaram-clone-9f97d.firebaseapp.com',
  projectId: 'instaram-clone-9f97d',
  storageBucket: 'instaram-clone-9f97d.appspot.com',
  messagingSenderId: '55214204102',
  appId: '1:55214204102:web:658bd34858b7dc8ca7a3c7',
}

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp()
const db = getFireStore()
const storage = getStorage()

export { app, db, storage }
