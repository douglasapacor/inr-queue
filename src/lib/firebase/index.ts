import admin from "firebase-admin"
import firebase from "../../config/firebase"

admin.initializeApp({
  credential: admin.credential.cert(firebase as admin.ServiceAccount)
})

export default admin
