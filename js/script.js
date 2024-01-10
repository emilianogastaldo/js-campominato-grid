// Recupero i componenti html

const playButton = document.querySelector('button');
const grid = document.querySelector('.grid');


//Decido righe e colonne e quindi il numero di celle
const rows = 10;
const cols = 10;
const totalCell = rows * cols;

// Funzione per creare una nuova cella
const getNewCell = content => {
    const newCell = document.createElement('div');
    newCell.innerText = content;
    newCell.classList.add('cell');
    grid.appendChild(newCell);

}
//Creo l'evento per creare le celle
playButton.addEventListener('click', () => {
    //Se esiste una griglia la cancello.
    if (grid.hasChildNodes()) grid.innerHTML = '';

    for (let i = 1; i <= totalCell; i++) {
        getNewCell(i);
    }
});