import firebase from 'firebase/app';

export let app = firebase.default.initializeApp({
      apiKey: "AIzaSyDsTrjUL9kRug7fw_sNU31cy7JYzJAUvmQ",
      databaseURL: "https://uvalib-api-occupancy.firebaseio.com",
      projectId: "uvalib-api",
      appId: "1:602799472461:web:d56a8ec950c9c85edc8104"
    });