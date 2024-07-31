document.getElementById('benchPressForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const weight = parseFloat(document.getElementById('weight').value);
    const reps = parseInt(document.getElementById('reps').value);

    if (isNaN(weight) || isNaN(reps) || weight <= 0 || reps < 1) {
        document.getElementById('result').textContent = 'Please enter valid numbers.';
        return;
    }

    let oneRepMax;
    if (reps === 1) {
        oneRepMax = weight;
    } else {
        oneRepMax = weight * (1 + reps / 30);
    }

    document.getElementById('result').textContent = `Estimated 1RM: ${oneRepMax.toFixed(2)} lbs`;
});

// Testing Code
(function() {
    function assertEqual(actual, expected, message) {
        if (actual !== expected) {
            console.error(`Assertion failed: ${message}. Expected ${expected}, but got ${actual}`);
        } else {
            console.log(`Assertion passed: ${message}`);
        }
    }

    function testCalculate1RM(weight, reps, expected) {
        document.getElementById('weight').value = weight;
        document.getElementById('reps').value = reps;
        document.getElementById('benchPressForm').dispatchEvent(new Event('submit'));

        const resultText = document.getElementById('result').textContent;
        assertEqual(resultText, `Estimated 1RM: ${expected.toFixed(2)} lbs`, `Failed for weight ${weight} and reps ${reps}`);
    }

    // Run tests
    testCalculate1RM(205, 1, 205);
    testCalculate1RM(200, 10, 266.67);
})();
