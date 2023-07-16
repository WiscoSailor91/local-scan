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

    //This function changes CSS settings to light mode
    $("#switchToLightButton").click(function () {
        //Next 6 lines change light, dark, and submit buttons background color & font color
        document.querySelector("#lightButton").style.backgroundColor = "#DEE4E7";
        document.querySelector("#lightButton").style.color = "black";
        document.querySelector("#darkButton").style.backgroundColor = "black";
        document.querySelector("#darkButton").style.color = "#DEE4E7";
        document.querySelector("#submitButton").style.backgroundColor = "#37474F";
        document.querySelector("#submitButton").style.color = "white";
        //Next 2 lines change body font color & background color
        document.querySelector("body").style.backgroundColor = "#DEE4E7";
        document.querySelector("body").style.color = "black";
    });

    //This function changes CSS settings to dark mode
    $("#switchToDarkButton").click(function () {
        //Next 6 lines change light, dark, and submit buttons background color & font color
        document.querySelector("#lightButton").style.backgroundColor = "black";
        document.querySelector("#lightButton").style.color = "#DEE4E7";
        document.querySelector("#darkButton").style.backgroundColor = "#DEE4E7";
        document.querySelector("#darkButton").style.color = "black";
        document.querySelector("#submitButton").style.backgroundColor = "#DEE4E7";
        document.querySelector("#submitButton").style.color = "black";
        //Next 2 lines change body font color & background color
        document.querySelector("body").style.backgroundColor = "black";
        document.querySelector("body").style.color = "#DEE4E7";
    });
});