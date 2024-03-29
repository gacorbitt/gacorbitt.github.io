const requestURL = 'https://byui-cit230.github.io/lessons/lesson-09/data/latter-day-prophets.json';

fetch(requestURL)
    .then(function (response) {
    return response.json();
})

    .then(function (jsonObject) {
    // console.table(jsonObject);  temporary checking for valid response and data parsing
    const prophets = jsonObject['prophets'];


for (let i = 0; i < prophets.length; i++ ) {

    /* Card Sections */
    let card = document.createElement('section');

    /* Headings */
    let h2 = document.createElement('h2');
    h2.textContent = prophets[i].name + ' ' + prophets[i].lastname + " - " + prophets[i].order;
    card.appendChild(h2);
    document.querySelector('div.cards').appendChild(card);

    /* Birthdate */
    let date = document.createElement('p');
    date.textContent = "Date of Birth: " + prophets[i].birthdate;
    card.appendChild(date);
    document.querySelector('div.cards').appendChild(card);

    /* Birthplace */
    let place = document.createElement('p');
    place.textContent = "Place of Birth: " + prophets[i].birthplace;
    card.appendChild(place);
    document.querySelector('div.cards').appendChild(card);

    /* Image */
    let image = document.createElement('img');
    image.setAttribute('src', prophets[i].imageurl);
    image.setAttribute('alt', prophets[i].name + ' ' + prophets[i].lastname + ' ' + " - " + prophets[i].order);
    card.appendChild(image);
    document.querySelector('div.cards').appendChild(card);
}

});