const canvas = document.querySelector("canvas"); // Canvas
const scaleInput = document.querySelector(".scale-slider"); // Slider for scaling
const ctx = canvas.getContext("2d"); // Canvas context

const canvasWidth = Number(canvas.width); // Width of canvas
const canvasHeight = Number(canvas.height); // Height of canvas

// Clears canvas
function clearCanvas() {
    ctx.clearRect(0, 0, canvasWidth, canvasHeight);
}

// Draws vertical grid lines
function drawVerticalGridLines(gridWidth) {
    // Distance from y-axis
    let x = 0;

    // Draws y-axis
    ctx.lineWidth = 5;
    ctx.beginPath();
    ctx.moveTo(canvasWidth / 2, 0);
    ctx.lineTo(canvasWidth / 2, canvasHeight);
    ctx.stroke();

    // Changes line width back to 1
    ctx.lineWidth = 1;

    // Draws lines
    while (x < canvasWidth) {
        // Draws line to the right of the y-axis
        ctx.beginPath();
        ctx.moveTo(canvasWidth / 2 + x, 0);
        ctx.lineTo(canvasWidth / 2 + x, canvasHeight);
        ctx.stroke();

        // Draws line to the left of the y-axis
        ctx.beginPath();
        ctx.moveTo(canvasWidth / 2 - x, 0);
        ctx.lineTo(canvasWidth / 2 - x, canvasHeight);
        ctx.stroke();
        
        // Increases distance from y-axis
        x += gridWidth;
    }
}

// Draws horizontal grid lines
function drawHorizontalGridLines(gridHeight) {
    // Distance from x-axis
    let y = 0;

    // Draws x-axis
    ctx.lineWidth = 5;
    ctx.beginPath();
    ctx.moveTo(0, canvasHeight / 2);
    ctx.lineTo(canvasWidth, canvasHeight / 2);
    ctx.stroke();

    // Changes line width back to 1
    ctx.lineWidth = 1;

    // Draws lines
    while (y < canvasHeight) {
        // Draws line above the x-axis
        ctx.beginPath();
        ctx.moveTo(0, canvasHeight / 2 + y);
        ctx.lineTo(canvasWidth, canvasHeight / 2 + y);
        ctx.stroke();

        // Draws line below the x-axis
        ctx.beginPath();
        ctx.moveTo(0, canvasHeight / 2 - y);
        ctx.lineTo(canvasWidth, canvasHeight / 2 - y);
        ctx.stroke();

        // Increases distance from x-axis
        y += gridHeight;
    }
}

// Draws grids
function drawGrids(gridWidth, gridHeight) {
    clearCanvas();
    drawHorizontalGridLines(gridHeight);
    drawVerticalGridLines(gridWidth);
}