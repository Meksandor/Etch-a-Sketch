// script.js
const container = document.querySelector('#container');
const slider = document.querySelector('#sliderBar');

function createGrid(rows, cols) {
    container.innerHTML = "";
    container.style.gridTemplateColumns = `repeat(${cols}, 1fr)`;
    container.style.gridTemplateRows = `repeat(${rows}, 1fr)`;

    for (let i = 0; i < rows * cols; i++) {
        const square = document.createElement("div");
        square.classList.add("square");
        container.appendChild(square);
    }
}


slider.addEventListener("input", () => {
    const value = slider.value;
    createGrid(value, value);
});


/*
function getSliderBarValue() {
    slider.addEventListener('input', function () {
        var sliderBarValue = slider.value;
        // console.log(sliderBarValue)
        return sliderBarValue;
    });
}
createGrid(getSliderBarValue(), getSliderBarValue())
*/

// Initial grid creation
createGrid(14, 14);
