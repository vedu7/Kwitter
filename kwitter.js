var audio = new Audio('Button_click.mp3');

function addUser() {

  user_name = document.getElementById("user_name2").value;

  localStorage.setItem("user_name", user_name);
  
    window.location = "kwitter_room.html";
    audio.play();
   
}
