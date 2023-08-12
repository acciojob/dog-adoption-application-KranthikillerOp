// This function is called when the form is submitted.
function submitForm() {
    // Get the form data.
    var name = document.getElementById("name").value;
    var phone_number = document.getElementById("phone_number").value;
    var address = document.getElementById("address").value;
    var have_lived_with_dog = document.getElementById("have_lived_with_dog").checked;
    var preferred_breeds = document.getElementById("preferred_breeds").options;
    var about_you = document.getElementById("about_you").value;

    // Send the form data to the server.
    var xhr = new XMLHttpRequest();
    xhr.open("POST", "/dog_adoption_application", true);
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.send(JSON.stringify({
        name: name,
        phone_number: phone_number,
        address: address,
        have_lived_with_dog: have_lived_with_dog,
        preferred_breeds: preferred_breeds.map(function(option) { return option.value; }),
        about_you: about_you
    }));

    // When the response is received, show a success message.
    xhr.onload = function() {
        if (xhr.status === 200) {
            alert("Your application has been submitted successfully.");
        } else {
            alert("An error occurred while submitting your application.");
        }
    };
}

// Add an event listener to the submit button.
document.getElementById("submit").addEventListener("click", submitForm);