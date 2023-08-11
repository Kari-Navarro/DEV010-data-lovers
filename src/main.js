import { example } from './data.js';
// import data from './data/lol/lol.js';
import data from './data/pokemon/pokemon.js';
// import data from './data/rickandmorty/rickandmorty.js';






















personajesData.forEach(character => {
  const imgElement = document.createElement('img');
  imgElement.src = character.img;
  imgElement.alt = character.name;

  charactersDiv.appendChild(imgElement);
});