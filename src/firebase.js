import firebase from 'firebase'
import 'firebase/firestore'
const config = {

};
const firestore = firebase.initializeApp(config);
const db = firebase.firestore();
export default db;