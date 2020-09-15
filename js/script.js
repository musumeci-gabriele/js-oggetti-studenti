// Creare un oggetto che descriva uno studente con le seguenti proprietà: nome, cognome e età. Stampare a schermo attraverso il for in tutte le proprietà.

// Creare un array di oggetti di studenti. Ciclare su tutti gli studenti e stampare per ognuno nome e cognome

// Dare la possibilità all’utente attraverso 3 prompt di aggiungere un nuovo oggetto studente inserendo nell’ordine: nome, cognome e età.
$(document).ready(function(){

// esercizio uno
  var student = {
    "nome" : "gabriele",
    "cognome" : "musumeci",
    "eta" : "37"
  }
  // ciclo della variabile key in array per visualizzare i dati studente
  for (var key in student){
    console.log(student[key]);
  }
  console.log("-------fine esercizio---------");
// esercizio due
 var students = [
   {
     "nome" : "gabriele",
     "cognome" : "musumeci",
   },
   {
     "nome" : "maria",
     "cognome" : "lina",
   },
   {
     "nome" : "ginevra",
     "cognome" : "maci",
   }
 ];
 // ciclo di i per gli studenti e key per il dettagio nome e cognome
 for (var i = 0; i < students.length; i++) {

   for (var key in students[i]){
     var studenti = students[i];
     console.log(studenti[key]);
   }

 }
 console.log("-------fine esercizio---------");

// esercizio 3
  var datiStud = ["Nome","Cognome","Eta"];
  var classe = [
    {
      "nome" : "",
      "cognome" : "",
      "eta" : "",
    }
  ];

  for (var key in classe, i = 0){
    var stud = prompt("Insersci "+ datiStud[i] + "del nuovo studente :");
    $(classe[key]).push(stud);
    i++;
    console.log(classe[key]);
  }




}
);
