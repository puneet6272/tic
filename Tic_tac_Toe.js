// Select all the game variables 
const gameCells = document.querySelectorAll('.cell')
const player1 = document.querySelector('.player1')
const player2 = document.querySelector('.player2')
// console.log(gameCells)


// Var for games
let currentPlayer = "X"
let nexPlayer = "O"
let playTrun = currentPlayer

const startGame = () => {
    gameCells.forEach(cell => {
        cell.addEventListener("click", (e) => {
            if (e.target.textContent === '')
                e.target.textContent = playTrun
            console.log(`${playTrun} `)
            if (checkWin()) {
                console.log(`${playTrun} wins`)
            }
            changePlayerTurn()
        }
        )
    })
}

const changePlayerTurn = () => {
    if (playTrun === currentPlayer) {
        playTrun = nexPlayer
    } else {
        playTrun = currentPlayer
    }
}

// Funtion is checking winning conditions

const checkWin = () => {
    const winCond = [
        [0, 1, 2]
        [3, 4, 5]
        [6, 7, 8]
        [0, 3, 6]
        [1, 4, 7]
        [2, 5, 8]
        [0, 4, 8]
        [2, 4, 6]
    ]

    for (let i = 0; i < winCond.length; i++) {
        const [a, b, c] = winCond[i]
        if (gameCells[a].textContent === gameCells[b].textContent && gameCells[a].textContent === gameCells[c].textContent && gameCells[a].textContent !== '') {
            return true
        }
        return false
    }

}
startGame()