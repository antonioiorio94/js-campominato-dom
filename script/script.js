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


//EventListener bottone
easyButton.addEventListener('click', ()=> startGame(100, 'easy'));
mediumButton.addEventListener('click', ()=> startGame(81, 'medium'));
hardButton.addEventListener('click', ()=> startGame(49, 'hard'));

//Creazione funzione per gerare le bombe e creare la griglia
function startGame(totalOfCells, livello){

  const posizioneBombe = generaBombe(totalOfCells);
  creaGriglia(totalOfCells, livello);

  

  

  for(let i=1; i<= totalOfCells; i++){
    let cell = document.getElementById('cell-'+i);
    //funzione per colorare la cella al click
  cell.addEventListener('click', function(){
    const isBomb = posizioneBombe.includes(i);
    const grid = document.getElementById("grid")
    let lostGame = document.createElement('div');
    lostGame.id = ("lost_div");
    if(isBomb){
      cell.classList.add('bg-red');
      
      grid.appendChild(lostGame);
      lostGame.innerText("Hai Perso!")
    }else{
      cell.classList.add('bg-blue');
    }
    
  })
  }

}


//creazione funzione per generare le bombe
function generaBombe(max){
    //array
  const posizione = [];
  //ciclo while per generare la posizione random
  while(posizione.length < 16){
      const number = randomNumber(1, max);
      if (!posizione.includes(number)){
        posizione.push(number);
      }
  }
  return posizione;

}




function randomNumber(min, max){
  const range = max - min + 1;
  return Math.floor(Math.random()*range) + min;
}


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

  


  grid.appendChild(cell);

  //Funzione per creare la cella
function createCell(){

  const item = document.createElement('div');
  item.id = "cell-" + ( i+1 );

  item.classList.add('cell');
  item.classList.add(livello)

  return item;
}


}


}



