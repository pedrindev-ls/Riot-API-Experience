const searchInput = document.querySelector('.searchInput');
const spellP = document.querySelector('.spellPassive');
const spellName = document.querySelector('.spell-h2');
const spellBoxes = document.querySelectorAll('.spell-box');
const spellDescri = document.querySelector('.spell-description-text');
const h2titles = document.querySelectorAll('h2');
const lore = document.querySelector('.lore');
const title = document.querySelector('.title');
const howToPlayTitle = document.querySelector('.user-h2');
const howToPlayTips = document.querySelector('.user-ol');
const howToCounterTitle = document.querySelector('.versus-h2');
const howToCounterTips = document.querySelector('.versus-ol');
const img = document.querySelector('.splashArt');
const mainElement = document.querySelector('main');
const removeHidden = document.querySelector('main')
const searchInputBTN = document.querySelector('.inputButton');
let currentChampSpells;
let currentChampPassive;
let currentChampImg;


const createELement = (element) => document.createElement(element);

const searchChamp = async (champ) => {
    const endpoint = `http://ddragon.leagueoflegends.com/cdn/12.3.1/data/pt_BR/champion/${champ}.json`
    const fetchChamp = await fetch(endpoint);
    const champJson = await fetchChamp.json();
    return champJson.data[champ];
};

const createChampObject = async () => {
    const InputLowerCase = searchInput.value.toLowerCase();
    const inputToFirstUpperCase = InputLowerCase.charAt(0).toUpperCase() + InputLowerCase.slice(1);
    const currentChamp = await searchChamp(inputToFirstUpperCase);
    const splashArtEndpoint = `http://ddragon.leagueoflegends.com/cdn/img/champion/loading/${inputToFirstUpperCase}_0.jpg`;
    const spellsEndpoint = 'http://ddragon.leagueoflegends.com/cdn/12.3.1/img/spell/';
    const passiveEndpoint = 'http://ddragon.leagueoflegends.com/cdn/12.3.1/img/passive/';

    const champToRender = {
        name: currentChamp.id,
        title: currentChamp.title,
        lore: currentChamp.lore,
        howToPlay: currentChamp.allytips,
        splashArt: splashArtEndpoint,
        howToCounter: currentChamp.enemytips,
        passive: {
            name: currentChamp.passive.name,
            description: currentChamp.passive.description,
            icon: passiveEndpoint + currentChamp.passive.image.full,
        },
        spells: currentChamp.spells.map((currentSpell) => {
            const spell = {
                name: currentSpell.name,
                description: currentSpell.description,
                icon: spellsEndpoint + currentSpell.image.full
            }
            return spell;
        })
    }
    currentChampPassive = champToRender.passive;
    currentChampSpells = champToRender.spells;
    currentChampImg = champToRender.splashArt;
    renderChamp(champToRender);
    searchInput.value = "";
    renderSpellSelected();
};

const renderName = (name, champTitle) => title.innerText = `${name}, ${champTitle}`;

const renderLore = (loreText) => lore.innerText = loreText;

const renderHowToPlay = (champName, howToPlay) => {
    howToPlayTitle.innerText = `Como jogar de ${champName}`;
    howToPlayTips.innerHTML = '';

    howToPlay.forEach((tip) => {
        const newTip = createELement('li');
        newTip.innerText = tip;
        howToPlayTips.appendChild(newTip);
    });
};

const renderSplashArt = (splashArt) => {
    img.src = splashArt;
    if (window.innerWidth < 600) {
        mainElement.style.backgroundImage = 'url(' + splashArt + ')'
        mainElement.style.backgroundSize = 'cover';
        mainElement.style.backgroundRepeat = "repeat-y";
    }
};

const renderPassive = (champPassive) => {
    spellP.src = champPassive.icon;
    spellName.innerText = champPassive.name;
    spellDescri.innerText = champPassive.description;
}

const renderSpells = (champSpells) => {
    const spells = document.querySelectorAll('.spell');
    spells.forEach((currSpellIcon, index) => {
        currSpellIcon.src = champSpells[index].icon
    })
}

