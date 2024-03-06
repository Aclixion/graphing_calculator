const canvas = document.querySelector("canvas"); // Canvas
const scaleInput = document.querySelector(".scale-slider"); // Slider for scaling
const ctx = canvas.getContext("2d"); // Canvas context

const width = Number(canvas.width); // Width of canvas
const height = Number(canvas.height); // Height of canvas

// Draws vertical grid lines
function drawVerticalGridLines(gridWidth) {
    // Distance from y-axis
    let x = 0;

    // Draws lines
    while (x < width) {
        // Draws line to the right of the y-axis
        ctx.beginPath();
        ctx.moveTo(width / 2 + x, 0);
        ctx.lineTo(width / 2 + x, height);
        ctx.stroke();

        // Draws line to the left of the y-axis
        ctx.beginPath();
        ctx.moveTo(width / 2 - x, 0);
        ctx.lineTo(width / 2 - x, height);
        ctx.stroke();
        
        // Increases distance from y-axis
        x += gridWidth;
    }
}

// Draws horizontal grid lines
function drawHorizontalGridLines(gridHeight) {
    // Distance from x-axis
    let y = 0;

    // Draws lines
    while (y < height) {
        // Draws line above the x-axis
        ctx.beginPath();
        ctx.moveTo(0, height / 2 + y);
        ctx.lineTo(width, height / 2 + y);
        ctx.stroke();

        // Draws line below the x-axis
        ctx.beginPath();
        ctx.moveTo(0, height / 2 - y);
        ctx.lineTo(width, height / 2 - y);
        ctx.stroke();

        // Increases distance from x-axis
        y += gridHeight;
    }
}