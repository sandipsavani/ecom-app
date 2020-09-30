import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';


//Firebase configuration
const config = {
    apiKey: "AIzaSyCSRXXWi2J56-p-Q6zw0FePN1PCmx2WvII",
    authDomain: "ecom-react-app.firebaseapp.com",
    databaseURL: "https://ecom-react-app.firebaseio.com",
    projectId: "ecom-react-app",
    storageBucket: "ecom-react-app.appspot.com",
    messagingSenderId: "483151745890",
    appId: "1:483151745890:web:eb38b519c3ed2ca861d23b",
    measurementId: "G-ZTWE8TCPPZ"
  };

// Store data in database
export const createUserProfileDocument = async (userAuth, additionalData) => {
    if(!userAuth) return;
    const userRef = firestore.doc (`users/${userAuth.uid}`);
    const snapShot = await userRef.get();
    if(!snapShot.exists){
        const {displayName, email} = userAuth;
        const createdAt = new Date();
       try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            })
        } catch (error) {
            console.log('error: ', error.message);
        }
    }
    return userRef;
}

//Initilize Firebase
firebase.initializeApp(config);

//Exporting sorage and authonitation
export const auth = firebase.auth();
export const firestore = firebase.firestore();


//Authonticate google 

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
