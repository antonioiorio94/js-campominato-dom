/*Consegna
Copiamo la griglia fatta ieri nella nuova repo e aggiungiamo la logica del gioco (attenzione: non bisogna copiare tutta la cartella dell'esercizio ma solo l'index.html, e le cartelle js/ css/ con i relativi script e fogli di stile, per evitare problemi con l'inizializzazione di git).
Viene generata una griglia di gioco quadrata, in cui ogni cella contiene un numero tra quelli compresi nel range 1-100.
Il computer deve generare 16 numeri casuali nello stesso range della difficoltà prescelta: le bombe.
I numeri nella lista delle bombe non possono essere duplicati.
In seguito l'utente clicca su una cella: se il numero è presente nella lista dei numeri generati - abbiamo calpestato una bomba - la cella si colora di rosso e la partita termina, altrimenti la cella cliccata si colora di azzurro e l'utente può continuare a cliccare sulle altre celle.
La partita termina quando il giocatore clicca su una bomba o raggiunge il numero massimo possibile di numeri consentiti.
Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha cliccato su una cella che non era una b.
*/

//Elementi bottone
const easyButton = document.getElementById('easy');
const mediumButton = document.getElementById('medium');
const hardButton = document.getElementById('hard');

easyButton.addEventListener('click', ()=> creaGriglia(100, 'easy'));
mediumButton.addEventListener('click', ()=> creaGriglia(81, 'medium'));
hardButton.addEventListener('click', ()=> creaGriglia(49, 'hard'));



function creaGriglia(totalOfCells, livello){

//Creare una griglia
const grid = document.getElementById("grid")

//reset
grid.innerHTML = '';


//Creare una cella e un ciclo per inserirle
for (let i = 0; i < totalOfCells; i++){

  const cell = createCell();

  //inserisco i numeri
  cell.innerText = (i +1);

  //funzione per colorare la cella al click
  cell.addEventListener('click', function(){
    cell.classList.toggle('bg-blue');
  })


  grid.appendChild(cell);

}

//Funzione per creare la cella
function createCell(){

  const item = document.createElement('div');

  item.classList.add('cell');
  item.classList.add(livello)

  return item;
}

}



