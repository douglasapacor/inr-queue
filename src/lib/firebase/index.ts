import admin from "firebase-admin"
import serviceAccount from "../../config/firebase"

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount as admin.ServiceAccount)
})

export default admin
