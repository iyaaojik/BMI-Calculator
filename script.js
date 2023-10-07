function calculate() {
    const weight = parseFloat(document.getElementById('weight').value);
    const height = parseFloat(document.getElementById('height').value);

    const bmi = weight / Math.pow(height / 100, 2);

    let status;
    if (bmi < 18.5) {
        status = 'Underweight';
    } else if (bmi >= 18.5 && bmi <= 24.9) {
        status = 'Normal';
    } else if (bmi >= 25 && bmi <= 29.9) {
        status = 'Overweight';
    } else if (bmi >= 30 && bmi <= 34.9) {
        status = 'Obese';
    } else {
        status = 'Extremely Obese';
    }

    const resultElement = document.getElementById('result');
    resultElement.innerHTML = `BMI : ${bmi.toFixed(2)} <br> STATUS : ${status}`;
}

function resetValues() {
    document.getElementById('weight').value = '';
    document.getElementById('height').value = '';
    document.getElementById('result').innerHTML = '';
}