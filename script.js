document.addEventListener("DOMContentLoaded", function () {

    const valueInput = document.getElementById("valueInput");
    const submitButton = document.getElementById("submitButton");
    const message = document.getElementById("message");

    const key = "test"

    const tryAgainMessages = [
        "Oops! Try again!",
        "Give it another shot!",
        "Let's try that again!",
      ];

    submitButton.addEventListener("click", function () {
        console.log("submit button working")
        const enteredValue = valueInput.value;

        // Check if the entered value is correct
        if (enteredValue === key) {
            // If correct, navigate to the desired link
            window.location.href = "https://drive.google.com/file/d/18pT_Sw7SfAtOg2yl5Rmkz_NjFHUgku7d/view?usp=sharing";
        } else {
            // If incorrect, display an error message
            // message.innerText = "Try again!";
            const randomIndex = Math.floor(Math.random() * tryAgainMessages.length);
            message.innerText = tryAgainMessages[randomIndex];
        }
    });
});
