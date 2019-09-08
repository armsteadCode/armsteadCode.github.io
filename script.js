import * as firebaseSDK from './firebase-app.js';
//The core Firebase JS SDK is always required and must be listed first
//<script src="https://www.gstatic.com/firebasejs/6.6.0/firebase-app.js"></script>

//TODO: Add SDKs for Firebase products that you want to use
//  https://firebase.google.com/docs/web/setup#config-web-app=


// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyDX_Dvla3uSLigwUqc0FP1qoTqjZbKjC-c",
  authDomain: "armsteadcode.firebaseapp.com",
  databaseURL: "https://armsteadcode.firebaseio.com",
  projectId: "armsteadcode",
  storageBucket: "",
  messagingSenderId: "70974823018",
  appId: "1:70974823018:web:31ac291edd1c5f6ecc8813"
};
// Initialize Firebase
firebaseSDK.firebase.initializeApp(firebaseConfig);
