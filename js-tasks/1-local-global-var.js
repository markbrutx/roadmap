var globalVar = "I'm global!";

function testScope() {
    var localVar = "I'm local!";
    console.log(globalVar);
    console.log(localVar);
}

testScope();
console.log(globalVar);
console.log(localVar);

// Попытайтесь предсказать, что будет выведено в консоли, 
// затем запустите код и проверьте себя.











// ОТВЕТ

// Область видимости в JavaScript (JS)
// Область видимости в JS определяет доступность переменных, 
// функций и объектов в некоторой части вашего кода во время выполнения. 
// В JS есть два типа области видимости: глобальная и локальная.
// Если переменная объявлена вне всех функций, она является глобальной переменной и доступна в любой части кода. 
// Локальные переменные объявляются внутри функции и доступны только внутри этой функции и вложенных в нее функциях.

// Ответ по коду

// В представленном коде первые два console.log 
// в функции testScope выведут строки "I'm global!" и "I'm local!" соответственно. 
// Переменная globalVar доступна в любом месте кода, а переменная localVar доступна внутри функции testScope,
// где она была объявлена. После вызова функции testScope, 
// попытка вывода localVar с помощью console.log вызовет ошибку ReferenceError, 
// потому что localVar не определена в глобальной области видимости.