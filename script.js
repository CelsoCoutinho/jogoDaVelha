var squares = document.querySelectorAll('.square');
var currentPlayer = 'X';
var winner = false;

for (var i = 0; i < squares.length; i++) {
    squares[i].addEventListener('click', function (event) {
        if (event.target.textContent === '') {
            event.target.textContent = currentPlayer;
            if (checkForWinner(currentPlayer)) {
                winner = true;
                alert(currentPlayer + ' é o vencedor!');
                resetBoard();
            } else if (checkForTie()) {
                alert('Empate!');
                resetBoard();
            } else {
                currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
            }
        }
    });
}

function checkForWinner(player) {
    var winningCombos = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];

    for (var i = 0; i < winningCombos.length; i++) {
        var combo = winningCombos[i];
        if (squares[combo[0]].textContent === player &&
            squares[combo[1]].textContent === player &&
            squares[combo[2]].textContent === player) {
            return true;
        }
    }

    return false;
}

function checkForTie() {
    for (var i = 0; i < squares.length; i++) {
        if (squares[i].textContent === '') {
            return false;
        }
    }
    return true;
}

function resetBoard() {
    for (var i = 0; i < squares.length; i++) {
        squares[i].textContent = '';
    }
    currentPlayer = 'X';
    winner = false;
}