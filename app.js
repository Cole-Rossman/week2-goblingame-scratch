// import functions and grab DOM elements
import { renderOrc } from './render-utils.js';

const defeatedNumber = document.getElementById('defeated-number');
const heroHP = document.getElementById('hero-hp');
const heroImage = document.getElementById('hero-image');
const orcForm = document.getElementById('form');
const orcInfo = document.getElementById('orc');

// let state
let defeatedOrcCount = 0;
let playerHP = 1;
let orcs = [
    { id: 1, name: 'Sheldon', hp: 1 },
    { id: 2, name: 'Cletus', hp: 1 },
    { id: 3, name: 'Arthur', hp: 1 },
];
let currentId = 4;

// set event listeners 
  // get user input
  // use user input to update state 
  // update DOM to reflect the new state
