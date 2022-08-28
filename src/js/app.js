const form = document.querySelector("#form");
const originalHash = document.querySelector("#hash");
const fileHash = document.querySelector("#fileHash");
const inputs = document.querySelectorAll("input");
const btn = document.querySelector("#btn");

const checkHasError = () => {
    return inputs.some(input => input.classList.contains("error"));
};

const checkBothHashAreNotValids = () => {
    return originalHash.value === fileHash.value;
};

const clearFieldValue = () => {
    inputs.forEach(input => input.value = "");
};

const checkInputIsNotValid = input => {
    const isEmpty = input.value === "";
    const stringSize = input.value.length;
    const minimumOfCharacters = 8;
    return isEmpty || stringSize < minimumOfCharacters;
};

const validateData = input => {
    const label = input.nextElementSibling;
    if (checkInputIsNotValid()) {
        input.classList.add("error");
        label.textContent = "Cannot be empty or less than 8 characters.";
        label.classList.add("message");
        return;
    }
    input.classList.remove("error");
    label.textContent = "";
    label.classList.remove("message");
};

const checkHash = () => {
    if (checkHasError()) {
        return;
    }
    if (checkBothHashAreNotValids()) {
        alert("Danger!!!!!!!!!!! The file has been compromised! :(");
        clearFieldValue();
        return;
    }
    alert("Everything is fine, the file is safe!! :)");
    clearFieldValue();
};

form.addEventListener("submit", (event) => {
    event.preventDefault();
});

btn.addEventListener("click", () => {
    inputs.forEach(input => {
        validateData(input);
    });
    checkHash();
});

inputs.forEach(input => {
    input.addEventListener("keyup", () => {
        validateData(input);
    });
});