let canvas = document.getElementById("myCanvas");
let context = canvas.getContext("2d");
// context.fillStyle = "orange";
// context.fillRect(5, 10, 200, 75);

// context.fillStroke = "green";
// context.lineWidth = 6;
// context.strokeRect(120, 30, 100, 40);

// context.beginPath();
// context.moveTo(50, 90);
// context.lineTo(100, 10);
// context.lineTo(150, 90);
// context.closePath();
// context.fillStyle = "yellow";
// context.fill();
// context.strokeStyle = "red";
// context.lineWidth = 13;
// context.stroke();

// context.arc(50, 50, 30, 0, Math.PI * 2);
// context.fillStyle = "blue";
// context.fill();


// context.arc(50, 50, 25, 3 * Math.PI / 2, Math.PI / 2);
// context.fillStyle = "red";
// context.fill();


context.arc(50, 50, 60, 3*Math.PI/2, Math.PI/2, true);
context.strokeStyle = "brown";
context.lineWidth = 3;
context.stroke();