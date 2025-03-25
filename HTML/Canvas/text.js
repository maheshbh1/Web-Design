let canvas = document.getElementById("myCanvas");
let context = canvas.getContext("2d");

// fill text
context.font = "italic 24pt courier New";
context.fillStyle = "red";
context.fillText("HTML5 Canvas", 0, 30);

// stroke text
context.font = "bold 24pt Arial";
context.textAlign = "center";
context.strokeStyle = "navy";
context.lineWidth = 2;
context.strokeText("HTML5 Canvas", canvas.width / 2, 70);


