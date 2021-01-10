
var firebaseConfig = {
      apiKey: "AIzaSyBLEGcirR4xyJQYLDlj303I2SbFHIOg3qE",
      authDomain: "project93-9f0e2.firebaseapp.com",
      projectId: "project93-9f0e2",
      storageBucket: "project93-9f0e2.appspot.com",
      messagingSenderId: "29629911868",
      appId: "1:29629911868:web:ee6cd3b05cf1378d6b0439"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
 
  

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
