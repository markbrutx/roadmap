// Как обрабатывать исключения в JavaScript?

try {
    // Код, который может вызвать исключение
    const result = 10 / 0; 
    console.log(result);
} catch (error) {
    // Обработка исключения
    console.log('An error occurred:', error);
}






















// Устный ответ: Исключения в JavaScript обрабатываются 
// с помощью блока try-catch. 
// Код, который может вызвать исключение, помещается в блок try, 
// а обработка исключения выполняется в блоке catch.

// Обширный ответ с пояснениями:

// В приведенном примере кода операция деления на ноль вызывает исключение,
// которое перехватывается блоком catch. В блоке catch можно обрабатывать исключение,
// выводить сообщения об ошибке или выполнять другие действия в зависимости от типа ошибки. 
// Обработка исключений помогает предотвратить сбои в работе программы 
// и обеспечивает более плавное выполнение кода.


