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

while(i < students.length) { // car i représente l'index des étudiants
    console.log(students [i]);
    i++;
}

for(var j = 0; j < students.length; j++) {
        console.log(students[j]);
}

