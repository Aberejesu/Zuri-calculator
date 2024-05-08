let output = document.getElementById('output');

function appendToOutput(value) {
    output.value += value;
}

function clearOutput() {
    output.value = '';
}

function calculateResult() {
    let result;
    try {
        result = eval(output.value);
        if (!isFinite(result)) {
            throw new Error('Infinity');
        }
    } catch (error) {
        result = 'Error';
    }
    output.value = result;
}