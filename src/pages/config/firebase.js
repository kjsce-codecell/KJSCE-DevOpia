// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getAnalytics } from 'firebase/analytics'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyBHWnZhWYpDuESerru7pGWoTSxGFxdUkYY',
  authDomain: 'devopia-7bc6f.firebaseapp.com',
  projectId: 'devopia-7bc6f',
  storageBucket: 'devopia-7bc6f.appspot.com',
  messagingSenderId: '744661316049',
  appId: '1:744661316049:web:8b05c3894cd3f85cdf30f0',
  measurementId: 'G-LZ3Q3MDPLG',
}

const app = initializeApp(firebaseConfig)
const analytics = getAnalytics(app)

export { analytics }
