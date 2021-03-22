const fs = require('fs');

const genders = ['M', 'F'];
const maleNames = ['Włodek', 'Stasiek', 'Zdzisiek', 'Wiesiek'];
const femaleNames = ['Kasia', 'Basia', 'Gosia', 'Zosia'];
const lastNames = ['Raszczyk', 'Szydłowski', 'Pellowski', 'Majchrowski']

const randChoice = function(arr) {
    return arr[Math.floor(Math.random() * arr.length)]
}

function getRandomAge(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

let people = [];

    for (let i=0; i<20; i++) {
        let data

        let gender = randChoice(genders);

        let name
            if (gender == 'M'){
                name = randChoice(maleNames);
            } else if (gender == 'F'){
                name = randChoice(femaleNames);
            }

        let lastName = randChoice(lastNames);

        let age = getRandomAge(17, 78);

        data = {gender, name, lastName, age};
        people.push(data);
    }

peopleData = JSON.stringify(people);

fs.writeFile('people.json', peopleData, (err) => {
    if (err) throw err;
    console.log('The file has been saved!');
  });


