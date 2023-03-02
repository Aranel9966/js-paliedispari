/*
Palidroma
Chiedere all’utente di inserire una parola
Creare una funzione per capire se la parola inserita è palindroma
*/

/*
-chiedere di inserire una parola
-creare una funzione
    ?se (parola = a parola revers)
        --è palindroma 
    :?altrimenti
        --non è palindroma
*/

let textUser = document.getElementById('text-user');
let buttonTest = document.getElementById('button-test');
let outputTest = document.getElementById('output-test');

buttonTest.addEventListener('click',function(){
    
    testPalindroma(textUser.value)
    
});


function testPalindroma(text){

    let newArray = text
    let newArrayReverse = text.split('').reverse().join('')
    
    
    if(newArray == newArrayReverse){
    console.log('è palindroma')
    outputTest.innerText=('è palindroma')
    // console.log(newArray,newArrayReverse)
    }else{
    console.log('non è palindroma')
    outputTest.innerText=('non è palindroma')
    // console.log(newArray,newArrayReverse)
    }
   

}


//////////////////////////////////////
/* 
Pari e Dispari
L’utente sceglie pari o dispari
e inserisce un numero da 1 a 5.
Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
Sommiamo i due numeri
Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
Dichiariamo chi ha vinto.
*/

/*
-input inserire un numero da 1 a 5 
-button scegliere pari o dispari
-funzione per generare un numero random da 1 a 5
-sommare i due numeri
-funzione per stabilire se la somma sia para o dispari
-dichiarare chi ha vinto
*/

let numberUser = document.getElementById(('number-user'));
let buttonEven = document.getElementById('button-even');
let buttonOdd = document.getElementById('button-odd');
let outputResults = document.getElementById('output-results');
let somma = 0;
parseInt(numberUser.value)

buttonEven.addEventListener('click',function(){
    somma = 0;
    
    controlNumberUser(numberUser.value)
    
    somma += parseInt(numberUser.value)

    somma += randomNumber()

    outputResults.innerText=('somma ' +' ' + somma)
})


buttonOdd.addEventListener('click',function(){
    
    somma = 0;
    
    controlNumberUser(numberUser.value)
    
    somma += parseInt(numberUser.value)

    somma += randomNumber()

    outputResults.innerText=('somma ' +' ' + somma)
})










function randomNumber(){
    let random = Math.floor(Math.random() * (5 - 1 + 1) + 1)

    console.log('numero random' +' ' + random)
    return random

}


function controlNumberUser(number){

    if(number > 5||number == 0 ){
        alert('scegli un numero da 1 a 5' )
        number='';
        outputResults.style.display='none'

    }else{
        outputResults.style.display='block'

    }
    // console.log('numero utente' +' ' +number)
}