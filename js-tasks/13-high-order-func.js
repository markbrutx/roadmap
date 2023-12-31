// Что такое функция высшего порядка в JavaScript?


function multiplyBy(n) {
    return function(x) {
      return x * n;
    };
}


const multiplyByTwo = multiplyBy(2);
console.log(multiplyByTwo(5));  // Logs: 10
  



















// Устный ответ: Функция высшего порядка - это функция, 
// которая принимает одну или несколько функций 
// в качестве аргументов или возвращает 
// другую функцию в качестве результата.

// Обширный ответ с пояснениями:

// В данном примере функция multiplyBy является функцией высшего порядка,
// так как она принимает аргумент n и возвращает другуюфункцию, 
// которая умножает число x на n. Затем мы создаем новую функцию multiplyByTwo с помощью multiplyBy(2), 
// которая умножает число на 2. Вызов multiplyByTwo(5) возвращает результат 10.