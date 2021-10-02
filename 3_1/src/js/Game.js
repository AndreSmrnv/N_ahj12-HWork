import genPosition from './position.js';
import Goblin from '../img/goblin.png';

const myImg = new Image(77, 77);
myImg.src = Goblin;
myImg.id = 'killme';

export default class Game {
  constructor() {
    this.img = myImg;
    [this.parentDiv] = document.getElementsByClassName('game');
    [this.gameInfoDiv] = document.getElementsByClassName('game__info');
    this.setActive = this.changeActive.bind(this);
    this.currIndex = null;
    this.init();
  }

  init() {
    this.createCells(4);
  }

  createCells(xy) {
    for (let i = 0; i < xy * xy; i += 1) {
      const div = document.createElement('div');
      this.parentDiv.appendChild(div);
    }
  }

  changeActive() {
    if (document.images[0]) this.removeImg();

    const childDivs = this.parentDiv.children;
    const index = genPosition(this.currIndex);
    this.currIndex = index;
    childDivs[index].appendChild(this.img);
  }

  removeImg() {
    const activeImg = document.querySelector('#killme');
    activeImg && activeImg.parentElement.removeChild(myImg);
  }

  gameState(scores, status) {
    this.gameInfoDiv.innerHTML = `
    <h3>${status}</h3>
    <p>В цель: <strong>${scores.vic}</strong>, </p>
    <p>Мимо: <strong>${scores.loose}</strong> </p>
    `;
  }
}
