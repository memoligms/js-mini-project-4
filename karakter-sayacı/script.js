const textarea = document.querySelector('textarea');
const totalCounter= document.querySelector(".totalCounter");
const reaminingCounter = document.querySelector(".reaminingCounter");

textarea.addEventListener("keyup",updateCounter);

function updateCounter(){
    totalCounter.textContent = textarea.value.length;
    reaminingCounter.textContent = textarea.getAttribute("maxlength")-textarea.value.length;
}

updateCounter();