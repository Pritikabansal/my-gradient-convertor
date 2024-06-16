document.addEventListener("DOMContentLoaded", () => {
    const gradientBox = document.querySelector(".show-gradient-box");
    const directionSelect = document.querySelector(".direction-box select");
    const colorInputs = document.querySelectorAll(".color-input input");
    const codeTextarea = document.querySelector(".row");
    const refreshButton = document.querySelector(".refresh-c");
    const copyButton = document.querySelector(".copy-code");

    function updateGradient() {
        const direction = directionSelect.value;
        const color1 = colorInputs[0].value;
        const color2 = colorInputs[1].value;
        const gradient = `linear-gradient(${direction}, ${color1}, ${color2})`;

        gradientBox.style.background = gradient;
        codeTextarea.value = `background: ${gradient};`;
    }

    function refreshColors() {
        colorInputs.forEach(input => {
            input.value = `#${Math.floor(Math.random()*16777215).toString(16)}`;
        });
        updateGradient();
    }

    async function copyCode() {
        try {
            await navigator.clipboard.writeText(codeTextarea.value);
            alert("Gradient code copied to clipboard!");
        } catch (err) {
            console.error("Failed to copy text: ", err);
        }
    }

    directionSelect.addEventListener("change", updateGradient);
    colorInputs.forEach(input => input.addEventListener("input", updateGradient));
    refreshButton.addEventListener("click", refreshColors);
    copyButton.addEventListener("click", copyCode);

    updateGradient();
});
