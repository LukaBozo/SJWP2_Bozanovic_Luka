let ohmR = document.getElementById("ohmR");
let ohmU = document.getElementById("ohmU");
let ohmBtn = document.getElementById("ohmBtn");
let ohmResult = document.getElementById("ohmResult");

function izracunajOhm(event) {

    let R = parseFloat(ohmR.value);
    let U = parseFloat(ohmU.value);

    if (isNaN(R) || isNaN(U) || R <= 0) {
        ohmResult.innerHTML = "Unesi ispravne vrijednosti!";
        ohmResult.style.color = "crimson";
        return;
    }

    let I = U / R;

    ohmResult.innerHTML = "Struja I = " + I.toFixed(2) + " A";
    ohmResult.style.color = "green";
}
ohmBtn.addEventListener("click", izracunajOhm);




let ohmR1=document.getElementById("ohmR1");
let ohmR2=document.getElementById("ohmR2");
let volt1=document.getElementById("volt1");
let btnNapon1=document.getElementById("btnNapon1");
let naponResult1=document.getElementById("naponResult1");

function izracunajDjeliloNapona(event) {

    let U = parseFloat(volt1.value);
    let R1 = parseFloat(ohmR1.value);
    let R2 = parseFloat(ohmR2.value);

    if (isNaN(R1) || isNaN(R2) || isNaN(U) || R1<=0 || R2<=0 || U<=0) {
        naponResult1.innerHTML = "Unesi ispravne vrijednosti!";
        naponResult1.style.color = "crimson";
        return;
    }

    let Uiz=U*(R2/(R1+R2));

    naponResult1.innerHTML = "Djelilo napona = " + Uiz.toFixed(2) + " V";
    naponResult1.style.color = "green";
}
btnNapon1.addEventListener("click", izracunajDjeliloNapona);




let SSOR1=document.getElementById("SSOR1");
let SSOR2=document.getElementById("SSOR2");
let SSOR3=document.getElementById("SSOR3");
let SSOR4=document.getElementById("SSOR4");
let btnSSO=document.getElementById("btnSSO");
let SSOresult=document.getElementById("SSOresult");

function izracunajSerijskoSpajanjeOtpornika(event) {

    let R1 = parseFloat(SSOR1.value);
    let R2 = parseFloat(SSOR2.value);
    let R3 = parseFloat(SSOR3.value);
    let R4 = parseFloat(SSOR4.value);

    if (isNaN(R1) || isNaN(R2) || isNaN(R3) || isNaN(R4) || R1<=0 || R2<=0 || R3<=0 || R4<=0) {
        SSOresult.innerHTML = "Unesi ispravne vrijednosti!";
        SSOresult.style.color = "crimson";
        return;
    }

    let ssoRiz=R1+R2+R3+R4;
    SSOresult.innerHTML = "Serijski otpor = " + ssoRiz.toFixed(2) + " Ω";
    SSOresult.style.color = "green";
}
btnSSO.addEventListener("click", izracunajSerijskoSpajanjeOtpornika);


let PSOR1=document.getElementById("PSOR1");
let PSOR2=document.getElementById("PSOR2");
let PSOR3=document.getElementById("PSOR3");
let PSOR4=document.getElementById("PSOR4");
let btnPSO=document.getElementById("btnPSO");
let PSOresult=document.getElementById("PSOresult");

function izracunajParalelnoSpajanjeOtpornika(event) {

    let R1 = parseFloat(PSOR1.value);
    let R2 = parseFloat(PSOR2.value);
    let R3 = parseFloat(PSOR3.value);
    let R4 = parseFloat(PSOR4.value);

    if (isNaN(R1) || isNaN(R2) || isNaN(R3) || isNaN(R4) || R1<=0 || R2<=0 || R3<=0 || R4<=0) {
        PSOresult.innerHTML = "Unesi ispravne vrijednosti!";
        PSOresult.style.color = "crimson";
        return;
    }

    let psoRiz=(1/R1)+(1/R2)+(1/R3)+(1/R4);
    PSOresult.innerHTML = "Paralelni otpor = " + psoRiz.toFixed(2) + " Ω";
    PSOresult.style.color = "green";
}
btnPSO.addEventListener("click", izracunajParalelnoSpajanjeOtpornika);




