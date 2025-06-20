function mode() {
    div = document.getElementById("box");  
   if (div.style.color === "white") {
       div.style.color = "black";
       div.style.backgroundColor = "white";
       document.getElementById("mode").innerText = "Dark Mode";
   } else {
       div.style.color = "white";
       div.style.backgroundColor = "black";
       document.getElementById("mode").innerText = "Light Mode";
   }
}

function final() {
   let uo = document.getElementById('uo').value; 
   let options = ['paper', 'scissors', 'rock'];  
   let ri = Math.floor(Math.random() * options.length);
   let co = options[ri];  
   document.getElementById('co').innerText = co; 
   if (uo === co) {
       document.getElementById('res').innerText = "Tie";
   } else if ((uo === "paper" && co === "rock") || 
              (uo === "rock" && co === "scissors") || 
              (uo === "scissors" && co === "paper")) {
       document.getElementById('res').innerText = "You Won!";
   } else {
       document.getElementById('res').innerText = "Computer Won!";
   }
}