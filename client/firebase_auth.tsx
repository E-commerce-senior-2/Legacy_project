import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
import { getAnalytics } from "firebase/analytics";
import { getStorage} from "firebase/storage"


const apiKey = process.env.NEXT_PUBLIC_FIREBASE_API_KEY;
const authDomain = process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN;
const projectId = process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID;
const storageBucket = process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET;
const messagingSenderId = process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID;
const appId = process.env.NEXT_PUBLIC_FIREBASE_APP_ID;


const firebaseConfig = {
    apiKey: apiKey,
    authDomain: authDomain,
    projectId: projectId,
    storageBucket: storageBucket,
    messagingSenderId: messagingSenderId,
    appId: appId
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  export const auth = getAuth(app)
  const analytics = getAnalytics(app);
  export const storage = getStorage(app)
  export default app