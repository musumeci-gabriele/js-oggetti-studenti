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
  // ciclo della variabile key in array
  for (var key in student){
    console.log(student[key]);
  }
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





}
);
