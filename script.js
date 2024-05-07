function calculate() {
    const num1 = parseInt(document.getElementById('num1').value);
    const num2 = parseInt(document.getElementById('num2').value);

    // Validate input
    if (num1 < 1 || num2 < 1 || isNaN(num1) || isNaN(num2)) {
        document.getElementById('result').innerText = "Please Enter Natural Numbers.";
        return;
    }

    // Load and instantiate the WebAssembly module
    fetch('lcm.wasm')
    .then(response => response.arrayBuffer())
    .then(buffer => WebAssembly.instantiate(buffer))
    .then(module => {
        const { lcm } = module.instance.exports;
        const result = lcm(num1, num2);
        document.getElementById('result').innerText = `The LCM is: ${result}`;
    })
    .catch(error => console.error(error));
}

// Function to clear input fields and result
function clearFields() {
    document.getElementById('num1').value = '';
    document.getElementById('num2').value = '';
    document.getElementById('result').innerText = '';
}
