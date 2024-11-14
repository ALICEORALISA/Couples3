function gameLogic(card) {
    Couple.first = null;
    Couple.second = null;
    Couple.firstClickable = true;
    Couple.secondClikable = true;

    // Если обе карточки не кликабельны, ничего не делаем
if (!Couple.firstClickable && !Couple.secondClikable) return;

// Переворачиваем карточку
card.classList.add('flip');
totalFlips ++;

// Проверяем, кликнута ли первая карточка
if (couple.first === null) {
// Если нет, то сохраняем на нее ссылку и считаем кликнутой
couple.first = true;
couple.firstClickable = false;
} else if (couple.second === false && couple.first !== card) {
// Если да, то проверяем, кликнута ли вторая карточка и не является ли вторая карточка той же самой карточкой, что и первая, и если нет, то сохраняем ссылку на эту карточку и считаем ее кликнутой
couple.second = true;
couple.secondClickable = false;
}
// Если какой-либо карточки не кликнуто, ничего не делаем
if (couple.first === null || couple.second === null) return;

// Сравниваем классы двух карточек и сохраняем логический результат в переменную (это для повышения читабельности)
const isEqual = couple.first.firstElementChild.classList[2] === couple.second.firstElementChild.classList[2];

// Если классы одинаковы
if (isEqual) {
setTimeout(() => {
  // То перекрашиваем их в зеленый с задержкой в 1 секунду
  couple.first.classList.add('successfully');
  couple.second.classList.add('successfully');

  // Сбрасываем все ссылки и состояния
  refresh();
}, 1000);
} else {
setTimeout(() => {
  // Иначе переворачиваем карточки обратно с задержкой в 1 секунду
  couple.first.classList.remove('flip');
  couple.second.classList.remove('flip');

  // Сбрасываем все ссылки и состояния
  refresh();
}, 1000);
}
// Функция сброса ссылок и состояний
function refresh() {
couple.first = null;
couple.second = null;
couple.firstClickable = true;
couple.secondClickable = true;
}
}

function isWin() {
    const gameTable = document.querySelector('.table');
    if (Array.from(gameTable.children).every((card) => card.classList.contains('flip'))) {
      setTimeout(() => {
        alert("Победа");
        if(totalTime == 0) {
          clearInterval(intervalId);
      };
      }, 1000)
    }
  }

gameLogic();
isWin();
startTimer();