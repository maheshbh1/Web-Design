let canvas = document.getElementById("myCanvas");
let context = canvas.getContext("2d"); // Corrected the context type

context.shadowBlur = 10;
context.shadowColor = "black";
context.shadowOffsetX = 3;
context.shadowOffsetY = 3;

// Arkansas and Colorado obesity rates from 2003-2014
const arkansasRates = [25.2, 25.0, 26.4, 27.0, 28.1, 28.6, 30.1, 30.6, 30.9, 34.5, 34.6, 35.9];
const coloradoRates = [16.0, 16.4, 16.9, 17.6, 18.4, 18.9, 19.1, 19.8, 20.7, 20.5, 21.3, 21.3];

// left edge of bar
let leftEdge = 10;

// width of bar
const barWidth = 20;

// Draw all the bars
for (let i = 0; i < arkansasRates.length; i++) {
    // creating a color that changes based on i
    context.fillStyle = "rgb(50, 100, " + (150 + i * 10) + ")";

    // Determining the line height
    let barHeight = arkansasRates[i] * 5;

    // Drawing the bar
    context.fillRect(leftEdge, canvas.height - barHeight, barWidth, barHeight);

    // Clear shadow
    context.shadowColor = "transparent";

    // Draw Diamond
    context.beginPath();
    let middle = canvas.height - coloradoRates[i] * 5;
    context.moveTo(leftEdge + barWidth / 2, middle - 10);
    context.lineTo(leftEdge, middle);
    context.lineTo(leftEdge + barWidth / 2, middle + 10);
    context.lineTo(leftEdge + barWidth, middle);
    context.closePath();
    context.fillStyle = "rgb(" + (150 + i * 10) + ", 50, " + (200 - i * 10) + " )";
    context.fill();

    // Reset shadow
    context.shadowColor = "black";

    // Move next bar to the right
    leftEdge += barWidth + 12;
}
