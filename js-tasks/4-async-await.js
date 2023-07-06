// Как работают async/await в JavaScript?





function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
  
async function asyncFunction() {
    console.log('Start');
    await delay(2000);
    console.log('End');
}

asyncFunction();



// Устный ответ: Ключевые слова async и await используются
//  в JavaScript для работы с асинхронными операциями. 
// async позволяет объявить функцию асинхронной, 
// а await приостанавливает выполнение функции до завершения 
// асинхронной операции и возвращает результат.


// Обширный ответ с пояснениями:

// В данном примере функция asyncFunction объявлена с ключевым словом async, 
// что позволяет использовать await внутри неё. 
// Вызов функции delay(2000) внутри await приостанавливает выполнение функции asyncFunction на 2 секунды, 
// а затем выводит "End".
// async/await позволяют писать асинхронный код в более линейном стиле, 
// делая его более понятным и удобным для разработчика.