import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';


let firebaseConfig = {
    apiKey: "AIzaSyBB2kOlkfMQqbS3aeDG3Scq-kQQpeIpv0I",
    authDomain: "meu-dinheiro-74d0a.firebaseapp.com",
    databaseURL: "https://meu-dinheiro-74d0a.firebaseio.com",
    projectId: "meu-dinheiro-74d0a",
    storageBucket: "meu-dinheiro-74d0a.appspot.com",
    messagingSenderId: "351652841705",
    appId: "1:351652841705:web:f30331067cd4983889c878",
    measurementId: "G-L5GE0HCL7Y"
  };
  firebase.initializeApp(firebaseConfig);

export default firebase