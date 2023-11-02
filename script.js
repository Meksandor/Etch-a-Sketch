// script.js
const container = document.querySelector('#container');
const slider = document.querySelector('#sliderBar');

function createGridAndPaint(rows, cols) {
    container.innerHTML = "";
    container.style.gridTemplateColumns = `repeat(${cols}, 1fr)`;
    container.style.gridTemplateRows = `repeat(${rows}, 1fr)`;

    for (let i = 0; i < rows * cols; i++) {
        const square = document.createElement("div");
        square.classList.add("containerDivSquare");
        container.appendChild(square);
    }

    var containerDivSquares = document.querySelectorAll('.containerDivSquare');
    containerDivSquares.forEach(function (squareElement) {
        squareElement.addEventListener('mouseover', function () {
            console.log('yehha')
            squareElement.style.backgroundColor = "orange";
        });
    });
}

slider.addEventListener("input", () => {
    const value = slider.value;
    createGridAndPaint(value, value);
});
// Initial grid creation
createGridAndPaint(14, 14);
