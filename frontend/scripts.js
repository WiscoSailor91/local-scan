$(document).ready(function () {
    //This function hides the input box and displays the div for the output
    $("#submitButton").click(function () {
        document.querySelector("#userInputView").style.display = "none";
        document.querySelector("#userInstructions").style.display = "none";
        document.querySelector("#userOutputView").style.display = "block";
    });
    //This function hides the output and displays the input box again
    $("#resetButton").click(function () {
        document.querySelector("#userOutputView").style.display = "none";
        document.querySelector("#userInstructions").style.display = "block";
        document.querySelector("#userInputView").style.display = "block";
        document.getElementById("userDataInput").value = "Paste your scan here.";
    });
    //This function clears the textarea field when the user clicks inside it
    $("#userDataInput").click(function () {
        document.getElementById("userDataInput").value = "";
    });
    //This function stops submit button from refreshing page
    $(document).on('submit', '#inputData', function() {
        return false;
    });
});