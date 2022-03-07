let player_x_class = "x"
let player_o_class = "circle"
let winning_combinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
]

let cellElements = document.querySelectorAll('[data-cell]')
let boardElement = document.getElementById('board')
let winBoxElement = document.getElementById('win-box')
let restartButton = document.getElementById('restartButton')
let winMessageElement = document.getElementById('win-message')
let isPlayer_O_Turn = false