let sscC1=document.getElementById("sscC1");
let sscC2=document.getElementById("sscC2");
let sscC3=document.getElementById("sscC3");
let sscC4=document.getElementById("sscC4");
let btnSSC=document.getElementById("btnSSC");
let SSCresult=document.getElementById("SSCresult");

function izracunajSerijskoSpajanjeKondenzatora(event) {

    let C1 = parseFloat(sscC1.value);
    let C2 = parseFloat(sscC2.value);
    let C3 = parseFloat(sscC3.value);
    let C4 = parseFloat(sscC4.value);

    if (isNaN(C1) || isNaN(C2) || isNaN(C3) || isNaN(C4) || C1<=0 || C2<=0 || C3<=0 || C4<=0) {
        SSCresult.innerHTML = "Unesi ispravne vrijednosti!";
        SSCresult.style.color = "crimson";
        return;
    }

    let sscRiz=(1/C1)+(1/C2)+(1/C3)+(1/C4);
    sscRiz=1/sscRiz;
    SSCresult.innerHTML = "Serijski naboj = " + sscRiz.toFixed(2) + " F";
    SSCresult.style.color = "green";
}
btnSSC.addEventListener("click", izracunajSerijskoSpajanjeKondenzatora);





let pscC1=document.getElementById("pscC1");
let pscC2=document.getElementById("pscC2");
let pscC3=document.getElementById("pscC3");
let pscC4=document.getElementById("pscC4");
let btnPSC=document.getElementById("btnPSC");
let PSCresult=document.getElementById("PSCresult");

function izracunajParalelnogSpajanjeKondenzatora(event) {

    let C1 = parseFloat(pscC1.value);
    let C2 = parseFloat(pscC2.value);
    let C3 = parseFloat(pscC3.value);
    let C4 = parseFloat(pscC4.value);

    if (isNaN(C1) || isNaN(C2) || isNaN(C3) || isNaN(C4) || C1<=0 || C2<=0 || C3<=0 || C4<=0) {
        PSCresult.innerHTML = "Unesi ispravne vrijednosti!";
        PSCresult.style.color = "crimson";
        return;
    }

    let pscCiz=C1+C2+C3+C4;

    PSCresult.innerHTML = "Paralelni naboj = " + pscCiz.toFixed(2) + " F";
    PSCresult.style.color = "green";
}
btnPSC.addEventListener("click", izracunajParalelnogSpajanjeKondenzatora);



let sszL1=document.getElementById("sszL1");
let sszL2=document.getElementById("sszL2");
let sszL3=document.getElementById("sszL3");
let sszL4=document.getElementById("sszL4");
let btnSSZ=document.getElementById("btnSSZ");
let SSZresult=document.getElementById("SSZresult");

function izracunajSerijskogSpajanjaZavojnice(event) {

    let L1 = parseFloat(sszL1.value);
    let L2 = parseFloat(sszL2.value);
    let L3 = parseFloat(sszL3.value);
    let L4 = parseFloat(sszL4.value);

    if (isNaN(L1) || isNaN(L2) || isNaN(L3) || isNaN(L4) || L1<=0 || L2<=0 || L3<=0 || L4<=0) {
        SSZresult.innerHTML = "Unesi ispravne vrijednosti!";
        SSZresult.style.color = "crimson";
        return;
    }

    let sszLiz=L1+L2+L3+L4;

    SSZresult.innerHTML = "Serijska induktivnost = " + sszLiz.toFixed(2) + " H";
    SSZresult.style.color = "green";
}
btnSSZ.addEventListener("click", izracunajSerijskogSpajanjaZavojnice);





