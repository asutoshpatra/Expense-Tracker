// ─────────────────────────────────────────────────────────────────
//  OPTIONAL — only needed if you want sync across devices.
//  ExpendIQ works completely without this file.
//
//  You do NOT have to use this file at all. The easier route is to paste
//  your config straight into the app: Settings → Cloud sync → Firebase
//  config. That keeps your keys out of the repository entirely and is the
//  only way that works on a phone.
//
//  If you would rather ship a config file:
//    1. Copy this file and rename it to:  firebase-config.js
//    2. Go to console.firebase.google.com → your project → ⚙ Project
//       Settings → Your apps → Web app, and copy the firebaseConfig values
//    3. Paste them below, replacing every "YOUR_..." placeholder
//
//  firebase-config.js is gitignored, so your real values stay out of Git.
//  That also means a Git-based deploy (GitHub Pages, GitHub-connected
//  Netlify) will not have the file — those devices ask you to paste the
//  config instead. See README.md → "Turn on sync".
//
//  ⚠ Before you put real data in, publish the Firestore security rules in
//  firestore.rules. Do NOT use `allow read, write: if true`. A Firebase web
//  API key is public by design — it names your project and authorises
//  nothing, so the rules are the only thing standing between your records
//  and anyone who opens the page and reads the source.
// ─────────────────────────────────────────────────────────────────
const FIREBASE_CONFIG = {
  apiKey:            "YOUR_API_KEY",
  authDomain:        "YOUR_PROJECT_ID.firebaseapp.com",
  projectId:         "YOUR_PROJECT_ID",
  storageBucket:     "YOUR_PROJECT_ID.firebasestorage.app",
  messagingSenderId: "YOUR_SENDER_ID",
  appId:             "YOUR_APP_ID"
};
