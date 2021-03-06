/*TRACCIA
Stampare a schermo un messaggio all’interno di un h1, utilizzando i data.
Aggiungere un’immagine presa anch’essa da un data
Fatto questo, (bonus) sbizzarritevi. Provate un po' di aspetti che abbiamo già sperimentato oggi in classe, con eventi e metodi. E' importantissimo iniziare a prendere confidenza non solo con Vue.js ma anche con la sua documentazione e provare a raccimolare informazioni anche da lì. https://vuejs.org/v2/guide/index.html
Ma ricordate: se volete sperimentare non andate oltre a ciò che abbiamo visto in classe oggi.
v-model
v-bind
v-on
methods*/

var app = new Vue({
 el: '#root',
 data: {
   // Restituisce attraverso la parola chiave "title"(opportunamente richiamata in HTML come contenuto del tag) un messaggio all’interno di un elemento tag, inserito nel div di id "root":
   title : 'IT\'S THE FIRST VEU EXPERIENCE',
   // Restituisce, attraverso la parola chiave "picture", il path di una immagine come valore dell'attributo src di un tag img, inserito nel "root":
   picture : 'img/Beep-Beep.jpg',
 }
});










Vue.config.devtools = true;
