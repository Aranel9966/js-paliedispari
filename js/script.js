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

let numberUser = document.getElementById('number-user');
let buttonEven = document.getElementById('button-even');
let buttonOdd = document.getElementById('button-odd');
let outputResults = document.getElementById('output-results');

buttonEven.addEventListener('click',function(){
    
    controlNumberUser(numberUser)
    
})

buttonOdd.addEventListener('click',function(){
    
    controlNumberUser(numberUser)
    
})








function controlNumberUser(number){
    if(number.value > 5||number.value == 0 ){
        alert('scegli un numero da 1 a 5' )
        number.value='';
    }
    console.log(number.value)
}