let pszL1=document.getElementById("pszL1");
let pszL2=document.getElementById("pszL2");
let pszL3=document.getElementById("pszL3");
let pszL4=document.getElementById("pszL4");
let btnPSZ=document.getElementById("btnPSZ");
let PSZresult=document.getElementById("PSZresult");

function izracunajParalelnogSpajanjaZavojnice(event) {

    let L1 = parseFloat(pszL1.value);
    let L2 = parseFloat(pszL2.value);
    let L3 = parseFloat(pszL3.value);
    let L4 = parseFloat(pszL4.value);

    if (isNaN(L1) || isNaN(L2) || isNaN(L3) || isNaN(L4) || L1<=0 || L2<=0 || L3<=0 || L4<=0) {
        PSZresult.innerHTML = "Unesi ispravne vrijednosti!";
        PSZresult.style.color = "crimson";
        return;
    }

    let pszLiz=(1/L1)+(1/L2)+(1/L3)+(1/L4);
    pszLiz=1/pszLiz;

    PSZresult.innerHTML = "Paralelna induktivnost = " + pszLiz.toFixed(2) + " H";
    PSZresult.style.color = "green";
}
btnPSZ.addEventListener("click", izracunajParalelnogSpajanjaZavojnice);





let izzN=document.getElementById("izzN");
let izzS=document.getElementById("izzS");
let izzl=document.getElementById("izzl");
let btnIZZ=document.getElementById("btnIZZ");
let IZZresult=document.getElementById("IZZresult");

function izracunajInduktivnostZracneZavojnice(event) {

    let N = parseFloat(izzN.value);
    let S = parseFloat(izzS.value);
    let l = parseFloat(izzl.value);

    if (isNaN(N) || isNaN(S) || isNaN(l) || N<=0 || S<=0 || l<=0 ) {
        IZZresult.innerHTML = "Unesi ispravne vrijednosti!";
        IZZresult.style.color = "crimson";
        return;
    }

    let izzLiz=((4*3.1416)*(1/10000000))*(((N*N)*S)/l);

    IZZresult.innerHTML = "Induktivnost = " + izzLiz.toFixed(2) + " H";
    IZZresult.style.color = "green";
}
btnIZZ.addEventListener("click", izracunajInduktivnostZracneZavojnice);





let rioW=document.getElementById("rioW");
let rioL=document.getElementById("rioL");
let btnRIO=document.getElementById("btnRIO");
let RIOresult=document.getElementById("RIOresult");

function izracunajInduktivniOtpor(event) {

    let W = parseFloat(rioW.value);
    let L = parseFloat(rioL.value);

    if (isNaN(W) || isNaN(L) || L<=0 || W<=0) {
        RIOresult.innerHTML = "Unesi ispravne vrijednosti!";
        RIOresult.style.color = "crimson";
        return;
    }

    let rioXl=2*(3.1416)*W*L;

    RIOresult.innerHTML = "Induktivni otpor = " + rioXl.toFixed(2) + " Ω";
    RIOresult.style.color = "green";
}
btnRIO.addEventListener("click", izracunajInduktivniOtpor);



let rcoW=document.getElementById("rcoW");
let rcoC=document.getElementById("rcoC");
let btnRCO=document.getElementById("btnRCO");
let RCOresult=document.getElementById("RCOresult");

function izracunajKapacitivniOtpor(event) {

    let W = parseFloat(rcoW.value);
    let C = parseFloat(rcoC.value);

    if (isNaN(W) || isNaN(C) || C<=0 || W<=0) {
        RCOresult.innerHTML = "Unesi ispravne vrijednosti!";
        RCOresult.style.color = "crimson";
        return;
    }

    let rcoXc=1/(2*(3.1416)*W*C);

    RCOresult.innerHTML = "Induktivni otpor = " + rcoXc.toFixed(2) + " Ω";
    RCOresult.style.color = "green";
}
btnRCO.addEventListener("click", izracunajKapacitivniOtpor);
