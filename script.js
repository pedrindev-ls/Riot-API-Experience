import { fetchChamp } from "./fetchChamp.js";

const splash = document.getElementById('champion-image');
const champName = document.querySelector('.title-name');
const nameTitle = document.createElement('p');
const spells = document.createElement('ol');
const passive = document.createElement('div');
const inputButton = document.getElementById('inputButton')
const inputChamp = document.getElementById('search');

const idTitleFetch = async (rawData) => {
    const chosenOne = inputChamp.value;
    const id = rawData.data[chosenOne].id
    const title = rawData.data[chosenOne].title
    nameTitle.innerText = `${id} ${title}`
    champName.appendChild(nameTitle);
}

const dataFetch = async () => {
    const rawData = await fetchChamp();
    idTitleFetch(rawData);

};
inputButton.addEventListener('click', dataFetch);

// window.onload = () => {};
