import './style.css';
import Board from './js/Board';
import Game from './js/Game';

const boardElement = document.querySelector('#board');

const board = new Board(boardElement);

board.createCells();

const game = new Game(board);

game.start();