// Что такое CORS в контексте JavaScript и для чего он нужен?
const url = 'https://api.example.com/data';

fetch(url, {
  method: 'GET',
  mode: 'cors'
})
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.log(error));









// Устный ответ: CORS (Cross-Origin Resource Sharing) - это механизм безопасности веб-браузеров, 
// который регулирует доступ к ресурсам между разными источниками (origin)
// на основе политики одного источника (Same-Origin Policy).


// В этом примере мы используем функцию fetch для отправки GET-запроса 
// на указанный URL 'https://api.example.com/data'. 
// Устанавливая опцию mode в значение 'cors', мы указываем браузеру, 
// что отправляемый запрос должен использовать CORS. 
// Браузер выполнит предварительный "префлайт" запрос на сервер, 
// чтобы проверить разрешены ли запросы с указанного источника, 
// и только после получения разрешения отправит основной запрос. 
// Затем мы обрабатываем полученный ответ с помощью методов then и catch.

// Обратите внимание, что на сервере также должна быть настроена поддержка CORS 
// для разрешения доступа к ресурсам с определенных источников (origin). 
// Это делается путем настройки соответствующих заголовков ответа на сервере.

// Пример показывает, как использовать CORS 
// для безопасного обмена данными между разными доменами или источниками в JavaScript.