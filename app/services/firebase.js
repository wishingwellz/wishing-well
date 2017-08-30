import * as Firebase from "firebase"
import { apiKey, authDomain, databaseURL} from '../config'

const firebaseConfig = {
  apiKey,
  authDomain,
  databaseURL
};

export const firebaseRef = Firebase.initializeApp(firebaseConfig);
