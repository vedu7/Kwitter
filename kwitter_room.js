
//ADD YOUR FIREBASE LINKS
var firebaseConfig = {
    apiKey: "AIzaSyDSpo_8adwG-uHZ5WAQDtfRuqaidYt4XjE",
    authDomain: "emjoy-5f152.firebaseapp.com",
    databaseURL: "https://emjoy-5f152-default-rtdb.firebaseio.com",
    projectId: "emjoy-5f152",
    storageBucket: "emjoy-5f152.appspot.com",
    messagingSenderId: "373076195162",
    appId: "1:373076195162:web:20b2330fc7520c9f572563",
    measurementId: "G-27TB6MTNSK"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  user_name = localStorage.getItem("user_name");

document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";

function addRoom()
{
  room_name = document.getElementById("room_name").value;

  firebase.database().ref("/").child(room_name).update({
    purpose : "adding room name"
  });

    localStorage.setItem("room_name", room_name);
    
    window.location = "kwitter_page.html";
}

function getData() {
    firebase.database().ref("/").on('value', function(snapshot) 
{ 
  document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) 
{ 
  childKey  = childSnapshot.key;
       Room_names = childKey;
       console.log("Room Name - " + Room_names);
      row = "<div class='room_name' id="    +Room_names+  " onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
      document.getElementById("output").innerHTML += row;
    });
  });

}

getData();

function redirectToRoomName(name)
{
  console.log(name);
  localStorage.setItem("room_name", name);
    window.location = "kwitter_page.html";
}

function logout() {
localStorage.removeItem("user_name");
localStorage.removeItem("room_name");
    window.location = "index.html";
}
