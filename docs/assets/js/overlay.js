document.addEventListener('DOMContentLoaded', () => {
    const overlay = document.getElementById('overlay');
    const hiddenDiv = document.getElementById('hiddenDiv');
    const activateBtn = document.getElementById('overlayBtn');
    const closeBtn = document.getElementById('closeBtn');

    activateBtn.addEventListener('click', () => {
        overlay.style.display = 'block'; 
        hiddenDiv.style.display = 'block'; 
        console.log("Overlay activated");
    });

    closeBtn.addEventListener('click', () => {
        overlay.style.display = 'none'; 
        hiddenDiv.style.display = 'none';
        console.log("Overlay closed");
    });
});
