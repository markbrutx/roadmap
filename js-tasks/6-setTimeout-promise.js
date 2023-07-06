Promise.resolve(10)
  .then(e => console.log(e)) // 10
  .then(e => Promise.resolve(e))
  .then(console.log) // undefined
  .then(e => {
    if (!e) {
      throw 'Error caught';
    }
  })
  .catch(e => {
    console.log(e); // Object {message: "Error caught"}
    return new Error('New error');
  })
  .then(e => {
    console.log(e.message); // New error
  })
  .catch(e => {
    console.log(e.message); // ??
  });

// path js-tasks/6-setTimeout-promise.js




// const myPromise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve('Promise resolved')
//     }, 2000);
// });
  
// myPromise
// .then(value => {
//     console.log(value);  // Logs: 'Promise resolved'
// })
// .catch(error => {
//     console.log(error);
// });



// setTimeout позволяет запланировать выполнение 
// функции через определенное время,
// fetch позволяет асинхронно загружать информацию из сети, 
// а Promise - это объект, 
// представляющий конечный результат асинхронной операции.

// В этом примере мы создаем промис, который будет выполнен через 2 секунды с результатом 'Promise resolved'. 
// Метод then используется для обработки результата промиса, 
// а catch - для обработки возможных ошибок. 
// Благодаря промисам мы можем структурированно обрабатывать результаты асинхронных операций.