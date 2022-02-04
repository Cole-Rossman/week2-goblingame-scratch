// import functions and grab DOM elements
import { renderOrc } from './render-utils.js';

const defeatedNumber = document.getElementById('defeated-number');
const heroHP = document.getElementById('hero-hp');
const heroImage = document.getElementById('hero-image');
const orcForm = document.getElementById('form');
const orcInfo = document.getElementById('orc');

// let state
let defeatedOrcCount = 0;
let playerHP = 10;
let orcs = [
    { id: 1, name: 'Sheldon', hp: 7 },
    { id: 2, name: 'Cletus', hp: 4 },
    { id: 3, name: 'Arthur', hp: 9 },
];
let currentId = 4;

// set event listeners 
orcForm.addEventListener('submit', (e) => {
  // prevent 1996 default behavior
    e.preventDefault();
  // name placed and submitted in form
    const data = new FormData(orcForm);
    const orcName = data.get('orc-name');

  // create new object with that user input
    const newOrc = {
        id: currentId++,
        name: orcName,
        hp: Math.ceil(Math.random() * 10),
    };
  // add the created object into orcs array in state
    orcs.push(newOrc);

  //  CALL displayOrcs after you create the function
    displayOrcs();
}); 
  // make display orcs function 
function displayOrcs() {
    orcInfo.textContent = '';

  // loop through the orcs
    for (let orc of orcs) {
  // render new orc dom element for each item
        const orcEl = renderOrc(orc);
  // append element above to html, make each orc clickable using dynamic event listener, need a NEW eventlistener for every orc
        orcEl.addEventListener('click', () =>
 // call orcClickHandler function after created
            orcClickHandler(orc)
        );

        orcInfo.append(orcEl);
    }
}
// call displayOrcs function
displayOrcs();

function orcClickHandler(orcData) {
    if (orcData.hp <= 0) return;
    const math = Math.random() * 2;
    if (math < 1) {
        console.log('first test', math);
        alert(`You injured ${orcData.name}!!!`);
        orcData.hp--;
    } else {
        alert('You missed.');
    } 
    const math2 = Math.random() * 3;
    if (math2 < 2) {
        console.log('second test', math2);
        playerHP--;
        alert('You got injured!!!');
    } else {
        alert(`${orcData.name} missed.`);
    }

    heroHP.textContent = playerHP;
    const orcHPEl = document.getElementById(`orc-hp-${orcData.id}`);
    orcHPEl.textContent = orcData.hp;

    const emoji = document.getElementById(`orc-face-${orcData.id}`);
    emoji.textContent = orcData.hp > 0 ? '👹' : '💀';

    if (orcData.hp === 0) {
        defeatedOrcCount++;
        defeatedNumber.textContent = defeatedOrcCount;
    }

    if (playerHP === 0) {
        heroImage.classList.add('game-over');
        alert('You have been defeated, GAME OVER.');
    }

    const allOrcsDefeated = orcs.every((orc) => orc.hp === 0);
    if (allOrcsDefeated) alert('You are the champion!');

}
  // get user input
  // use user input to update state 
  // update DOM to reflect the new state
