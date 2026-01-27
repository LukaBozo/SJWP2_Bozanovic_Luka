let Input=document.getElementById("textInput");
let count=document.getElementById("counter");

Input.addEventListener("input", function(){
    count.textContent=Input.value.length;
});

