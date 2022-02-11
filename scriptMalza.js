const splash = document.createElement('img');
const champName = document.createElement('p');
const spells = document.createElement('ol');
const passive = document.createElement('div');

const url = 'http://ddragon.leagueoflegends.com/cdn/12.3.1/data/en_US/champion/Malzahar.json'
const fetchChamp = () => {
    fetch(url)
  .then(response => response.json())
  .then(data => champName.innerText = (data.type))
}

// const body = document.querySelector('body');
console.log(champName);