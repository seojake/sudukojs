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
function create_board(){
    var group_size = board_size / 3;
    var board = [];

    for(column = 0; column < board_size; column++){
        board.push([]);
    }

    board.forEach((cell) => {
        
    });
}