import Firebase from 'firebase'

let config = {
  apiKey: 'AIzaSyApqj4UDinOb_aj0qpBp9xnqzx-C0Dv3oE',
  authDomain: 'nuxt-crud-10eb8.firebaseapp.com',
  databaseURL: 'https://nuxt-crud-10eb8.firebaseio.com',
  projectId: 'nuxt-crud-10eb8',
  storageBucket: 'nuxt-crud-10eb8.appspot.com',
  messagingSenderId: '619773088600',
  appId: '1:619773088600:web:da3f77eb2761a2ddb60b2d',
  measurementId: 'G-95SBB61REV'
}

let app = Firebase.initializeApp(config)

Firebase.analytics()

export const db = app.firestore()
