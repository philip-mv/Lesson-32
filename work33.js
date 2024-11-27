// Function to generate a random color in RGB format
function generateRandomColor() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);

    return `rgb(${r}, ${g}, ${b})`;
}

// Get the button element
const changeColorButton = document.getElementById("changeColor");

// Add an event listener to the button
changeColorButton.addEventListener("click", () => {
    const randomColor = generateRandomColor();
    document.body.style.backgroundColor = randomColor;
});