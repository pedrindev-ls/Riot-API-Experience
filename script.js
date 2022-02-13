// const splash = document.getElementById('champion-image');
// const champName = document.querySelector('.title-name');
// const nameTitle = document.createElement('p');
// const spells = document.createElement('ol');
// const passive = document.createElement('div');
// const chosenChamp = document.getElementById('search');
// const inputButton = document.getElementById('inputButton')
// const url = `http://ddragon.leagueoflegends.com/cdn/12.3.1/data/en_US/champion/${chosenChamp.value}.json`
// const fetchChamp = async () => {
//     console.log('run')
//     fetch(url)
//     .then(response => response.json())
//     .then(data => nameTitle.innerText = `data.data.${chosenChamp.value}.id data.data.${chosenChamp.value}.title`)
// };
// champName.appendChild(nameTitle)
// inputButton.addEventListener('click', fetchChamp)
// // const body = document.querySelector('body');


// // window.onload = () => {};
const searchInput = document.querySelector('.searchInput')
const searchInputBtn = document.querySelector('.inputButton');

const createChampObject = async () => {
    const currentChamp = await searchChamp(searchInput.value);
    const splashArtEndpoint = `http://ddragon.leagueoflegends.com/cdn/img/champion/loading/${searchInput.value}_0.jpg`;
    const spellsEndpoint = 'http://ddragon.leagueoflegends.com/cdn/12.3.1/img/spell/';
    
       const champToRender = {
            name:currentChamp.id + ',',
            title: currentChamp.title,
            lore: currentChamp.lore,
            howToPlay: currentChamp.allytips,
            howToCounter: currentChamp.enemytips,
            passive: {
                name: currentChamp.passive.name, 
                description: currentChamp.passive.description,
                icon: currentChamp.passive.image,
            },
            spells: currentChamp.spells.map((currentSpell) => {
               const spell = {
                    name: currentSpell.id,
                    description: currentSpell.description,
                    icon: spellsEndpoint + currentSpell.image.full
                }
                return spell;
            })
        }
        return console.log(champToRender);
    }


const searchChamp = async (champ) => {
    const endpoint = `http://ddragon.leagueoflegends.com/cdn/12.3.1/data/pt_BR/champion/${champ}.json`
    const fetchChamp = await fetch(endpoint);
    const champJson = await fetchChamp.json();
    console.log(champJson)
    return champJson.data[champ]; 
}


window.onload = () => {
    searchInputBtn.addEventListener('click', createChampObject)
}