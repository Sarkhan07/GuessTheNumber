let minInput = document.querySelector('.init-input_1'),
    maxInput = document.querySelector('.init-input_2'),
    randomNum,
    attempt = 5,
    result = document.querySelector('.result-text');

function startGame() {
    let startBtn = document.querySelector('.start-game');
    let overlay = document.querySelector('.overlay');

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
        minInput.value = '';
        maxInput.value = '';
        attempt = 5;
        result.innerHTML = '';
    });
}

close();

function getValue() {
    let minNum = document.querySelector('.min'),
        maxNum = document.querySelector('.max'),
        title = document.querySelector('.init-title'),
        minValue,
        maxValue;

    minInput.addEventListener('change', function () {
        minValue = minInput.value;
        if (minValue < 0 || minValue % 1 !== 0) {
            title.innerHTML =
                'Вы ввели неверный диапазон, введите пожалуйста только целые и положительные числа!';
            title.style.color = 'red';
            title.style.fontSize = '20px';
            minValue = '';
            document.querySelector('.game-title').innerHTML =
                'Вы ввели неверный диапазон, введите пожалуйста только целые и положительные числа!';
        }
        minNum.innerHTML = minValue;
        // updateRandomNum();
        // close();
    });
    maxInput.addEventListener('change', function () {
        maxValue = maxInput.value;
        if (maxValue < 0 || maxValue % 1 !== 0) {
            title.innerHTML =
                'Вы ввели неверный диапазон, введите пожалуйста только целые и положительные числа!';
            title.style.color = 'red';
            title.style.fontSize = '20px';
            maxValue = 0;
            document.querySelector('.game-title').innerHTML =
                'Вы ввели неверный диапазон, введите пожалуйста только целые и положительные числа!';
        }
        maxNum.innerHTML = maxValue;
        updateRandomNum();
        // close();
    });
    let alreadyClicked = false;
    function updateRandomNum() {
        if (!alreadyClicked) {
            alreadyClicked = true;
        }
        randomNum =
            Math.floor(Math.random() * (+maxValue - +minValue + 1)) + +minValue;

        console.log(
            'max' + maxValue + '' + 'min' + minValue + 'random ' + randomNum
        );
    }

    let checkNum = document.querySelector('.check');

    checkNum.addEventListener('click', getAttempt);

    function getAttempt() {
        attempt--;
        let gameInput = document.querySelector('.game-form-input'),
            difference_1 = Math.abs(randomNum - gameInput.value),
            difference_2 = Math.abs(100 - randomNum - gameInput.value);

        console.log('ran' + randomNum);
        console.log('game' + gameInput.value);

        if (+randomNum == +gameInput.value) {
            result.innerHTML = `Поздравляю! Вы угадали задуманное число за ${
                5 - attempt
            } попытки`;
            result.style.color = 'green';
        } else if (difference_1 < difference_2) {
            result.innerHTML = `Не угадал, холоднее… Осталось ${attempt} попыток`;
        } else {
            result.innerHTML = `Не угадал, но теплее!!! Осталось ${attempt} попыток`;
        }

        if (attempt <= 0) {
            result.innerHTML = `Вы проиграли`;
            attempt = 0;
            result.style.color = 'red';
        }
    }
    updateRandomNum();
}

getValue();
