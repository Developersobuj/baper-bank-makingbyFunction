function getInputValueById(inputValue) {
    const newInputValue = document.getElementById(inputValue);
    const inputValueString = newInputValue.value
    const newInput = parseFloat(inputValueString);
    newInputValue.value = ''
    return newInput;
}

function getElementValueById(elementId) {
    const newElementValue = document.getElementById(elementId);
    const newElementValueString = newElementValue.innerText;
    const newElement = parseFloat(newElementValueString);
    newElementValue.value = ''
    return newElement;
}

function setElement(elementId, value) {
    const textElement = document.getElementById(elementId);
    textElement.innerText = value;
}
