const longNumb = document.querySelector(".longNumber");
const longNumInput = document.querySelector("#longNumInput");

const nameCard = document.querySelector(".nameCard");
const nameCardInput = document.querySelector("#nameCardInput");

const month = document.querySelector("#month");
const year = document.querySelector("#year");
const monthInput = document.querySelector("#monthInput");
const yearInput = document.querySelector("#yearInput");

const cvc = document.querySelector(".cvc");
const cvcInput = document.querySelector("#cvcInput");

cvcInput.addEventListener("input", e => {
    e.preventDefault();
    cvc.innerText = cvcInput.value;
});

monthInput.addEventListener("input", e => {
    e.preventDefault();
    month.innerText = monthInput.value;
});

yearInput.addEventListener("input", e => {
    e.preventDefault();
    year.innerText = yearInput.value;
});

nameCardInput.addEventListener("input", e => {
    e.preventDefault();
    nameCard.innerText = nameCardInput.value;
});

longNumInput.addEventListener("input", e => {
    e.preventDefault();
    const inputValue = longNumInput.value;
    let formattedValue = "";
    for (let i = 0; i < inputValue.length; i++) {
        formattedValue += inputValue[i];
        if ((i + 1) % 1 === 0 && i !== inputValue.length - 1) {
            formattedValue += "&nbsp;";
        }
        if ((i + 1) % 4 === 0 && i !== inputValue.length - 1) {
            formattedValue += "&nbsp;" + "&nbsp;";
        }
    }
    longNumb.innerHTML = formattedValue;
    const parsedValue = parseInt(inputValue);
    if (!isNaN(parsedValue)) {
        console.log("It's a number");
    } else {
        console.log("Not a number");
    }
});

