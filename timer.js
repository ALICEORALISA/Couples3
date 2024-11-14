var totalTime;
var totalFlips;
var intervalId;

function startTimer() {
    const time = document.querySelector('state__time');
    const moves = document.querySelector('state__moves');

    totalTime = minutes * 60 + seconds;

    intervalId = setInterval(() => {
        totalTime --;
        moves.textContent = 'Шаги: ${totalFlips} Шагов';
        time.textContent = 'Время: ${totalTime} Секунд';
        if(totalTime == 0) {
            clearInterval(intervalId);
        }
    }, 1000);
}