// There are many ways to pick a DOM node; here we get the form itself and the email
// input box, as well as the span element into which we will place the error message.

const form  = document.getElementsByTagName('form')[0];
const email = document.getElementById('mail');
const error = document.querySelector('.error')

email.addEventListener("input", function (event) {
    // Each time the user types something, we check if the
    // email field is valid.
  if (email.validity.valid) {
	// In case there is an error message visible, if the field
	// is valid, we remove the error message.
	error.innerHTML = ""; // Reset the content of the message
	error.className = "error"; // Rest the visual state of the message
  }
}, false);
form.addEventListener("submit", function (event) {
	// Each time the user tries to send the data, we check
	// if the email field is valid.
	if (!email.validity.valid) {
		
		// If the field is not valid, we display a custom
		// error message.
		error.innerHTML = "I expect an e-mail nugget!";
		error.className = "error active";
		// And we prevent the form from being sent be canceling the event
		event.preventDefault();
	}
}, false);