const renderHowToCounter = (champName, howToCounter) => {
    howToCounterTitle.innerText = `Como enfrentar ${champName}?`;
    howToCounterTips.innerHTML = '';

    howToCounter.forEach((tip) => {
        const newTip = createELement('li');
        newTip.innerText = tip;
        howToCounterTips.appendChild(newTip);
    });
};

const renderChamp = (champObj) => {
    renderName(champObj.name, champObj.title);
    renderLore(champObj.lore);
    renderHowToPlay(champObj.name, champObj.howToPlay);
    renderSplashArt(champObj.splashArt);
    renderPassive(champObj.passive);
    renderSpells(champObj.spells);
    renderHowToCounter(champObj.name, champObj.howToCounter);
    if (removeHidden.classList.contains('startHidden')) {
        removeHidden.classList.remove('startHidden')
    };
};

const renderSpellQ = () => {
    spellDescri.innerText = currentChampSpells[0].description
    spellName.innerText = currentChampSpells[0].name;
};

const renderSpellW = () => {
    spellDescri.innerText = currentChampSpells[1].description
    spellName.innerText = currentChampSpells[1].name;
};

const renderSpellE = () => {
    spellDescri.innerText = currentChampSpells[2].description
    spellName.innerText = currentChampSpells[2].name;
};

const renderSpellR = () => {
    spellDescri.innerText = currentChampSpells[3].description
    spellName.innerText = currentChampSpells[3].name;
};

const renderSpellPassive = () => {
    spellP.src = currentChampPassive.icon;
    spellName.innerText = currentChampPassive.name;
    spellDescri.innerText = currentChampPassive.description;
};

const renderSpellSelected = () => {
    const selectedClassList = document.querySelector('.selected').children[0].classList;

    switch (true) {
        case selectedClassList.contains('spellQ'):
            renderSpellQ();
            break;
        case selectedClassList.contains('spellW'):
            renderSpellW();
            break;
        case selectedClassList.contains('spellE'):
            renderSpellE();
            break;
        case selectedClassList.contains('spellR'):
            renderSpellR();
            break;
        case selectedClassList.contains('spellPassive'):
            renderSpellPassive();
            break;
    };
}

const selectSpell = (event) => {
    spellBoxes.forEach((currentSpell) => {
        if (currentSpell.classList.contains('selected')) {
            currentSpell.classList.remove('selected');
        };
        if (event.target.classList.contains('spell') || event.target.classList.contains('spellPassive')) {
            event.target.parentNode.classList.add('selected');
        }
        else event.target.classList.add('selected');
    });
    renderSpellSelected();
};

const hideContent = (loreContent, play, counter) => {
    if (loreContent && !lore.classList.contains('hidden')) {
        lore.classList.add('hidden');
    }
    if (play && !howToPlayTips.classList.contains('hidden')) {
        howToPlayTips.classList.add('hidden');
    }
    if (counter && !howToCounterTips.classList.contains('hidden')) {
        howToCounterTips.classList.add('hidden');
    }
}

const showH2Content = (event) => {

    if (event.target.classList.contains('title')) {
        hideContent(false, true, true);
        lore.classList.toggle('hidden');
    };
    if (event.target.classList.contains('user-h2')) {
        hideContent(true, false, true);
        howToPlayTips.classList.toggle('hidden')
    };
    if (event.target.classList.contains('versus-h2')) {
        hideContent(true, true, false);
        howToCounterTips.classList.toggle('hidden');
    };    
};

const windowResizeBackground = () => {
    if (window.innerWidth > 600) {
        mainElement.style.backgroundImage = 'none'
    }
    if (window.innerWidth < 599) {
        mainElement.style.backgroundImage = 'url(' + currentChampImg + ')'
    }
}
const aceitaEnter = () => {
    if (event.keyCode === 13) {
        createChampObject();
        return false;
    }
}

const addEventListeners = () => {
    searchInputBTN.addEventListener('click', createChampObject);
    searchInput.addEventListener('keyup', aceitaEnter);
    spellBoxes.forEach((spell) => spell.addEventListener('click', selectSpell));
    h2titles.forEach(tittle => tittle.addEventListener('click', showH2Content));
    window.addEventListener('resize', windowResizeBackground);
};

window.onload = () => {
    addEventListeners();
};
