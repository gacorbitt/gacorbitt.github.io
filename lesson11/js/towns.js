const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';

fetch(requestURL)
  .then(function (response) {
    return response.json();
})

  .then(function (jsonObject) {
    const towns = jsonObject['towns'];

    let preston = towns.find(town => town.name === "Preston");
    let sodaSprings = towns.find(town => town.name === "Soda Springs");
    let fishHaven = towns.find(town => town.name === "Fish Haven");
    
    for (let town of [preston, sodaSprings, fishHaven]) {      
        let card = document.createElement('section');
        let title = document.createElement('h1');
        let motto = document.createElement('h2');
        let found = document.createElement('p');
        let pop = document.createElement('p');
        let rainfall = document.createElement('p');
        let data = document.createElement('div');
        let image = document.createElement('img');

        title.textContent = town.name;
        motto.textContent = town.motto;
        found.textContent = "Year Founded: " + town.yearFounded;
        pop.textContent = "Current Population: " + town.currentPopulation;
        rainfall.textContent = "Average Rainfall: " +  town.averageRainfall + " inches";
        image.setAttribute('src', "./images/" + town.photo);
        image.setAttribute('alt', town.photo);

        data.appendChild(title);
        data.appendChild(motto); 
        data.appendChild(found);
        data.appendChild(pop);
        data.appendChild(rainfall);
        card.appendChild(data);
        card.appendChild(image);
        document.querySelector('div.towns').appendChild(card);
        
    }
  });