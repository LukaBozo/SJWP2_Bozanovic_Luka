let count=0;

let counter=document.getElementById("counter");
let btnPlus=document.getElementById("plus");
let btnMinus=document.getElementById("minus");

btnPlus.addEventListener("click", function(){
    count++;
    counter.textContent=count;
})

btnMinus.addEventListener("click", function(){
    count--;
    counter.textContent=count;
})