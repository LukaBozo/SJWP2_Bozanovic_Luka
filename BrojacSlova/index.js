

document.getElementById("Counter").addEventListener("input",function(){
    let text=document.getElementById("textInput").value;
    let dul=text.length;
});


document.getElementById("Counter").innerHTML="Letter Count: " + dul;

