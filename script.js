const container = document.querySelector('#container');
const containerDivSquares = document.querySelectorAll('.containerDivSquare');
const slider = document.querySelector('#sliderBar');
const clearButton = document.querySelector('#clearButton')
const toggleButton = document.querySelector("#switch-shadow");
const ratioHeading = document.querySelector('#ratioHeading')

ratioHeading.textContent = ' ';

// Initial grid creation
createGridAndPaint(14, 14);
// At the beggining start painting wtih one color
oneColorPainting();

function hexColorGenerator() {
    let hexColor = `#${Math.random().toString(16).slice(2, 8).padEnd(6, 0)}`;
    return hexColor;
}
/* To Test hexColor
hexColorGenerator();
console.log("🚀 ~ file: test.js:5 ~ hexColor", hexColor);

pickAcolor = document.querySelector('#pickAcolor')
pickAcolor.style.color = hexColor;
*/

function oneColorPainting() {
    var containerDivSquares = document.querySelectorAll('.containerDivSquare');
    containerDivSquares.forEach(function (squareElement) {
        squareElement.addEventListener('mouseover', function () {
            console.log('yehha')
            squareElement.style.backgroundColor = selectedColorByColorPicker();
        });
    });
}
function rainbowPainting() {
    var containerDivSquares = document.querySelectorAll('.containerDivSquare');
    containerDivSquares.forEach(function (squareElement) {
        squareElement.addEventListener('mouseover', function () {
            console.log('yehha')
            squareElement.style.backgroundColor = hexColorGenerator();
        });
    });
}

function createGridAndPaint(rows, cols) {
    container.innerHTML = "";
    container.style.gridTemplateColumns = `repeat(${cols}, 1fr)`;
    container.style.gridTemplateRows = `repeat(${rows}, 1fr)`;

    for (let i = 0; i < rows * cols; i++) {
        const square = document.createElement("div");
        square.classList.add("containerDivSquare");
        container.appendChild(square);
    }

    if (toggleButton.checked) {
        return rainbowPainting();
    }
    else {
        return oneColorPainting();
    }
}

slider.addEventListener("input", () => {
    const value = slider.value;
    createGridAndPaint(value, value);
});
slider.addEventListener("input", () => {
    const sliderValue = slider.value;
    ratioHeading.textContent = ` ${sliderValue} X ${sliderValue} Grid Ratio`
});

clearButton.addEventListener('click', function () {
    const containerDivSquares = document.querySelectorAll('.containerDivSquare');
    containerDivSquares.forEach(function (squareElement) {
        squareElement.style.backgroundColor = "lightgray";
    })
});

toggleButton.addEventListener("change", function () {
    var body = document.body;
    var backgroundImageGif = new Image();
    backgroundImageGif.src = 'media/rainbow.gif';

    var optionTexts = document.querySelectorAll('.optionText')

    if (toggleButton.checked) {
        backgroundImageGif.onload = function () {
            // Set the background image using the style property
            body.style.backgroundImage = 'url(' + backgroundImageGif.src + ')';
            body.style.backgroundSize = 'cover'; // You can adjust this property as needed
            body.style.backgroundPosition = 'center';

            optionTexts.forEach(function (text) {
                text.style.color = 'white'
            });
        };

        rainbowPainting();
    }
    else {
        body.style.backgroundImage = 'none';
        body.style.backgroundColor = 'white';
        optionTexts.forEach(function (text) {
            text.style.color = 'black'
        });
        oneColorPainting();
    }
});

const colorBox = document.getElementById("color-box");
const colorPicker = document.getElementById("color-picker");

function selectedColorByColorPicker() {

    const colorPicker = document.getElementById("color-picker");
    const colorCode = document.getElementById("color-code");

    colorPicker.addEventListener("input", () => {
        const selectedColor = colorPicker.value;
        return selectedColor;
    });
}