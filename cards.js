function createCard(icon) {
    const cardTemplate = document.querySelector('#cardTemplate').cloneNode(true).content;
    const card = template.querySelector('.card');
    cardTemplate.classList.add(`fa-${flippedIcon}`);
    card.addEventListener('click', () => gameLogic(card));
  }

  function createIconsArray(initialCount) {
    cardsIcons["compass", "cloud", "play", "bolt", "stop", "cogs", "atom", "basketball-ball", "arrows", "angle-left", "bars", "file", "filter", "gear", "folder", "folder-open", "shield", "scissors", "pen-clip"];
    const cardsIcons = [
      "compass",
      "cloud",
      "play",
      "bolt",
      "stop",
      "cogs",
      "atom",
      "basketball-ball",
      "arrows",
      "angle-left",
      "bars",
      "file",
      "filter",
      "gear",
      "folder",
      "folder-open",
      "shield",
      "scissors",
      "pen-clip",
    ];
    // slice - метод, который возвращает только некоторые элементы массива, начиная 0-м и заканчивая, например, 2-м, 8-м или 18-м
    let cards = cardsIcons.slice(0, Math.floor(initialCount / 2));
    const doubleCards = dublicateElements(cards);
    }

    function dublicateElements(array) {
        const empty = [];
        array.forEach((item) => {
          empty.push(item, item);
        });
        return empty;
        }
        
        function shuffleArray(array) {
        let currentIndex = array.length;
        while(currentIndex > 0) {
          currentIndex - 1;
          const randomIndex = Math.floor(Math.random * currentIndex);
        
          const temp = array[currentIndex];
          array[currentIndex] = array[randomIndex];
          array[randomIndex] = temp;
        };
          return array;
        } 

    createCard();
    createIconsArray(shuffleArray);
    dublicateElements();
    shuffleArray();