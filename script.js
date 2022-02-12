const splash = document.getElementById('champion-image');
const champName = document.querySelector('.title-name');
const nameTitle = document.createElement('p');
const spells = document.createElement('ol');
const passive = document.createElement('div');
const chosenChamp = document.getElementById('search');
const inputButton = document.getElementById('inputButton')
const fetchChamp = async () => {
    console.log(chosenChamp.value)
    const chosenOne = chosenChamp.value;
    const url = `http://ddragon.leagueoflegends.com/cdn/12.3.1/data/en_US/champion/${chosenChamp.value}.json`
    fetch(url)
    .then(response => response.json())
    .then(data => nameTitle.innerText = data.data[chosenOne].id + ' ' + data.data[chosenOne].title)
};
champName.appendChild(nameTitle)
inputButton.addEventListener('click', fetchChamp)
// const body = document.querySelector('body');


// window.onload = () => {};
