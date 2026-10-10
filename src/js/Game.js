
import Goblin from './Goblin';

const GOBLIN_DISPLAY_TIME = 1000;
const MAX_MISSES = 5;

export default class Game {
  constructor(board) {
    this.board = board;
    this.goblin = new Goblin();

    this.score = 0;
    this.misses = 0;
    this.timer = null;
    this.isRunning = false;
  }

  start() {
    if (this.isRunning) {
      return;
    }

    this.isRunning = true;
    this.showGoblin();
  }

  showGoblin() {
    if (!this.isRunning) {
      return;
    }

    this.goblin.show(this.board.cells, () => {
      clearTimeout(this.timer);
      this.goblin.hide();

      this.score += 1;
      this.updateScore();

      this.timer = setTimeout(() => {
        this.showGoblin();
      }, 0);
    });

    this.timer = setTimeout(() => {
      this.goblin.hide();

      this.misses += 1;
      this.updateMisses();

      if (this.misses >= MAX_MISSES) {
        this.endGame();
        return;
      }

      this.showGoblin();
    }, GOBLIN_DISPLAY_TIME);
  }

  updateScore() {
    const scoreElement = document.querySelector('#score');

    if (scoreElement) {
      scoreElement.textContent = this.score;
    }
  }

  updateMisses() {
    const missesElement = document.querySelector('#misses');

    if (missesElement) {
      missesElement.textContent = this.misses;
    }
  }

  endGame() {
    this.isRunning = false;
    clearTimeout(this.timer);
    this.goblin.hide();

    const statusElement = document.querySelector('#game-status');

    if (statusElement) {
      statusElement.textContent =
        `Игра окончена! Счёт: ${this.score}`;
    }
  }
}
