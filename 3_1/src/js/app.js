import Game from './Game.js';
import GameEngine from './GameEngine.js';

const game = new Game();
const gameEngine = new GameEngine(game);
gameEngine.start();
