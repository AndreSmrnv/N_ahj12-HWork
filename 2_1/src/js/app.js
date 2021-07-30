import Goblin from 'img/goblin.png';
console.log('it works!');


function genPosition() {
    return Math.floor(Math.random() * (15 + 1));
}
  
const myImg = new Image(77,77);
myImg.src = Goblin;
myImg.id = 'killme';
  
  const rootDiv = document.getElementsByClassName('game')[0];

  
  for (let i = 0; i < 4 * 4; i += 1) {
    const div = document.createElement('div');
    rootDiv.appendChild(div);
  }
  
function changeActive() {
    const activeImg = document.querySelector("#killme");  
    activeImg && activeImg.parentElement.removeChild(myImg);    
      
    const index = genPosition();
    rootDiv.children[index].appendChild(myImg);
  }
  
  const timerId = setInterval(changeActive, 500);
  setTimeout(() => { clearInterval(timerId); }, 30000);
  