let btn=document.getElementById("btnGo");

let pound=document.getElementById("pounds");
let ounce=document.getElementById("ounces");
let gram=document.getElementById("grams");



btn.addEventListener("click", function(){

    let unos=document.getElementById("Input").value;

    let poundRez=unos*2.2;
    pound.textContent=poundRez;

    let ounceRez=unos*35.274;
    ounce.textContent=ounceRez;

    let gramRez=unos*1000;
    gram.textContent=gramRez;
})