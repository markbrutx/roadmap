// Как работает ключевое слово "this" в JavaScript?

const obj = {
    name: 'John',
    sayHello: () => {
        console.log(this)
        console.log(`Hello, ${this.name}!`);
    }
};

obj.sayHello(); // что будет выведено?
  
// path js-tasks/8-this.js

// func 


// function myFunc() {
//     let a = 0;
//     return a;
// }

// myFunc();



/////////////

// Устный ответ: Ключевое слово "this" в JavaScript 
// ссылается на текущий объект, 
// контекст которого определяется во время выполнения функции.



// Задача для практики:
// Обширный ответ с пояснениями:

// В данном примере, при вызове метода sayHello на объекте obj, 
// ключевое слово this ссылается на сам объект obj. 
// Поэтому выводится "Hello, John!".

// obj.bind()

