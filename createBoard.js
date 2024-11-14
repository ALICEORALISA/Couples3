const gameBoard = document.querySelector(".board");
const startButton = form.querySelector('.board__button');
const input = form.querySelector('.board__input');

startButton.addEventListener("click", (event) => {
    event.preventDefault()
    let columns = input.value;
    let count;
    if (columns >= 2 && columns <= 6 && columns % 2 == 0) {
      count = columns * columns;
    } else {
      input.value = 4;
    }
    createBoard();
  });

  function createBoard(count, columns) {
    gameBoard.textContent = "";
    const gameTableTemplate = document.querySelector('.gameTableTemlate').cloneNode(true).content;
    const gameTable = template.querySelector('.table');
    const restartButton = template.querySelector('.table__button');
    const icons = createIconsArray(array.cards);
    icons.forEach((icon) => {
      gameTable.append(createCard(icon));
    });
    // for (let i =0; i<count; i++) {
    //   gameTable.append(createCard());
    // }
    gameTable.style = `
      grid-template-columns: repeat(${columns}, 1fr);
      grid-template-rows: repeat(${columns}, 1fr);
    `;
    gameBoard.append(gameTable);
    restartButton.addEventListener('click', () => {
      location.reload();
    });
    gameBoard.append(restartButton);
  
  };

  createBoard();