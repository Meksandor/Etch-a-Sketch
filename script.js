const container = document.querySelector('#container');
const containerDivSquares = document.querySelectorAll('.containerDivSquare');
const slider = document.querySelector('#sliderBar');
const clearButton = document.querySelector('#clearButton')
const toggleButton = document.querySelector("#switch-shadow");

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

clearButton.addEventListener('click', function () {
    const containerDivSquares = document.querySelectorAll('.containerDivSquare');
    containerDivSquares.forEach(function (squareElement) {
        squareElement.style.backgroundColor = "lightgray";
    })
});

toggleButton.addEventListener("change", function () {
    var body = document.body;
    var backgroundImageGif = new Image();
    backgroundImageGif.src = 'media/undertale.gif';

    var optionTexts = document.querySelectorAll('.optionText')

    if (toggleButton.checked) {
        backgroundImageGif.onload = function () {
            // Set the background image using the style property
            body.style.backgroundImage = 'url(' + backgroundImageGif.src + ')';
            body.style.backgroundSize = 'cover'; // You can adjust this property as needed

            optionTexts.forEach(function (text) {
                text.style.color = 'white'
            });

            // Optionally, set other background properties like background repeat, position, etc.
            // body.style.backgroundRepeat = 'no-repeat';
            // body.style.backgroundPosition = 'center';
            // BackgroundPosition to center, etc. as needed
        };

        function rainbowHoverContainerSquares() {

        }
    }
    else {
        body.style.backgroundImage = 'none';
        body.style.backgroundColor = 'white';
        optionTexts.forEach(function (text) {
            text.style.color = 'black'
        });
    }
});

