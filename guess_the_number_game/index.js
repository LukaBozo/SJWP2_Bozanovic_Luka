function randomNumber(){
    return Math.floor(Math.random()*100)+1;
}

let input=document.getElementById("guess");
let msg=document.getElementById("msg");
let attempts=document.getElementById("attempts");

let rnd1=randomNumber();
let pokusaji=0;

function updateAttemps(){
    attempts.innerHTML="Pokušaji:" + pokusaji;
}

updateAttemps();

function checkNumber(event){
    event.preventDefault(); //ne osvjezava stranicu
    let value=parseInt(input.value);
    /* console.log(value); */

    if(isNaN(value) || value<1 || value>100){
        msg.innerHTML="Unesi broj između 1 i 100!";
        msg.style.color="crimson";
        return;
    }

    if(value === rnd1){
        msg.innerHTML="Pogodak! Broj je " + rnd1 + "!";
        msg.style.color="green";
    }
    else if(value<rnd1){
        msg.innerHTML="Premalo";
        msg.style.color="orange";    
    }
    else{
        msg.innerHTML="Preveliko";
        msg.style.color="red"; 
    }

    pokusaji++;
    updateAttemps();

}

function newGame(){
    rnd1=randomNumber();
    pokusaji=0;
    updateAttemps();
    msg.innerHTML="Nova igra - pokušaj ponovno";
    msg.style.color="black";
    input.focus();
    input.value="";
}