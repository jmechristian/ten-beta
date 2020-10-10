import firebase from 'firebase';

const firebaseConfig = {
  apiKey: 'AIzaSyDRfHchGnwR7LijSL_WYplmZhul6HO-vCA',
  authDomain: 'step-ten-beta.firebaseapp.com',
  databaseURL: 'https://step-ten-beta.firebaseio.com',
  projectId: 'step-ten-beta',
  storageBucket: 'step-ten-beta.appspot.com',
  messagingSenderId: '90416358328',
  appId: '1:90416358328:web:001f0f2710f64d6768254d',
};

const fire = firebase.initializeApp(firebaseConfig);

export default fire;
