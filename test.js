const nounourses = [{
  colors: ["Tan", "Chocolate", "Black", "White"],
  _id: "5be9c8541c9d440000665243",
  name: "Norbert",
  price: 2900,
  imageUrl: "http://ab-p5-api.herokuapp.com/images/teddy_1.jpg",
  description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
},{
  colors: ["Pale brown", "Dark brown", "White"],
  _id: "5beaa8bf1c9d440000a57d94",
  name: "Arnold",
  price: 3900,
  imageUrl: "http://ab-p5-api.herokuapp.com/images/teddy_2.jpg",
  description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
},{
  colors: ["Brown"],
  _id: "5beaaa8f1c9d440000a57d95",
  name: "Lenny and Carl",
  price: 5900,
  description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  imageUrl: "http://ab-p5-api.herokuapp.com/images/teddy_3.jpg"
},{
  colors: ["Brown", "Blue", "Pink"],
  _id: "5beaabe91c9d440000a57d96",
  name: "Gustav",
  price: 4500,
  imageUrl: "http://ab-p5-api.herokuapp.com/images/teddy_4.jpg",
  description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
},{
  colors: ["Beige", "Tan", "Chocolate"],
  _id: "5beaacd41c9d440000a57d97",
  name: "Garfunkel",
  price: 5500,
  description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  imageUrl: "http://ab-p5-api.herokuapp.com/images/teddy_5.jpg"
},]

// utiliser une BOUCLE (for) !

// EXERCICE 1

function afficherNomDesNounours() {
  for (let i = 0; i < nounourses.length; i++){
    console.log (nounourses[i].name)
  }
}
afficherNomDesNounours()


// EXERCICE 2

function afficherPrixTotal() {
  let total = 0
  for (let i =0; i < nounourses.length; i++)
    total = total + (nounourses[i].price)
    console.log(total)
}
//afficherPrixTotal()


// EXERCICE 3

function afficherMoitiePrix() {
    for (let elem of nounourses){
  console.log(`${elem.name} à -50%  est à ${elem.price/2} €`)
  }
}
//afficherMoitiePrix()


// EXERCICE 3 BIS

// si tu peux, essaye aussi d'afficher celui à -20%

function afficher20pourcentduprix(){
  for (let elem of nounourses){
  console.log(`${elem.name} à -20%  est à ${elem.price*0.2} €`)
  }
}
//afficher20pourcentduprix()


// EXERCICE 4

//afficherColorisDisponibles()

function afficherColorisDisponibles(){ 
  for (let elem of nounourses){  
  console.log(`${elem.name} est disponible en ${elem.colors.length} couleurs`)
  }
} 
//afficherColorisDisponibles()

// EXERCICE 5

function afficherSuperieurTrente() {
  for (let elem of nounourses)
  if (elem.price > 3000 ){
    console.log(`${elem.name} coûte + de 30 € (il coûte ${ elem.price } €)`)
  } else{
    ('')
  }
}
//afficherSuperieurTrente()

// EXERCI 5 bis

function adordable() {
  for (let elem of nounourses)
  if (elem.price < 3000 ){
    console.log(`${elem.name} est abordable (il coûte ${ elem.price } €)`)
  } else{
    ('')
  }
}
//adordable()

// essayer une VARIANTE en affichant "abordable" si le prix est en dessous


// EXERCICE 6

//function afficherSommesDescriptions()

function afficherSommesDescriptions() {
  let des = ("")
  for (let elem of nounourses){
   (des += elem.description)
  } 
  console.log(des)
}
//afficherSommesDescriptions()

// Attention, c'est bien la SOMME des descriptions qu'il faut afficher, pas les unes après les autres

// EXERCICE 7

function afficherTroisiemeCouleurDispo(){
  for (let elem of nounourses)
  if (elem.colors[2]){
    console.log(elem.colors[2])
  } else{
    ('')
  }
}
//afficherTroisiemeCouleurDispo()


// Attention: gérer les cas où aucune troisième couleur n'existe

// EXERCICE 8

function addTenToAge(age) {
  return age + 10
}
let ageJulie = 63
let agePaul = 24
//console.log(addTenToAge(ageJulie)) // should display 22
//console.log(addTenToAge(agePaul)) // should display 34
//addTenToAge(12)

//addTenToAge(24)
// should increase age passed as argument by 10.
// Ex:



// Help: use the note "What's an argument ?" to really get how arguments work