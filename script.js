document.addEventListener("DOMContentLoaded", function () {

    const valueInput = document.getElementById("valueInput");
    const submitButton = document.getElementById("submitButton");
    const message = document.getElementById("message");

    // let keyPart1 = "t"
    // let keyPart2 = "e"
    // let keyPart3 = "st"

    const tryAgainMessages = [
        "Oops! Try again!",
        "Give it another shot!",
        "Let's try that again!",
      ];

    submitButton.addEventListener("click", function () {
        const enteredValue = valueInput.value.toLowerCase();
        console.log(enteredValue)

        // Check if the entered value is correct
        if (enteredValue === '2022-10-24') {

            // Get a reference to the body element
            var body = document.getElementsByClassName("container");
            // Remove all child elements from the body
            while (body.firstChild) {
                body.removeChild(body.firstChild);
            }

            // add image
            var img = document.createElement("img");
            img.src = "./Diwali 2022.jpeg";

            document.body.appendChild(img);

            setTimeout(function() {
                window.location.href = "https://drive.google.com/file/d/18pT_Sw7SfAtOg2yl5Rmkz_NjFHUgku7d/view?usp=sharing"; // Replace with your desired link.
            }, 15000);

        } else {
            // If incorrect, display an error message
            // message.innerText = "Try again!";
            const randomIndex = Math.floor(Math.random() * tryAgainMessages.length);
            message.innerText = tryAgainMessages[randomIndex];
        }
    });
});
