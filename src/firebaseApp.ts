import Firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/database';

const firebaseApp = Firebase.initializeApp({
    projectId: process.env.VUE_APP_PROJECT_ID,
    databaseURL: process.env.VUE_APP_DB_URL,
    apiKey: process.env.VUE_APP_API_KEY,
    authDomain: process.env.VUE_APP_AUTH_DOMAIN,
});

firebaseApp.firestore().enablePersistence();

export const store = firebaseApp.firestore();
export const db = firebaseApp.database();
export default firebaseApp;
