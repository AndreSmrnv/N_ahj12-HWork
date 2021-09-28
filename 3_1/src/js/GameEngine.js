export default class GameEngine {
  constructor(game) {
    this.game = game;
    this.scores = { vic: 0, loose: 0 };
    this.checkTarget = this.checkTarget.bind(this);
  }

  start() {
    this.game.parentDiv.addEventListener('click', this.checkTarget);
    this.game.gameState(this.scores, 'Старт Игра');
    this.game.setActive();
    this.timerId = setInterval(() => {
      const gameOver = this.checkScores(false);
      if (gameOver) return;
      this.game.gameState(this.scores, 'Игра');
      this.game.setActive();
    }, 1000);
  }

  checkTarget(e) {
    if (e.target === this.game.img) {
      this.scores.vic += 1;
      this.game.removeImg();
      this.checkScores(true);
    }
  }

  checkScores(clickEvent) {
    if (this.scores.loose >= 5 || this.scores.vic >= 5) {
      clearInterval(this.timerId);
      this.game.parentDiv.removeEventListener('click', this.checkTarget);
      this.game.gameState(this.scores, 'Game over');
      return true;
    } if (!clickEvent) this.scores.loose += +1;
    else this.scores.loose -= 1;
    return false;
  }

  
}
