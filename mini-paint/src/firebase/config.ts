import firebase from 'firebase'
import 'firebase/firestore'
import 'firebase/auth'

firebase.initializeApp(
{
    apiKey: "AIzaSyDeSwPW2TUvCVg_Llinp7_5U0-q76WsPGE",//process.env.REACT_APP_API_KEY,
    authDomain: "mini-paint-9303f.firebaseapp.com",//process.env.REACT_APP_AUTH_DOMAIN,
    databaseURL: "https://mini-paint-9303f-default-rtdb.firebaseio.com",//process.env.REACT_APP_DATABASE_URL,
    projectId: "mini-paint-9303f",//process.env.REACT_APP_PROJECT_ID,
    storageBucket: "mini-paint-9303f.appspot.com",//process.env.REACT_APP_STORAGE_BUCKET,
    messagingSenderId: "1010373737321",//process.env.REACT_APP_MESSAGING_SENDER_ID,
    appId: "1:1010373737321:web:30512b1ffdb77716419bf8",//process.env.REACT_APP_APP_ID
}
);

export default firebase;