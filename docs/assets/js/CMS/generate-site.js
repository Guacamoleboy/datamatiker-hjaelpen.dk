document.getElementById('generate-page').addEventListener('click', function () {
    const content = document.getElementById('component-rows').innerHTML;

    fetch('/generate-backend.php', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ html: content })
    })
    .then(response => response.json())
    .then(data => {
        alert(`Din side er oprettet: /custom/${data.filename}`);
    })
    .catch(error => {
        console.error('Fejl:', error);
    });
});