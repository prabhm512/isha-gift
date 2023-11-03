document.addEventListener("DOMContentLoaded", function () {

    const valueInput = document.getElementById("valueInput");
    const submitButton = document.getElementById("submitButton");
    const message = document.getElementById("message");
    var key = ""

    fetch("config.json") // Replace with the path to your JSON file
    .then(response => response.json())
    .then(data => {
        key = data.key
    })

    submitButton.addEventListener("click", function () {
        console.log("test")
        const enteredValue = valueInput.value;

        // Check if the entered value is correct
        if (enteredValue === key) {
            // If correct, navigate to the desired link
            window.location.href = "https://drive.google.com/file/d/18pT_Sw7SfAtOg2yl5Rmkz_NjFHUgku7d/view?usp=sharing";
        } else {
            // If incorrect, display an error message
            message.innerText = "Incorrect value. Please try again.";
        }
    });
});
