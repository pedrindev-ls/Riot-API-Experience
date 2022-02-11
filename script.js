const splash = document.getElementById('champion-image');
const champName = document.querySelector('.title-name');
const nameTitle = document.createElement('p');
const spells = document.createElement('ol');
const passive = document.createElement('div');
const chosenChamp = document.getElementById('search');
const inputButton = document.getElementById('inputButton')
const url = `http://ddragon.leagueoflegends.com/cdn/12.3.1/data/en_US/champion/${chosenChamp.value}.json`
const fetchChamp = async () => {
    console.log('run')
    fetch(url)
    .then(response => response.json())
    .then(data => nameTitle.innerText = `data.data.${chosenChamp.value}.id data.data.${chosenChamp.value}.title`)
};
champName.appendChild(nameTitle)
inputButton.addEventListener('click', fetchChamp)
// const body = document.querySelector('body');


// window.onload = () => {};
