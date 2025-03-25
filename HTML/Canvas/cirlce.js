let canvas = document.getElementById("myCanvas");
let context = canvas.getContext("2d"); // Corrected the context type

context.arc(50, 50, 30, 0, Math.PI * 2);
context.fillStyle = "Red";
context.fill();
