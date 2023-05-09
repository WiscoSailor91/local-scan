$("#submitButton").click(function () {
    document.querySelector("#userInputView").style.display = "none";
    document.querySelector("#userOutputView").style.display = "block";
});

$("#resetButton").click(function () {
    document.querySelector("#userOutputView").style.display = "none";
    document.querySelector("#userInputView").style.display = "block";
});