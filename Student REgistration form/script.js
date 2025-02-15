// Code for handling the grade input for 10th marks
function showInput(option) {
    const inputContainer = document.getElementById('inputContainer');
    const inputLabel = document.getElementById('inputLabel');
    const inputField = document.getElementById('inputField');

    if (option === 'percentage') {
        inputLabel.innerText = 'Enter the (1-100) percentage:';
        inputField.min = 1;
        inputField.max = 100;
    } else if (option === 'cgpa') {
        inputLabel.innerText = 'Enter the (1-10) grade:';
        inputField.min = 1;
        inputField.max = 10;
    }

    inputContainer.style.display = 'block';
}

function handleInput() {
    const inputField = document.getElementById('inputField').value;
}

// Code for handling the grade input for 12th marks
function showInput2(option2) {
    const inputContainer2 = document.getElementById('inputContainer2');
    const inputLabel2 = document.getElementById('inputLabel2');
    const inputField2 = document.getElementById('inputField2');

    if (option2 === 'percentage') {
        inputLabel2.innerText = 'Enter the (1-100) percentage:';
        inputField2.min = 1;
        inputField2.max = 100;
    } else if (option2 === 'cgpa') {
        inputLabel2.innerText = 'Enter the (1-10) grade:';
        inputField2.min = 1;
        inputField2.max = 10;
    }

    inputContainer2.style.display = 'block';
}

function handleInput2() {
    const inputField2 = document.getElementById('inputField2').value;
}
