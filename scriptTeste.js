async function captingData () {
  const teste = document.getElementById('teste');
  const link = 'http://ddragon.leagueoflegends.com/cdn/12.3.1/data/pt_BR/champion/Aatrox.json'
  const apiRequest = await fetch(link);
  const changing = await apiRequest.json();
  const championsStatus = await changing.data.Aatrox.allytips
  const enimies = await changing.data.Aatrox.enemytips
  
  const ObjToArray = Object.entries(enimies);
  ObjToArray.forEach((element) => {
    teste.innerText += `${element[0]}: ${element[1]}
    `
  });

  const ObjToArray2 = Object.entries(championsStatus);
  ObjToArray2.forEach((element) => {
    teste.innerText += `${element[0]}: ${element[1]}
    `
  });
}