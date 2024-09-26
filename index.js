document.getElementById("loginForm").addEventListener("submit",function(event){
event.preventDefault();

var email = document.getElementById("email").value;

var password = document.getElementById("password").value;

if (email==="lcm@gmail.com" && password==="lcm123"){
	window.location.href ="pagina2.html";
} else {
	document.getElementById("message").innerHTML = "Acceso denegado.";
}
});
