
import goblinImage from '../images/GracefulMiniatureBustard-small.gif';

export default class Goblin {
  constructor() {
    this.cell = null;
    this.image = null;
  }

  getRandomCell(cells) {
    const randomIndex = Math.floor(Math.random() * cells.length);

    return cells[randomIndex];
  }

  show(cells, onHit) {
    this.hide();

    this.cell = this.getRandomCell(cells);
    this.image = document.createElement('img');

    this.image.src = goblinImage;
    this.image.classList.add('goblin');
    this.image.addEventListener('click', onHit, { once: true });

    this.cell.append(this.image);
  }

  hide() {
    if (this.image) {
      this.image.remove();
    }

    this.image = null;
    this.cell = null;
  }
}
