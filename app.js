/**
 * Suduko JS
 * Jake Punton
 * Version 1.0
 */

/**
 * Board size
 * Change this value, providing it's a multiple of 3
 */
let board_size = 9;

create_board();

/**
 * Create board
 * Will create a working Suduko board and returns the array
 */
function create_board() {
    var group_size = board_size / 3;
    var board = [];

    // Check the column and row if that number had been used
    var is_valid = function (n, row, column) {
        // Check the column
        // if (board[column].includes(n)) {
        //     return false;
        // }

        // Check the row
        if (board[row].includes(n)) {
            return false;
        }

        return true;
    }

    // Start to create the board
    for (row = 0; row < board_size; row++) {
        board.push([]);
        for (column = 0; column < board_size; column++) {
            while (true) {
                var number = Math.ceil((Math.random() * 9));
                if (is_valid(number, row, column)) {
                    board[row][column] = number;
                    break;
                }
            }
        }
    }

    console.log(board);
}

// function run_checks(column, row) {

// }