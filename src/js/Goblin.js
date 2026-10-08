import Goblin from './Goblin';

export default class Game {
  constructor(board) {
    this.board = board;
    this.goblin = new Goblin();

    this.score = 0;
    this.misses = 0;
  }

  start() {
    const showGoblin = () => {
      let timer;

      this.goblin.show(this.board.cells, () => {
        clearTimeout(timer);

        this.goblin.hide();

        this.score += 1;

        console.log(`Счёт: ${this.score}`);

        showGoblin();
      });

      timer = setTimeout(() => {
        this.goblin.hide();

        this.misses += 1;

        console.log(`Промахов: ${this.misses}`);

        if (this.misses >= 5) {
          console.log('Игра окончена');
          return;
        }

        showGoblin();
      }, 1000);
    };

    showGoblin();
  }
}