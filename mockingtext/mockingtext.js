var input = document.getElementById("mockInput");
var output = document.getElementById("mockOutput");

function mockGen (c) {
    return Math.random() < 0.5 ? c.toLowerCase() : c.toUpperCase();
}

function mock (text) {
    output.value = text.split("").map(mockGen).join("");   
}

input.addEventListener('keyup', function (e) { mock(e.target.value); });
