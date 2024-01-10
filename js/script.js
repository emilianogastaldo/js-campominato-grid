// Recupero i componenti html

const playButton = document.querySelector('button');
const playForm = document.querySelector('form');
const difficulty = document.getElementById('difficulty');
const grid = document.querySelector('.grid');


//Decido righe e colonne e quindi il numero di celle

// Funzione per creare una nuova cella e ne decido la grandezza in base alla difficoltà
const getNewCell = (content, difficulty) => {
    const newCell = document.createElement('div');
    newCell.innerText = content;
    newCell.classList.add('cell');
    switch (difficulty) {
        case 1:
            newCell.classList.add('cell-7');
            break;
        case 2:
            newCell.classList.add('cell-9');
            break;
        case 3:
            newCell.classList.add('cell-10');
            break;
    }
    return newCell;
}


//Creo l'evento per creare le celle
playButton.addEventListener('click', e => {
    e.preventDefault();

    //Se esiste una griglia la cancello.
    if (grid.hasChildNodes()) grid.innerHTML = '';

    //Recupero il valore della difficoltà e decido quante colonne e righe
    let rows;
    let cols;
    const difficultyValue = parseInt(difficulty.value);

    switch (difficultyValue) {
        case 1:
            rows = 7;
            cols = 7;
            break;
        case 2:
            rows = 9;
            cols = 9;
            break;
        case 3:
            rows = 10;
            cols = 10;
            break;
    }

    const totalCell = rows * cols;

    //Creo le celle
    for (let i = 1; i <= totalCell; i++) {
        const cell = getNewCell(i, difficultyValue);
        //Aggiungo l'interazione delle celle
        cell.addEventListener('click', () => {
            if (!(cell.classList.contains('clicked'))) console.log("Il numero all'interno è: " + i);
            cell.classList.toggle('clicked');
        });
        grid.appendChild(cell);
    }
});