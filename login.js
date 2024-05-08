document.getElementById('login-form').addEventListener('submit', function(event) {
	event.preventDefault();

	var username = document.getElementById('username').value;
	var password = document.getElementById('password').value;

	if (username === 'Achilles Oliveros' && password === '123pwet123') {
		window.location.href = 'home.html';
	} else {
		alert('Invalid username or password');
	}
});
