document.querySelector('.learning-example-settings').addEventListener('click', function () {
    const snippet = document.getElementById('code-example');
    snippet.style.display = snippet.style.display === 'none' ? 'block' : 'none';
});