
//ADD YOUR FIREBASE LINKS HERE
// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyDzY1Od0R7MQLzypv_s3YCVAYIWsE8RIso",
  authDomain: "projecttest-3fcc8.firebaseapp.com",
  databaseURL: "https://projecttest-3fcc8-default-rtdb.firebaseio.com",
  projectId: "projecttest-3fcc8",
  storageBucket: "projecttest-3fcc8.appspot.com",
  messagingSenderId: "1025495723222",
  appId: "1:1025495723222:web:9f0e309e6de17c675ded77",
  measurementId: "G-L0PCWCV028"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
    
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();

function addRoom()
{
  room_names = document.getElementById("room_name").value;

  firebase.database().ref("/").child(room_name).update({
    purpose : "adding room name"
  });

    localStorage.setItem("room_name", room_name);

    window.location = "Kwitter_page.html";
}