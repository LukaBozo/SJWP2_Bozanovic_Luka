let rndNumber1=Math.floor(Math.random()*6)+1;
//console.log(rndNumber1);
let randImageSource1="./images/dice" + rndNumber1 + ".png";
document.querySelectorAll("img")[0].setAttribute("src",randImageSource1);
let rndNumber2=Math.floor(Math.random()*6)+1;
let randImageSource2="./images/dice"+rndNumber2+".png";
document.querySelectorAll("img")[1].setAttribute("src",randImageSource2);

if(rndNumber1>rndNumber2){
    document.querySelector("h1").innerHTML="Player 1 WIN";
}
else if(rndNumber1<rndNumber2){
    document.querySelector("h1").innerHTML="Player 2 WIN";
}
else{
    document.querySelector("h1").innerHTML="Draw";
}
