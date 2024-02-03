const { initializeApp, cert } = require('firebase-admin/app');
const { getFirestore } = require('firebase-admin/firestore');
const { getAuth } = require('firebase-admin/auth');

// Initialize Firebase
const app = initializeApp({
    credential: cert('algo-to-the-future-key.json')
});
// Initialize database & auth
const auth = getAuth(app);
const db = getFirestore(app);
const Firebase = { db, auth };

module.exports = Firebase;