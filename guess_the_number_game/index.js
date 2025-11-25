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
    console.log(value);
}
function NewGame(){

}