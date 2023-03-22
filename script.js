function startGame() {
    let startBtn = document.querySelector('.start-game');
    let overlay = document.querySelector('.overlay');
    let cancel = document.querySelector('.cancel-game');

    startBtn.addEventListener('click', function () {
        overlay.style.display = 'flex';
    });

    cancel.addEventListener('click', function () {
        overlay.style.display = 'none';
    });
}
startGame();

function getValue() {
    let minNum = document.querySelector('.min'),
        maxNum = document.querySelector('.max'),
        minInput = document.querySelector('.init-input_1'),
        maxInput = document.querySelector('.init-input_2'),
        maxValue,
        minValue;

    minInput.addEventListener('change', function () {
        minValue = minInput.value;
        minNum.innerHTML = minValue;
        updateRandomNum();
    });
    maxInput.addEventListener('change', function () {
        maxValue = maxInput.value;
        maxNum.innerHTML = maxValue;
        updateRandomNum();
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
