window.onload = function() {
    const savedNotes = localStorage.getItem("userNotes");
    if (savedNotes) {
        document.getElementById("intet").value = savedNotes;
    }
}

document.getElementById("intet").addEventListener("input", function() {
    localStorage.setItem("userNotes", this.value);
});