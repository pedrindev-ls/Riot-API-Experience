import { fetchChamp } from "./fetchChamp.js";

const splash = document.getElementById('champion-image');
const champName = document.querySelector('.title-name');
const nameTitle = document.createElement('p');
const champLore = document.getElementById('lore');
const inputButton = document.getElementById('inputButton');
const inputChamp = document.getElementById('search');

const idTitleFetch = async (rawData) => {
    const chosenOne = inputChamp.value;
    const id = rawData.data[chosenOne].id;
    const title = rawData.data[chosenOne].title;
    nameTitle.innerText = `${id} ${title}`;
    champName.appendChild(nameTitle);
}
const splashFetch = () => {
    const chosenOne = inputChamp.value;
    splash.innerHTML = '';
    const splashImg = document.createElement('img');
    const splashChosen = `http://ddragon.leagueoflegends.com/cdn/img/champion/loading/${chosenOne}_0.jpg`;
    splashImg.src = splashChosen;
    splash.append(splashImg);
}
const loreFetch = (rawData) => {
    const chosenOne = inputChamp.value;
    champLore.innerHTML = '';
    const lore = document.createElement('p');
    lore.innerText = rawData.data[chosenOne].lore;
    champLore.appendChild(lore);
}
const dataFetch = async () => {
    const rawData = await fetchChamp();
    idTitleFetch(rawData);
    splashFetch();
    loreFetch(rawData)

};
inputButton.addEventListener('click', dataFetch);

// window.onload = () => {};
