//listen for a submit
document.querySelector(".contact-form").addEventListener("submit, submitForm");

function submitForm(e){
	e.preventDefault();
	//get input values
	let name = document.querySelector(".name").value;
	let email = document.querySelector(".email").value;
	let message = document.querySelector(".message").value;

	saveContactInfo(name, email, message);
	document.querySelector(".contact-form").reset();
	sendEmail(name, email, message);
}