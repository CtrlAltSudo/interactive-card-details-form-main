const longNumb = document.querySelector(".longNumber");
const longNumInput = document.querySelector("#longNumInput");

const nameCard = document.querySelector(".nameCard");
const nameCardInput = document.querySelector("#nameCardInput");

const month = document.querySelector("#month");
const year = document.querySelector("#year");
const monthInput = document.querySelector("#monthInput");
const yearInput = document.querySelector("#yearInput");

monthInput.addEventListener("input", e => {
    e.preventDefault();
    month.innerText = monthInput.value;
})

yearInput.addEventListener("input", e => {
    e.preventDefault();
    year.innerText = yearInput.value;
})

nameCardInput.addEventListener("input", e => {
    e.preventDefault();
    nameCard.innerText = nameCardInput.value;
})

longNumInput.addEventListener("input", e => {
    e.preventDefault();
    longNumb.innerText = longNumInput.value;
    if(longNumInput.value === Number.isInterger()){
        console.log("not a number")
    } 
})