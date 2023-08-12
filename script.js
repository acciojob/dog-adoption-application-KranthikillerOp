// This function is called when the form is submitted.
function submitForm() {
  // Get the form data.
  var name = document.getElementById("name").value;
  var phone = document.getElementById("phone").value;
  var address = document.getElementById("address").value;
  var have_lived_with_dog = document.getElementById("have_lived_with_dog").checked;
  var preferred_breeds = document.getElementById("preferred_breeds").value;

  // Send the form data to the server.
  var xhr = new XMLHttpRequest();
  xhr.open("POST", "/submit");
  xhr.setRequestHeader("Content-Type", "application/json");
  xhr.send(JSON.stringify({
    name: name,
    phone: phone,
    address: address,
    have_lived_with_dog: have_lived_with_dog,
    preferred_breeds: preferred_breeds
  }));

  // When the server responds, show a success message.
  xhr.onload = function() {
    if (xhr.status == 200) {
      alert("Your application has been submitted successfully!");
    } else {
      alert("There was an error submitting your application.");
    }
  };
}

// When the submit button is clicked, call the submitForm() function.
document.getElementById("submit").onclick = submitForm;;