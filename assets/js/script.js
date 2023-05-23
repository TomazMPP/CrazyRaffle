function raffle() {
    const range1Input = document.getElementById('rangeStart');
    const range2Input = document.getElementById('rangeEnd');
    const amountInput = document.getElementById('amountNumbers');
    const resultNumbers = document.getElementById('resultNumbers');
    const resultDiv = document.getElementById('result');
    const msg = document.getElementById("msg");
    const button = document.getElementById("raffleButton");
    const btnClose = document.getElementById("btnClose");

    button.addEventListener("click", generateRandomNumbers);
    btnClose.addEventListener("click", closeResultDisplay);

    function sortNumbers(a, b) {
        return a - b;
    }

    function generateRandomNumbers() {
        const range1 = parseInt(range1Input.value);
        const range2 = parseInt(range2Input.value);
        const amountNumbers = parseInt(amountInput.value);

        if (isNaN(range1) || isNaN(range2) || isNaN(amountNumbers)) {
            msg.innerHTML = "Please enter valid numerical values.";
            return;
        }

        if (range1 >= range2) {
            msg.innerHTML = "The Range 1 value must be smaller than the Range 2 value.";
            return;
        }

        const randomNumbers = new Set();
        while (randomNumbers.size < amountNumbers) {
            let randomNumber = Math.floor(Math.random() * (range2 - range1 + 1)) + range1;
            randomNumbers.add(randomNumber);
        }

        const sortedNumbers = Array.from(randomNumbers).sort(sortNumbers);

        resultNumbers.innerHTML = sortedNumbers.join(", ");
        openResultDisplay();
    }

    function openResultDisplay() {
        resultDiv.style.display = "block";
        resultNumbers.style.display = "block";
    }

    function closeResultDisplay() {
        resultDiv.style.display = "none";
        resultNumbers.style.display = "none";
    }
}
