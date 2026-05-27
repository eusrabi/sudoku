const boards = {
    beginner: [
        [5, 3, '', '', 7, '', '', '', ''],
        [6, '', '', 1, 9, 5, '', '', ''],
        ['', 9, 8, '', '', '', '', 6, ''],
        [8, '', '', '', 6, '', '', '', 3],
        [4, '', '', 8, '', 3, '', '', 1],
        [7, '', '', '', 2, '', '', '', 6],
        ['', 6, '', '', '', '', 2, 8, ''],
        ['', '', '', 4, 1, 9, '', '', 5],
        ['', '', '', '', 8, '', '', 7, 9]
    ],
    medium: [
        ['', '', '', 2, 6, '', 7, '', 1],
        [6, 8, '', '', 7, '', '', 9, ''],
        [1, 9, '', '', '', 4, 5, '', ''],
        [8, 2, '', 1, '', '', '', 4, ''],
        ['', '', 4, 6, '', 2, 9, '', ''],
        ['', 5, '', '', '', 3, '', 2, 8],
        ['', '', 9, 3, '', '', '', 7, 4],
        ['', 4, '', '', 5, '', '', 3, 6],
        [7, '', 3, '', 1, 8, '', '', '']
    ],
    advanced: [
        ['', '', '', '', '', '', '', '', ''],
        [2, '', '', 3, '', '', '', '', ''],
        ['', '', 1, '', 9, 5, '', '', ''],
        ['', '', '', '', '', '', '', 7, 8],
        ['', '', '', '', '', '', '', '', ''],
        [1, '', '', '', '', '', '', '', ''],
        ['', '', '', 6, '', '', '', '', ''],
        ['', '', '', '', '', '', 4, 1, 9],
        ['', '', '', '', 8, '', '', '', 5]
    ]
};

let initialBoard;
let board = [];
const boardDiv = document.getElementById('sudoku-board');
const message = document.getElementById('message');
const levelSelect = document.getElementById('level');

function createBoard() {
    boardDiv.innerHTML = '';
    board = [];
    for (let r = 0; r < 9; r++) {
        board[r] = [];
        for (let c = 0; c < 9; c++) {
            const cell = document.createElement('input');
            cell.type = 'text';
            cell.maxLength = 1;
            cell.className = 'sudoku-cell';
            if (initialBoard[r][c] !== '') {
                cell.value = initialBoard[r][c];
                cell.disabled = true;
                cell.classList.add('prefilled');
            } else {
                cell.value = '';
                cell.addEventListener('input', () => onInput(cell, r, c));
            }
            // Add bold borders for 3x3 boxes
            if (c % 3 === 0) cell.style.borderLeft = '2px solid #2b6cb0';
            if (r % 3 === 0) cell.style.borderTop = '2px solid #2b6cb0';
            if (c === 8) cell.style.borderRight = '2px solid #2b6cb0';
            if (r === 8) cell.style.borderBottom = '2px solid #2b6cb0';
            boardDiv.appendChild(cell);
            board[r][c] = cell;
        }
    }
    message.textContent = '';
    message.style.color = '#2d3748';
}

function onInput(cell, r, c) {
    const val = cell.value;
    if (!/^[1-9]$/.test(val)) {
        cell.value = '';
        cell.classList.remove('invalid', 'valid');
        return;
    }
    if (isValid(r, c, val)) {
        cell.classList.remove('invalid');
        cell.classList.add('valid');
    } else {
        cell.classList.remove('valid');
        cell.classList.add('invalid');
    }
}

function isValid(row, col, val) {
    for (let i = 0; i < 9; i++) {
        if (i !== col && board[row][i].value === val) return false;
        if (i !== row && board[i][col].value === val) return false;
    }
    const boxRow = Math.floor(row / 3) * 3;
    const boxCol = Math.floor(col / 3) * 3;
    for (let r = boxRow; r < boxRow + 3; r++) {
        for (let c = boxCol; c < boxCol + 3; c++) {
            if ((r !== row || c !== col) && board[r][c].value === val) return false;
        }
    }
    return true;
}

function checkSolution() {
    let complete = true;
    let valid = true;
    for (let r = 0; r < 9; r++) {
        for (let c = 0; c < 9; c++) {
            const cell = board[r][c];
            if (cell.value === '') complete = false;
            if (!cell.disabled && cell.value !== '' && !isValid(r, c, cell.value)) {
                cell.classList.add('invalid');
                valid = false;
            } else if (!cell.disabled && cell.value !== '') {
                cell.classList.remove('invalid');
                cell.classList.add('valid');
            }
        }
    }
    if (!complete) {
        message.textContent = '🟡 Please fill all cells!';
        message.style.color = '#b7791f';
    } else if (valid) {
        message.textContent = '✅ Congratulations! You solved the puzzle!';
        message.style.color = '#38a169';
    } else {
        message.textContent = '❌ There are mistakes. Please check highlighted cells.';
        message.style.color = '#e53e3e';
    }
}

function resetBoard() {
    for (let r = 0; r < 9; r++) {
        for (let c = 0; c < 9; c++) {
            if (!board[r][c].disabled) {
                board[r][c].value = '';
                board[r][c].classList.remove('invalid', 'valid');
            }
        }
    }
    message.textContent = '';
    message.style.color = '#2d3748';
}

function changeLevel() {
    const level = levelSelect.value;
    initialBoard = boards[level];
    createBoard();
}

// Initialize the board based on the selected level on page load
window.onload = function() {
    initialBoard = boards[levelSelect.value];
    createBoard();
};