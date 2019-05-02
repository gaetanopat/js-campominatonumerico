// Il computer deve generare 16 numeri casuali da 1 a 100.
// In seguito deve chiedere all’utente di inserire un numero da 1 a 100 alla volta, se il numero è presente nella lista dei numeri generati,
// la partita termina, altrimenti continua chiedendo all’utente un altro numero.
// La partita termina quando il giocatore inserisce un numero “vietato” o raggiunge il numero massimo possibile di numeri consentiti.
// Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha inserito un numero consentito.

// BONUS: all’inizio il software richiede anche una difficoltà all’utente che cambia il range di numeri casuali.
// Con difficoltà 0=> da 1 a 100, con difficoltà 1 => da 1 a 80 con difficoltà 2=> da 1 a 50

// per i numeri del pc
var pc_numbers = [];
// per vedere quando finisce di inserire i 16 numeri può partire con la richiesta dei numeri all'utente
var finish = 0;
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
  }
  if(choice == 'Intermedio'){
    // numeri random da 1 a 80
    GenRandomNum(80);
  }
  if(choice == 'Esperto'){
    // numeri random da 1 a 50
    GenRandomNum(50);
  }

  // quando finisco di generare i 16 numeri
  if (finish == 15){
    if(choice == 'Principiante'){
      // 100 - 16
      choiceLevel(84);
    }
    if(choice == 'Intermedio'){
      // 80 - 16
      choiceLevel(64);
    }
    if(choice == 'Esperto'){
      // 50 - 16
      choiceLevel(34);
    }
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
  // genero 16 numeri da 1 a 100
  for (var i = 0; i < 16; i++){
    pc_numbers.push(Math.floor(Math.random() * max_numbers) + 1);
    console.log(pc_numbers[i]);
    document.writeln(pc_numbers[i] + '<br>');
    finish = i;
  }
}

// per il numero di tentativi
function choiceLevel(tentativi){
  var max_tentativi = 0;
  // per i numeri che inserisce l'utente
  var user_numbers;

  // fin quando trovato sarà false  e i tentativi saranno <= 84 allora mi ripeterà il ciclo
  while (trovato == false && max_tentativi <= tentativi){
    console.log(max_tentativi + ' tentativo');
    if (max_tentativi == tentativi){
      document.writeln('<br> Avendo terminato le chance Hai vinto!');
      document.writeln('<br> Totale punteggio: ' + tentativi);
    } else {
      user_numbers = parseInt(prompt('Inserisci un numero'));
      // scorro per vedere se il valore è presente nell'array dei numeri del computer
        for(var i = 0; i < 16; i++){
          // se il numero inserito è uguale all'array dei numeri del pc
          if (user_numbers == pc_numbers[i]){
            document.writeln('<br>' + user_numbers + ' è un numero "vietato", quindi Hai perso <br>');
            // trovo l'elemento
            trovato = true;
          }
        }
    volte += 1;
    }
    max_tentativi += 1;
  }
}
