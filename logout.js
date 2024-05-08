document.getElementById('index.html').addEventListener('click', function(e) {
    e.preventDefault();
    fetch('/logout', { method: 'GET' })
      .then(response => response.redirect('index.html'))
      .catch(error => console.error('Error:', error));
  });