function startGame() {
    let startBtn = document.querySelector('.start-game');
    let overlay = document.querySelector('.overlay');
    let cancel = document.querySelector('.cancel-game');

    startBtn.addEventListener('click', function () {
        overlay.style.display = 'flex';
    });
}
startGame();

function close() {
    let cancel = document.querySelector('.cancel-game');

    document.querySelector('.overlay').style.display = 'none';

    cancel.addEventListener('click', function () {
        document.querySelector('.overlay').style.display = 'none';
        document.querySelector('.init-title').innerHTML =
            'Введите диапазон чисел чтобы я мог загадать число';
        document.querySelector('.init-title').style.color =
            'rgba(0, 0, 0, 0.5)';
        let minInput = document.querySelector('.init-input_1'),
            maxInput = document.querySelector('.init-input_2');
        minInput.value = 0;
        maxInput.value = 0;
    });
}

close();

function getValue() {
    let minNum = document.querySelector('.min'),
        maxNum = document.querySelector('.max'),
        minInput = document.querySelector('.init-input_1'),
        maxInput = document.querySelector('.init-input_2'),
        title = document.querySelector('.init-title'),
        maxValue,
        minValue;

    minInput.addEventListener('change', function () {
        minValue = minInput.value;
        if (minValue < 0 || minValue % 1 !== 0) {
            title.innerHTML =
                'Вы ввели неверный диапазон, введите пожалуйста только целые и положительные числа!';
            title.style.color = 'red';
            title.style.fontSize = '20px';
            minValue = 0;
            document.querySelector('.game-title').innerHTML =
                'Вы ввели неверный диапазон, введите пожалуйста только целые и положительные числа!';
        }
        minNum.innerHTML = minValue;
        updateRandomNum();
        close();
    });
    maxInput.addEventListener('change', function () {
        maxValue = maxInput.value;
        if (maxValue < 0 || maxValue % 1 !== 0) {
            title.innerHTML =
                'Вы ввели неверный диапазон, нельзя указать отрицательное и нецелое число!';
            title.style.color = 'red';
            title.style.fontSize = '20px';
            maxValue = 0;
            document.querySelector('.game-title').innerHTML =
                'Вы ввели неверный диапазон, введите пожалуйста только целые и положительные числа!';
        }
        maxNum.innerHTML = maxValue;
        updateRandomNum();
        close();
    });

    function updateRandomNum() {
        let randomNum = Math.floor(
            Math.random() * (maxValue - minValue) + minValue
        );
        let result = document.querySelector('.result-text');
        result.innerHTML = randomNum;
    }

    console.log(maxValue);
}

getValue();

// function randomNumber() {
//     let
// }
