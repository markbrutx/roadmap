// Что такое "hoisting" в JavaScript?



let a = 5;

function myFunc(){
    console.log(a);
    var b = 3;
    console.log(b);
}

myFunc();

// path js-tasks/7-hosting.js

// приколы вара
// for (let a = 0; a < 5; a++){ 
//     setTimeout(() => { console.log(a); }, 100) 
// } 
// for (let a = 0; a < 5; a++){ 
//     setTimeout(() => {
//      console.log(a); 
//     }, 100) 
// }






// console.log(myVar); // что будет выведено?
// var myVar = 5;

// // FUNCTION DECLARATION


// function myFunc() {
//     let a = 0;
//     return () => {
//         a++;
//         console.log(a);
//     }
// }

// let b = myFunc();
// b(); // 1
// b(); // 2



// path js-tasks/7-hosting.js






// ОТВЕТ
// Устный ответ: Hoisting - это механизм в JavaScript, 
// когда переменные и объявления функций "поднимаются" 
// на верх своей области видимости перед выполнением кода.


// В этом коде будет выведено undefined. Переменная myVar "всплывает" 
// до начала области видимости, 
// но присваивание значения 5 происходит только в месте объявления. 
// Поэтому перед этим моментом значение myVar будет undefined.