for (let i = 0; i < 5; i++) {
    console.log(i);
}

console.log('------------');

/*
Jei kas menesi zmogus uzdirba 5000, tai kiek jis tures pajamu per metus?
*/

const alga = 5000;
const menesiu = 12;
let pajamos = 0;

for (let i = 1; i <= menesiu; i++) {
    pajamos = pajamos + alga;
    console.log(`${i}) ${pajamos} pinigu.`);
}

console.log('-----------');

/*
Parasyti skaicius nuo 8 iki 4 imtinai.
*/

for (let i = 8; i >= 4; i--) {
    console.log(i);
}

console.log('-----------');

/*
Isvardinti ciferblato skaicius nuo duotos valandos iki galo.
*/

const valanda = 10;
const maxValandu = 12;

for (let val = valanda; val <= maxValandu; val++) {
    console.log(val + ' val');
}

console.log('------------');

/*
Duotas miestu sarasas. Isvardinti kiekviena aplankyta miesta.
Spausdiname: "Aplankiau: Miesto pavadinimas."
*/

const miestai = ['Vilnius', 'Kaunas', 'Klaipeda', 'Anyksciai'];

// console.log(`Aplankiau: ${miestai[0]}.`);
// console.log(`Aplankiau: ${miestai[1]}.`);
// console.log(`Aplankiau: ${miestai[2]}.`);
// console.log(`Aplankiau: ${miestai[3]}.`);

for (let i = 0; i < miestai.length; i++) {
    const miestoPavadinimas = miestai[i];
    console.log(`Aplankiau: ${miestoPavadinimas}.`);
}

console.log('------------');

