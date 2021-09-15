console.log("\n##### Exemples de boucles #####\n");

// While loop exemple
var i = 0;

var students = [
    "Theo",
    "Louis",
    "Chloé",
    "Cécile",
    "Brandon",
    "Timothé"
];

// while(i < students.length) { // car i représente l'index des étudiants
//     console.log(students [i]);
//     i++;
// }

// for(var j = 0; j < students.length; j++) {
//         console.log(students[j]);
// }

for(var student of students) {

console.log(student); //student est une variable créée dans la boucle et n'a pas d'existence ailleurs que dans la boucle, elle va chercher les valeurs dans le tableau directement.
//représente var value of students
}

for(var index in students) {
    console.log(students);
    //for in est plus utile car une fois que j'ai les clés je peux récupérer la valeur
}

for(var index in students) {
    console.log("étudiant numéro : " + (parseInt(index) +1) + students[index]);
 }
  // récupère les valeurs de la for of

  var human = {
      "name" : "Henry",
      "age" : 45,
      "sex" : "male",
      "country" : "France"
  };
  for(var key in human){
      console.log(key + " : " + human[key]);
  }