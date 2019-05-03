// Il computer deve generare 16 numeri casuali da 1 a 100.
// In seguito deve chiedere all’utente di inserire un numero da 1 a 100 alla volta, se il numero è presente nella lista dei numeri generati,
// la partita termina, altrimenti continua chiedendo all’utente un altro numero.
// La partita termina quando il giocatore inserisce un numero “vietato” o raggiunge il numero massimo possibile di numeri consentiti.
// Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha inserito un numero consentito.

// BONUS: all’inizio il software richiede anche una difficoltà all’utente che cambia il range di numeri casuali.
// Con difficoltà 0=> da 1 a 100, con difficoltà 1 => da 1 a 80 con difficoltà 2=> da 1 a 50

// per i numeri del pc
var pc_numbers = [];
// per calcolare quante volte ha inserito un numero prima di sbagliare
var volte = 0;
// per scegliere la difficoltà del gioco
var choice;
// per vedere se il numero è presente nei numeri del pc
var trovato = false;

// faccio scegliere la difficoltà all'utente
choice = prompt('Principiante, Intermedio o Esperto?');
choice = choice.charAt(0).toUpperCase() + choice.slice(1);

// se la scelta è Principiante, Intermedio, Esperto
if ((choice == 'Principiante') || (choice == 'Intermedio') || (choice == 'Esperto')){
  document.writeln('Lista numeri "vietati": <br>')
  if(choice == 'Principiante'){
    // numeri random da 1 a 100
    GenRandomNum(100);
    // 100 - 16
    choiceLevel(100, 84);
  }
  if(choice == 'Intermedio'){
    // numeri random da 1 a 80
    GenRandomNum(80);
    // 80 - 16
    choiceLevel(80, 64);
  }
  if(choice == 'Esperto'){
    // numeri random da 1 a 50
    GenRandomNum(50);
    // 50 - 16
    choiceLevel(50, 34);
  }

  // se trova il numero inserito dall'utente nell'array del pc
  if(trovato == true){
    document.writeln('Hai totalizzato un totale di : ' + (volte - 1) + ' punti, visto che la ' + volte + ' volta hai sbagliato');
  }
}
// se sbaglia a scrivere Principiante, Intermedio o Esperto
else{
  document.writeln('Hai sbagliato a scrivere la difficoltà');
}


// per generare 16 numeri random
function GenRandomNum(max_numbers){
  // genero 16 numeri da 1 a 100 (dipende dalla difficoltà che l'utente sceglie)
  for(var i = 0; i < 16; i++){ // oppure while(pc_number.length<16)
    var number = Math.floor(Math.random() * max_numbers) + 1;
    // se non esiste lo inserisco
    if(pc_numbers.includes(number) == false){
      pc_numbers.push(number);
    }
  }
  console.log(pc_numbers);
  document.writeln(pc_numbers.join('<br>') + '<br>');
}


// per il numero di tentativi
function choiceLevel(max_numbers, max_tentativi){
  var tentativi = 1;
  // per i numeri che inserisce l'utente
  var user_numbers;
  var user_array = [];

  // fin quando trovato sarà false  e i tentativi saranno <= 84 allora mi ripeterà il ciclo
  while (trovato == false && tentativi <= max_tentativi){
    console.log(tentativi + ' tentativo');

    // quando i tentativi saranno == 84 (dipende dalla difficoltà che sceglie l'utente)
    if (tentativi == max_tentativi){
      document.writeln('<br> Avendo terminato le chance Hai vinto!');
      document.writeln('<br> Totale punteggio: ' + max_tentativi);
    } else {
      user_numbers = parseInt(prompt('Inserisci un numero da 1 a ' + max_numbers));

      // se non è presente nell'array dei numeri dell'utente lo pusho
      if(user_array.includes(user_numbers) == false){
        user_array.push(user_numbers);
      } else {
        // altrimenti è già presente nell'array
        alert('Hai già inserito questo numero');
        // non dovrà incrementare le volte e i tentativi
        volte -= 1;
        tentativi -= 1;
      }
      console.log('Array utente: ' + user_array);

      // scorro per vedere se il valore è presente nell'array dei numeri del computer
      for(var j = 0; j < 16; j++){
        // se il numero inserito è uguale all'array dei numeri del pc
        if (user_numbers == pc_numbers[j]){
          document.writeln('<br>' + user_numbers + ' è un numero "vietato", quindi Hai perso <br>');
          // trovo l'elemento
          trovato = true;
        }
      }
      // incremento per tener conto delle volte che va senza sbagliare
      volte += 1;
    }
    tentativi += 1;
  }
}
