function openTaskUrl(url) {
    event.stopPropagation();  
    console.log(url);
    window.open(url, '_blank');
  }

  function handleTaskCompletion(taskId) {
    console.log(taskId);
    const taskElement = document.getElementById(taskId);
    const completed = taskElement.classList.toggle('completed');

    // if already completed, remove from localStorage
    if (completed) {
      localStorage.removeItem(taskId);
    } else {
      localStorage.setItem(taskId, true);
      // set completed to true
      taskElement.classList.add('completed');
    }
    updateTaskCounters();
    


  }

  function updateTaskCounters() {
      const totalTasks = document.getElementsByClassName('task').length;
      const completedTasks = document.getElementsByClassName('completed').length;
      document.getElementById('taskCounter').innerText = `${completedTasks}/${totalTasks}`;
  }
  
  var pomodoroCount = 0;
  var timeLeft = 25 * 60;
  var isBreak = false;
  var intervalId;

  function pausePomodoro() {
    clearInterval(intervalId);
  }

  function updateTimerDisplay(timeInputId, timerId, isBreakMode) {
    var minutes = Math.floor(timeLeft / 60);
    var seconds = timeLeft % 60;
    if (seconds < 10) seconds = "0" + seconds;
    var timerElement = document.getElementById(timerId);
    timerElement.innerText = `${minutes}:${seconds}`;
    timerElement.className = isBreakMode ? 'break' : 'pomodoro';
    
    // Обновление названия вкладки
    var titlePrefix = isBreakMode ? 'B' : 'P';
    document.title = `${titlePrefix}: ${minutes}:${seconds}`;
  }

  function startPomodoro() {
    clearInterval(intervalId);
    intervalId = setInterval(() => {
        timeLeft--;
        if (timeLeft < 0) {
            if (!isBreak) { // Если не перерыв, значит это помидоро
                handlePomodoroCompletion();
            }
            switchModes();
            return;
        }
        updateTimerDisplay(isBreak ? 'breakTime' : 'pomodoroTime', isBreak ? 'timerBreak' : 'timerPomodoro', isBreak);
    }, 1000);
    }

  function stopPomodoro() {
    clearInterval(intervalId);
    
    // Установка стандартных значений для таймеров
    document.getElementById('pomodoroTime').value = 25;
    document.getElementById('breakTime').value = 5;
    
    // Обновление отображения таймеров
    timeLeft = 25 * 60;
    updateTimerDisplay('pomodoroTime', 'timerPomodoro', false);
    timeLeft = 5 * 60;
    updateTimerDisplay('breakTime', 'timerBreak', true);
  }
  
  function handlePomodoroCompletion() {
    let completedPomodoros = Number(localStorage.getItem('pomodoroCount')) || 0;
    completedPomodoros++;
    localStorage.setItem('pomodoroCount', completedPomodoros);
    document.getElementById('pomodoroCount').innerText = completedPomodoros;
    switchModes();
}


  function createTasks() {

    let habrUrl = 'https://habr.com/ru/articles/486820/#';

    let jsQuestionsTasks = [
      {text: 'В чем разница между null и undefined?', url: `${habrUrl}1`},
      {text: 'Для чего используется оператор "&&"?', url: `${habrUrl}2`},
      {text: 'Для чего используется оператор "||"?', url: `${habrUrl}3`},
      {text: 'Является ли использование унарного плюса (оператор "+") самым быстрым способом преобразования строки в число?', url: `${habrUrl}4`},
      {text: 'Что такое DOM?', url: `${habrUrl}5`},
      {text: 'Что такое распространение события (Event Propogation)?', url: `${habrUrl}6`},
      {text: 'Что такое всплытие события (Event Bubbling)?', url: `${habrUrl}7`},
      {text: 'Что такое погружение события (Event Capturing)?', url: `${habrUrl}8`},
      {text: 'В чем разница между методами event.preventDefault() и event.stopPropagation()?', url: `${habrUrl}9`},
      {text: 'Как узнать об использовании метода event.preventDefault()?', url: `${habrUrl}10`},
      {text: 'Почему obj.someprop.x приводит к ошибке?', url: `${habrUrl}11`},
      {text: 'Что такое цель события или целевой элемент (event.target)?', url: `${habrUrl}12`},
      {text: 'Что такое текущая цель события (event.currentTarget)?', url: `${habrUrl}13`},
      {text: 'В чем разница между операторами "==" и "==="?', url: `${habrUrl}14`},
      {text: 'Почему результатом сравнения двух похожих объектов является false?', url: `${habrUrl}15`},
      {text: 'Для чего используется оператор "!!"?', url: `${habrUrl}16`},
      {text: 'Как записать несколько выражений в одну строку?', url: `${habrUrl}17`},
      {text: 'Что такое поднятие (Hoisting)?', url: `${habrUrl}18`},
      {text: 'Что такое область видимости (Scope)?', url: `${habrUrl}19`},
      {text: 'Что такое замыкание (Closures)?', url: `${habrUrl}20`},
      {text: 'Какие значения в JS являются ложными?', url: `${habrUrl}21`},
      {text: 'Как проверить, является ли значение ложным?', url: `${habrUrl}22`},
      {text: 'Для чего используется директива «use strict»?', url: `${habrUrl}23`},
      {text: 'Какое значение имеет this?', url: `${habrUrl}24`},
      {text: 'Что такое прототип объекта?', url: `${habrUrl}25`},
      {text: 'Что такое IIFE?', url: `${habrUrl}26`},
      {text: 'Для чего используется метод Function.prototype.apply?', url: `${habrUrl}27`},
      {text: 'Для чего используется метод Function.prototype.call?', url: `${habrUrl}28`},
      {text: 'В чем разница между методами call и apply?', url: `${habrUrl}29`},
      {text: 'Для чего используется метод Function.prototype.bind?', url: `${habrUrl}30`},
      {text: 'Что такое функциональное программирование и какие особенности JS позволяют говорить о нем как о функциональном языке программирования?', url: `${habrUrl}31`},
      {text: 'Что такое функции высшего порядка (Higher Order Functions)?', url: `${habrUrl}32`},
      {text: 'Почему функции в JS называют объектами первого класса (First-class Objects)?', url: `${habrUrl}33`},
      {text: 'Как бы Вы реализовали метод Array.prototype.map?', url: `${habrUrl}34`},
      {text: 'Как бы Вы реализовали метод Array.prototype.filter?', url: `${habrUrl}35`},
      {text: 'Как бы Вы реализовали метод Array.prototype.reduce?', url: `${habrUrl}36`},
      {text: 'Что такое объект arguments?', url: `${habrUrl}37`},
      {text: 'Как создать объект, не имеющий прототипа?', url: `${habrUrl}38`},
      {text: 'Почему в представленном коде переменная b становится глобальной при вызове функции?', url: `${habrUrl}39`},
      {text: 'Что такое ECMAScript?', url: `${habrUrl}40`},
      {text: 'Что нового привнес в JS стандарт ES6 или ECMAScript2015?', url: `${habrUrl}41`},
      {text: 'В чем разница между ключевыми словами «var», «let» и «const»?', url: `${habrUrl}42`},
      {text: 'Что такое стрелочные функции (Arrow Functions)?', url: `${habrUrl}43`},
      {text: 'Что такое классы (Classes)?', url: `${habrUrl}44`},
      {text: 'Что такое шаблонные литералы (Template Literals)?', url: `${habrUrl}45`},
      {text: 'Что такое деструктуризация объекта (Object Destructuring)?', url: `${habrUrl}`},
      {text: 'Что такое модули (Modules)?', url: `${habrUrl}47`},
      {text: 'Что такое объект Set?', url: `${habrUrl}48`},
      {text: 'Что такое функция обратного вызова (Callback Function)?', url: `${habrUrl}49`},
      {text: 'Что такое промисы (Promises)?', url: `${habrUrl}50`},
      {text: 'Что такое async/await?', url: `${habrUrl}51`},
      {text: 'В чем разница между spread-оператором и rest-оператором?', url: `${habrUrl}52`},
      {text: 'Что такое параметры по умолчанию (Default Parameters)?', url: `${habrUrl}53`},
      {text: 'Что такое объектная обертка (Wrapper Objects)?', url: `${habrUrl}54`},
      {text: 'В чем разница между явным и неявным преобразованием или приведением к типу (Implicit and Explicit Coercion)?', url: `${habrUrl}55`},
      {text: 'Что такое NaN? Как проверить, является ли значение NaN?', url: `${habrUrl}56`},
      {text: 'Как проверить, является ли значение массивом?', url: `${habrUrl}57`},
      {text: 'Как проверить, что число является четным, без использования деления по модулю или деления с остатком (оператора "%")?', url: `${habrUrl}58`},
      {text: 'Как определить наличие свойства в объекте?', url: `${habrUrl}59`},
      {text: 'Что такое AJAX?', url: `${habrUrl}60`},
      {text: 'Как в JS создать объект?', url: `${habrUrl}61`},
      {text: 'В чем разница между методами Object.freeze и Object.seal?', url: `${habrUrl}62`},
      {text: 'В чем разница между оператором «in» и методом hasOwnProperty?', url: `${habrUrl}63`},
      {text: 'Какие приемы работы с асинхронным кодом в JS Вы знаете?', url: `${habrUrl}64`},
      {text: 'В чем разница между обычной функцией и функциональным выражением?', url: `${habrUrl}65`},
      {text: 'Как в JS вызвать функцию?', url: `${habrUrl}66`},
      {text: 'Что такое запоминание или мемоизация (Memoization)?', url: `${habrUrl}67`},
      {text: 'Как бы Вы реализовали вспомогательную функцию запоминания?', url: `${habrUrl}68`},
      {text: 'Почему typeof null возвращает object? Как проверить, является ли значение null?', url: `${habrUrl}69`},
      {text: 'Для чего используется ключевое слово «new»?', url: `${habrUrl}70`}
    ]


    let branches = [
      {
        title: 'Алгоритмы сортировки',
        tasks: [
          {text: 'Bubble Sort: "Sort Colors" (№75)', url: 'https://leetcode.com/problems/sort-colors/description/'},
          {text: 'Quick Sort: "Kth Largest Element in an Array" (№215)', url: 'https://leetcode.com/problems/kth-largest-element-in-an-array/'}
        ]
      },
      {
        title: 'Разворот одно/двусвязного списка',
        tasks: [
          {text: '"Reverse Linked List" (№206)', url: 'https://leetcode.com/problems/reverse-linked-list/'},
          {text: '"Reverse Linked List II" (№92)', url: 'https://leetcode.com/problems/reverse-linked-list-ii/'}
        ]
      },
      {
        title: 'Разворот строки',
        tasks: [
          {text: '"Reverse String" (№344)', url: 'https://leetcode.com/problems/reverse-string/'},
          {text: '"Reverse String II" (№541)', url: 'https://leetcode.com/problems/reverse-string-ii/'}
        ]
      },
      {
        title: 'Обход дерева',
        tasks: [
          {text: '"Binary Tree Inorder Traversal" (№94)', url: 'https://leetcode.com/problems/binary-tree-inorder-traversal/'},
          {text: '"Binary Tree Preorder Traversal" (№144)', url: 'https://leetcode.com/problems/binary-tree-preorder-traversal/'},
          {text: '"Binary Tree Postorder Traversal" (№145)', url: 'https://leetcode.com/problems/binary-tree-postorder-traversal/'},
          {text: '"Binary Tree Level Order Traversal" (№102)', url: 'https://leetcode.com/problems/binary-tree-level-order-traversal/'}
        ]
      },
      {
        title: 'JavaScript вопросы',
        tasks: jsQuestionsTasks
      }
    ]


    const roadmapContainer = document.getElementById('roadmap-container');
    for (let i = 0; i < branches.length; i++) {
      let branch = document.createElement('div');
      branch.className = 'branch';
      let branchTitle = document.createElement('div');
      branchTitle.className = 'branch-title';
      branchTitle.innerText = branches[i].title;
      branch.appendChild(branchTitle);
      for (let j = 0; j < branches[i].tasks.length; j++) {
        let task = branches[i].tasks[j];
        let taskElement = document.createElement('label');
        taskElement.className = 'task';
        taskElement.id = 'task' + (i * branches[i].tasks.length + j);
        let checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.className = 'filled-in';
        checkbox.setAttribute('onclick', `handleTaskCompletion('${taskElement.id}')`);
        checkbox.setAttribute('onchange', `handleTaskCompletion('${taskElement.id}')`);
        taskElement.appendChild(checkbox);
        let span = document.createElement('span');
        span.innerText = task.text;
        taskElement.appendChild(span);
        taskElement.appendChild(document.createElement('br'));
        if (task.url) {
          let button = document.createElement('button');
          button.className = 'btn-small green';
          button.setAttribute('onclick', `openTaskUrl('${task.url}')`);
          let icon = document.createElement('i');
          icon.className = 'material-icons';
          icon.innerText = 'insert_link';
          button.appendChild(icon);
          taskElement.appendChild(button);
        }
        branch.appendChild(taskElement);
      }
      roadmapContainer.appendChild(branch);
    }
  }


  function switchModes() {
    if (isBreak) {
      var pomodoroTime = document.getElementById('pomodoroTime').value;
      timeLeft = pomodoroTime * 60;
      isBreak = false;

      // Обновляем таймер Break
      updateTimerDisplay('breakTime', 'timerBreak', true);

      // Переключаем вкладку на Pomodoro
      var instance = M.Tabs.getInstance(document.querySelector('.tabs'));
      instance.select('pomodoro');
    } else {
      var breakTime = document.getElementById('breakTime').value;
      timeLeft = breakTime * 60;
      isBreak = true;
      pomodoroCount++;
      document.getElementById('pomodoroCount').innerText = pomodoroCount;

      // Звуковой алерт
      document.getElementById('audio').play();

      // Обновляем таймер Pomodoro
      updateTimerDisplay('pomodoroTime', 'timerPomodoro', false);

      // Переключаем вкладку на Break
      var instance = M.Tabs.getInstance(document.querySelector('.tabs'));
      instance.select('break');
    }
  }


  document.addEventListener('DOMContentLoaded', (event) => {


    createTasks()
    const tasks = document.getElementsByClassName('task');
    for (let i = 0; i < tasks.length; i++) {
        const taskId = tasks[i].id;
        const completed = localStorage.getItem(taskId) === 'true';
        if (completed) {
          tasks[i].classList.add('completed');
          tasks[i].querySelector('input').checked = true;
        }
    }
    updateTaskCounters();
    M.Tabs.init(document.querySelector('.tabs'));

    // Добавляем события click для вкладок
    document.querySelector('.tab a[href="#pomodoro"]').addEventListener('click', () => {
      document.getElementById('pomodoroTime').value = 25;
      timeLeft = 25 * 60;
      isBreak = false;
      updateTimerDisplay('pomodoroTime', 'timerPomodoro', false);
      stopPomodoro();
      document.title = 'Roadmap'; // Сбрасываем название вкладки
    });

    document.querySelector('.tab a[href="#break"]').addEventListener('click', () => {
      document.getElementById('breakTime').value = 5;
      timeLeft = 5 * 60;
      isBreak = true;
      updateTimerDisplay('breakTime', 'timerBreak', true);
      stopPomodoro();
      document.title = 'Roadmap'; // Сбрасываем название вкладки
    });

    document.getElementById('pomodoroTime').addEventListener('change', (event) => {
      if (!isBreak) {
        timeLeft = event.target.value * 60;
        updateTimerDisplay('pomodoroTime', 'timerPomodoro', false);
      }
    });

    document.getElementById('breakTime').addEventListener('change', (event) => {
      if (isBreak) {
        timeLeft = event.target.value * 60;
        updateTimerDisplay('breakTime', 'timerBreak', true);
      }
    });

    updateTimerDisplay('pomodoroTime', 'timerPomodoro', false);
    updateTimerDisplay('breakTime', 'timerBreak', true);

    const completedPomodoros = localStorage.getItem('pomodoroCount') || 0;
    document.getElementById('pomodoroCount').innerText = completedPomodoros;
   
  
});
