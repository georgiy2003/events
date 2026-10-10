const BOARD_CELLS_COUNT = 16;

export default class Board {
  constructor(element) {
    this.element = element;
    this.cells = [];
  }

  createCells() {
    for (let i = 0; i < BOARD_CELLS_COUNT; i += 1) {
      const cell = document.createElement('div');

      cell.classList.add('cell');

      this.element.append(cell);

      this.cells.push(cell);
    }
  }
}
