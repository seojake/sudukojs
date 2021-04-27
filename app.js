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
    var is_valid = function (n, x, y) {
        // Check the column
        for(i = 0; i < board_size; i++){
            if(board[y][i] !== n){
                return false;
            }
        }
        // return false;
        // if(in_row.includes(n)){
        //     return false;
        // }

        // Check the row
        if (board[x].includes(n)) {
            return false;
        }

        return true;
    }

    // Crate a blank board
    for(row = 0; row < board_size; row++){
        board.push([]);
        for(column = 0; column < board_size; column++){
            board[row].push(0);
        }
    }

    // Fill the board with a completed solution
    for (row = 0; row < board_size; row++) {
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

    console.table(board);
}