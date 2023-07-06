function Person(first, last, age, gender, interests) {
    this.name = {first, last};
    this.age = age;
    this.gender = gender;
    this.interests = interests;
  };
  
Person.prototype.greeting = function() {
console.log(`Hi! I'm ${this.name.first}`);
};

let person1 = new Person('Bob', 'Smith', 32, 'male', ['music', 'skiing']);
person1.greeting();  






// Logs: Hi! I'm Bob

  


// Прототип - это объект, который используется в JavaScript 
// для реализации наследования и повторного использования кода.








// Здесь у нас есть функция-конструктор Person. 
// У любого объекта, созданного этой функцией, 
// будет доступ к методу greeting через свойство prototype. 
// Этот метод будет в наличии у всех объектов типа Person, 
// но хранится только в одном месте в памяти.



// Path: js-tasks/4-this.js