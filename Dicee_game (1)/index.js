function randomNumber(){
    return Math.floor(Math.random()*6)+1;
}


let rndNumber1=randomNumber();
let rndNumber1_1=randomNumber();
let randImageSource1="./images/dice" + rndNumber1 + ".png";
document.querySelectorAll("img")[0].setAttribute("src",randImageSource1);
let randImageSource1_1="./images/dice" + rndNumber1_1 + ".png";
document.querySelectorAll("img")[1].setAttribute("src",randImageSource1_1);



let rndNumber2=randomNumber();
let rndNumber2_2=randomNumber();
let randImageSource2="./images/dice"+rndNumber2+".png";
document.querySelectorAll("img")[2].setAttribute("src",randImageSource2);
let randImageSource2_2="./images/dice"+rndNumber2_2+".png";
document.querySelectorAll("img")[3].setAttribute("src",randImageSource2_2);


let sum1=rndNumber1+rndNumber1_1;
let sum2=rndNumber2+rndNumber2_2;

if(sum1>sum2){
    document.querySelector("h1").innerHTML="Player 1 WIN";
}
else if(sum1<sum2){
    document.querySelector("h1").innerHTML="Player 2 WIN";
}
else{
    document.querySelector("h1").innerHTML="Draw";
}


document.querySelector(".rez1").innerHTML=sum1;
document.querySelector(".rez2").innerHTML=sum2;
