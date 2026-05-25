// ─────────────────────────────────────────────
//  SETUP INSTRUCTIONS FOR YOUR OWN DEPLOYMENT
//
//  1. Copy this file and rename it to:  firebase-config.js
//  2. Go to console.firebase.google.com
//  3. Create a project → Add a Web app → copy the firebaseConfig values below
//  4. Go to Firestore Database → Rules → publish:
//       allow read, write: if true;
//  5. Deploy — sync works automatically across all your devices, no codes needed.
// ─────────────────────────────────────────────
const FIREBASE_CONFIG = {
  apiKey:            "YOUR_API_KEY",
  authDomain:        "YOUR_PROJECT_ID.firebaseapp.com",
  projectId:         "YOUR_PROJECT_ID",
  storageBucket:     "YOUR_PROJECT_ID.firebasestorage.app",
  messagingSenderId: "YOUR_SENDER_ID",
  appId:             "YOUR_APP_ID"
};
