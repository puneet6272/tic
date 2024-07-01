// Select all the game variables 
const gameCells = document.querySelectorAll('.cell')
const player1 = document.querySelector('.player1')
const player2 = document.querySelector('.player2')
const restartButton = document.querySelector('.rstbtn')
const trun = document.querySelector('.turn')
const winner = document.querySelector('.player')
const winnerBackGroundClass = document.querySelector('.winCont')
console.log(gameCells)


// Var for games
let currentPlayer = "X"
let nexPlayer = "O"
let playTrun = currentPlayer


const startGame = () => {
    gameCells.forEach(cell => {
        cell.addEventListener("click", handleClick)
    })
}

const handleClick = (e) => {
    if (e.target.textContent === '') {
        e.target.textContent = playTrun
    }
    if (checkWin()) {
        console.log(`${playTrun} wins`)
        disbaleCell()
        winnerBackGroundClass.classList.add('bgAdd')
        winner.textContent = `${playTrun} wins`
    } else if (checkTie()) {
        console.log('Tie')
        winnerBackGroundClass.classList.add('bgAdd')
        winner.textContent = `Its a Tie`
    } else {
        changePlayerTurn()
    }
    trun.textContent = `Turn: ${playTrun}`
}


const changePlayerTurn = () => {

    gameCells.forEach(cell => {
        if (cell.textContent !== '') {
            cell.removeEventListener('click', handleClick)
        } else {
            cell.addEventListener('click', handleClick)
        }
    })

    if (playTrun === currentPlayer) {
        playTrun = nexPlayer
    } else {
        playTrun = currentPlayer
    }

}


const checkWin = () => {
    const winCond = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ];


    for (let i = 0; i < winCond.length; i++) {
        const [a, b, c] = winCond[i];

        if (gameCells[a].textContent !== '' && gameCells[a].textContent === gameCells[b].textContent && gameCells[b].textContent === gameCells[c].textContent) {

            gameCells[a].classList.add('winCellBg')
            gameCells[b].classList.add('winCellBg')
            gameCells[c].classList.add('winCellBg')
            return true;
        }
    }
    return false;

}

const checkTie = () => {
    return [...gameCells].every(cell => cell.textContent !== '')
}

const disbaleCell = () => {
    gameCells.forEach(cell => {
        cell.removeEventListener('click', handleClick)
        cell.classList.add('disabled')
    })
}

restartButton.addEventListener('click', () => {
    gameCells.forEach(cell => {
        cell.textContent = ''
        cell.classList.remove('disabled')
    })
    currentPlayer = "X"
    nexPlayer = "O"
    playTrun = currentPlayer
    winnerBackGroundClass.classList.remove('bgAdd')

    gameCells.forEach(cell => {
        cell.removeEventListener('click', handleClick)
        cell.classList.remove('winCellBg')
    })

    winner.textContent = ''
    trun.textContent = `Turn: ${playTrun}`
    startGame()

})


startGame()