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
let outputResultsNumber = document.getElementById('output-results-number');
let outputResults = document.getElementById('output-results');
let somma ;


buttonEven.addEventListener('click',function(){
    
    even=true
    
    somma = 0;
    
    let pcNumber = randomNumber();

    somma += parseInt(controlNumberUser(numberUser.value));

    somma += pcNumber;

    outputResultsNumber.innerText=(`Il tuo numero è: ${numberUser.value} \n Il numero del pc è: ${pcNumber} \n La somma è: ${somma}`);
    
    evenOrOdd(somma,even);

    numberUser.value='';

})


buttonOdd.addEventListener('click',function(){
    
    even=false;
    
    somma = 0;

    let pcNumber = randomNumber();

    somma += parseInt(controlNumberUser(numberUser.value));

    somma += pcNumber;

    outputResultsNumber.innerText=(`Il tuo numero è: ${numberUser.value} \n Il numero del pc è: ${pcNumber} \n La somma è: ${somma}`);

    evenOrOdd(somma,even);
    
    numberUser.value='';
})


// function///////////////////////////////////

function evenOrOdd(somma,even){
    if(even ){

        if(somma % 2 == 0){
            outputResults.innerText=('hai vinto')
        }else{
            outputResults.innerText=('hai perso')
    
        }
    }else if(!even){
        if(somma % 2 == 0){
            outputResults.innerText=('hai perso')
        }else{
            outputResults.innerText=('hai vinto')
    
        }
    }
}


function randomNumber(){
    let random = Math.floor(Math.random() * (5 - 1 + 1) + 1)

    return random
}


function controlNumberUser(number){

    if(number > 5 || number == 0 ){
        alert('scegli un numero da 1 a 5' )
        outputResults.style.display='none'
        outputResultsNumber.style.display='none'
        

    }else{
        outputResults.style.display='block'
        outputResultsNumber.style.display='block'

    }
    return number
    
    // console.log('numero utente' +' ' +number)
}