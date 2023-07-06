

function outerFunction(a) {
    return function innerFunction(b) {
        console.log('a:', a);
        console.log('b:', b);
    }
}

const newFunction = outerFunction('1');
newFunction('2');  
newFunction('3');





// Logs: outerVariable: outside innerVariable: inside












// Замыкания в JS - это функции, которые имеют доступ
// к переменным из своей внешней функции, 
// даже после того, как внешняя функция завершила выполнение.


// В данном примере, innerFunction имеет доступ 
// к переменной outerVariable даже после того, 
// как outerFunction завершила выполнение. 
// Это и есть замыкание: функция innerFunction замкнула 
// в себе контекст outerFunction, 
// включая все ее локальные переменные, и имеет к ним доступ.