let btnPretvorba=document.getElementById("pretvorba");

let Euri=document.getElementById("euri");
let Dolari=document.getElementById("dolari");

btnPretvorba.addEventListener("click", function(){
    let vrijednost=document.getElementById("bitcoin").value;
    
    let pretvorba1=vrijednost*73745;
    Euri.textContent=pretvorba1;

    let pretvorba2=vrijednost*87934;
    Dolari.textContent=pretvorba2;
})