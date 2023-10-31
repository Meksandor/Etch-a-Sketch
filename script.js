let divsContainer = document.querySelector('#container');
var ratioButtons = document.querySelector('.ratioButton')

/*
ratioButtons.forEach(function (button) {
    button.addEventListener('click', function (event) {
        var targetRatioButton = event.target;
        switch (targetRatioButton.id) {
            case 'ratio16':
                return i = 16;

            case 'ratio25':
                return i = 25;

            case 'ratio36':
                return i = 36;

            case 'ratio49':
                return i = 49;

            case 'ratio64':
                return i = 64;

            case 'ratio81':
                return i = 81;

            case 'ratio100':
                return i = 100;
        }
    })
})
*/

var button16 = document.getElementById("ratio16");
var button25 = document.getElementById("ratio25");
var button36 = document.getElementById("ratio36");
var button49 = document.getElementById("ratio49");
var button64 = document.getElementById("ratio64");
var button81 = document.getElementById("ratio81");
var button100 = document.getElementById("ratio100");

function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}

button16.addEventListener("click", function () {
    removeAllChildNodes(divsContainer);

    for (var i = 0; i < 16; i++) {
        var div = document.createElement("div");
        div.id = "Div " + (i + 1);
        divsContainer.appendChild(div);
    }
    const gridBoxes = document.querySelectorAll('#container > div');
    gridBoxes.forEach((box) => {
        box.setAttribute('class', `gridBoxPiece16`);
    });
});
button25.addEventListener("click", function () {
    removeAllChildNodes(divsContainer);

    for (var i = 0; i < 25; i++) {
        var div = document.createElement("div");
        div.id = "Div " + (i + 1);
        divsContainer.appendChild(div);
    }
    const gridBoxes = document.querySelectorAll('#container > div');
    gridBoxes.forEach((box) => {
        box.setAttribute('class', `gridBoxPiece25`);
    });
});
button36.addEventListener("click", function () {
    removeAllChildNodes(divsContainer);

    for (var i = 0; i < 36; i++) {
        var div = document.createElement("div");
        div.id = "Div " + (i + 1);
        divsContainer.appendChild(div);
    }
    const gridBoxes = document.querySelectorAll('#container > div');
    gridBoxes.forEach((box) => {
        box.setAttribute('class', `gridBoxPiece36`);
    });
});
button49.addEventListener("click", function () {
    removeAllChildNodes(divsContainer);

    for (var i = 0; i < 49; i++) {
        var div = document.createElement("div");
        div.id = "Div " + (i + 1);
        divsContainer.appendChild(div);
    }
    const gridBoxes = document.querySelectorAll('#container > div');
    gridBoxes.forEach((box) => {
        box.setAttribute('class', `gridBoxPiece49`);
    });
});
button64.addEventListener("click", function () {
    removeAllChildNodes(divsContainer);

    for (var i = 0; i < 64; i++) {
        var div = document.createElement("div");
        div.id = "Div " + (i + 1);
        divsContainer.appendChild(div);
    }
    const gridBoxes = document.querySelectorAll('#container > div');
    gridBoxes.forEach((box) => {
        box.setAttribute('class', `gridBoxPiece64`);
    });
});
button81.addEventListener("click", function () {
    removeAllChildNodes(divsContainer);

    for (var i = 0; i < 81; i++) {
        var div = document.createElement("div");
        div.id = "Div " + (i + 1);
        divsContainer.appendChild(div);
    }
    const gridBoxes = document.querySelectorAll('#container > div');
    gridBoxes.forEach((box) => {
        box.setAttribute('class', `gridBoxPiece81`);
    });
});
button100.addEventListener("click", function () {
    removeAllChildNodes(divsContainer);

    for (var i = 0; i < 100; i++) {
        var div = document.createElement("div");
        div.id = "Div " + (i + 1);
        divsContainer.appendChild(div);
    }
    const gridBoxes = document.querySelectorAll('#container > div');
    gridBoxes.forEach((box) => {
        box.setAttribute('class', `gridBoxPiece100`);
    });
});

