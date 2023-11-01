var sliderBar = document.querySelector('#sliderBar');
function getSliderBarValue() {
    sliderBar.addEventListener('input', function () {
        var sliderBarValue = sliderBar.value;
        console.log(sliderBarValue)
    });
}
console.log(getSliderBarValue()) //To test our function getSldierBarValue

function createGrid() {
    const container = document.getElementById("container");
    container.innerHTML = ""; // Clear previous grid

    const input = prompt("Enter grid size (e.g., '8x8'):");
    const containerSize = 500;


    if (getSliderBarValue()) {
        const [cols, rows] = [getSliderBarValue(), getSliderBarValue()]
        const maxSquareSize = Math.floor(500 / Math.max(cols, rows));
        //I need to fix here in order to create proper fitted squars inside of my container div

        container.style.gridTemplateColumns = `repeat(${cols}, 1fr)`;
        container.style.gridTemplateRows = `repeat(${rows}, 1fr)`;
        container.style.width = containerSize + "px";
        container.style.height = containerSize + "px";

        for (let i = 0; i < cols * rows; i++) {
            const square = document.createElement("div");
            square.className = "square";
            square.style.width = maxSquareSize + "px"; // Set square width
            square.style.height = maxSquareSize + "px"; // Set square height
            container.appendChild(square);
        }
    }
}

createGrid(); // Initialize the grid with default values
