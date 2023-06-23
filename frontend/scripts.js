$(document).ready(function () {
    //This function hides the input box, sends JSON string to server, and displays the div for the output
    $("#submitButton").click(function () {
        document.querySelector("#leftPaneWrapper").style.display = "none";
        document.querySelector("#rightPaneWrapper").style.display = "none";
        document.querySelector("#userOutputView").style.display = "block";
        const userInputArray = $("#userDataInput").val().split("\n");
        const userInputJson = JSON.stringify(userInputArray);

        console.log("Converted #userDataInput to JSON:\n" + userInputJson);
        const handleXhrResponse = (xhr) => {
            return new Promise((resolve, reject) => {
                console.log("Inside handleXhrResponse()");
                if (xhr.status >= 200 && xhr.status < 300) {
                    const responseJson = JSON.parse(xhr.responseText);
                    resolve(responseJson);
                } else {
                    reject(new Error("HTTP error; status " + xhr.status));
                }
            });
        };

        const endpoint = "http://localhost:8080/userinfo";
        const xhr = new XMLHttpRequest();
        xhr.open("POST", endpoint);
        xhr.setRequestHeader("Content-Type", "application/json");

        xhr.onload = async () => {
            console.log("Entering onload() of XmlHttpRequest");
            try {
                console.log("Submitting " + userInputJson + " to endpoint " + endpoint);
                const responseData = await handleXhrResponse(xhr);
                console.log("Response: ", responseData);

                document.getElementById("userOutputData").innerText = JSON.stringify(responseData);

            } catch(error) {
                console.log("Submission errored; " + error.message);
                // further error handling as we want
            }
            console.log("Leaving onload() of XmlHttpRequest");
        };

        xhr.onerror = () => {
            console.log("Running onerror() of XmlHttpRequest");
        };

        xhr.send(userInputJson);
    });

    //This function hides the output and displays the input box again
    $("#resetButton").click(function () {
        document.querySelector("#userOutputView").style.display = "none";
        document.querySelector("#rightPaneWrapper").style.display = "flex";
        document.querySelector("#leftPaneWrapper").style.display = "flex";
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
    //This function hides light mode button, and changes CSS settings to light mode
    $("#switchToLightButton").click(function () {
        document.querySelector("#switchToDarkButton").style.display = "block";
        document.querySelector("#switchToLightButton").style.display = "none";
    });
    //This function hides dark mode button, and changes CSS settings to dark mode
    $("#switchToDarkButton").click(function () {
        document.querySelector("#switchToDarkButton").style.display = "none";
        document.querySelector("#switchToLightButton").style.display = "block";
    });
});
