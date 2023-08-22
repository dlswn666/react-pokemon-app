// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: 'AIzaSyDwiihvgQx3DjwdIQNSxUj5qomr5ZzMQbQ',
    authDomain: 'react-poke-mon.firebaseapp.com',
    projectId: 'react-poke-mon',
    storageBucket: 'react-poke-mon.appspot.com',
    messagingSenderId: '502429981391',
    appId: '1:502429981391:web:4941d0d74f7baabeda35ba',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;
