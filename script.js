//Let's prompt to know who is using the application
var user = prompt("Who's there?");
//Let's check the input of the user
if(user === "Admin"){
	//Let's ask him for the password if this is the admin
	var password = prompt("Password");
	//let's check the input of the user
	if(password === "TheMaster"){
		alert("Welcome");
	}
	//Checking if the user typed something
	else if(password === '' || password === null){
		alert("Canceled");
	}
	else{
		alert("Wrong password");
	}
}
//Checking if the user typed something when we asked who's there
else if(user === '' || password === null){
	alert("Canceled");
}
else{
	alert("Sorry, I don't know you")
}