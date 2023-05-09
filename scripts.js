$("#submitButton").onclick(function () {
    document.querySelector("#userInputView").style.display = "none";
    document.querySelector("#userOutputView").style.display = "block";
});

$("#resetButton").onclick(function () {
    document.querySelector("#userOutputView").style.display = "none";
    document.querySelector("#userInputView").style.display = "block";
});