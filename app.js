const longNumb = document.querySelector(".longNumber");
const longNumInput = document.querySelector("#longNumInput");

longNumInput.addEventListener("input", e => {
    e.preventDefault();
    longNumb.innerText = longNumInput.value;
    if (!Number.isInteger(Number(longNumInput.value))) {
        console.log("not a number");
    } 
})