let Pretvorba=document.getElementById("pretvorba");
let Farenheit=document.getElementById("farenheit");
let Kelvin=document.getElementById("kelvin");

let btnPretvorba=document.getElementById("pretvorba");

btnPretvorba.addEventListener("click", function(){
    let iznos=Number(document.getElementById("unos").value);

    let kel=iznos+273.15;
    let far=iznos*(9/5)+32;

    Farenheit.textContent=far;
    Kelvin.textContent=kel;
})