function convertTemperature() {
    const tempInput = parseFloat(document.getElementById('tempInput').value);
    const unitFrom = document.getElementById('unitFrom').value;
    const unitTo = document.getElementById('unitTo').value;
    let result;

    if (isNaN(tempInput)) {
        document.getElementById('result').innerText = "Not a valid number Please enter valid number.";
        return;
    }

    if (unitFrom === unitTo) {
        result = tempInput;
    } else if (unitFrom === "Celsius") {
        result = unitTo === "Fahrenheit" ? (tempInput * 9/5) + 32 : tempInput + 273.15;
    } else if (unitFrom === "Fahrenheit") {
        result = unitTo === "Celsius" ? (tempInput - 32) * 5/9 : (tempInput - 32) * 5/9 + 273.15;
    } else if (unitFrom === "Kelvin") {
        result = unitTo === "Celsius" ? tempInput - 273.15 : (tempInput - 273.15) * 9/5 + 32;
    }

    document.getElementById('result').innerText = `Result: ${result.toFixed(2)} °${unitTo[0]}`;
}
