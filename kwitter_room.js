const firebaseConfig = {
  apiKey: "AIzaSyCAC_YZGE-gI7_6amCX_hPuEVcBMgodXjs",
  authDomain: "chat-app-cd17a.firebaseapp.com",
  databaseURL: "https://chat-app-cd17a.firebaseio.com",
  projectId: "chat-app-cd17a",
  storageBucket: "chat-app-cd17a.appspot.com",
  messagingSenderId: "363848160069",
  appId: "1:363848160069:web:25d8cd66ff5ce6add8242c",
  measurementId: "G-TP1JYKL45K"
};
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

function getData() {  firebase.database().ref("/").on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key;
       Room_names = childKey;
       console.log("Room Name - " + Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
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