const photoUpload = document.getElementById("photoUpload");
const previewImage = document.getElementById("previewImage");
const resetButton = document.getElementById("resetImage");
const fileNameDisplay = document.getElementById("fileName");
const placeholderSrc = "assets/images/placeholder1.png";

photoUpload.addEventListener("change", function(event) {
    const file = event.target.files[0];
    if (file) {
        previewImage.src = URL.createObjectURL(file);
        fileNameDisplay.textContent = file.name;
    }
});

resetButton.addEventListener("click", function() {
    previewImage.src = placeholderSrc;
    photoUpload.value = "";
    fileNameDisplay.textContent = "";
});