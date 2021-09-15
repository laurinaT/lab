// Exercices loops = https://thomgo.github.io/Exercices/frontend/javascript/debutant/loops/loops.html

// Exercice 1 

var i = 0;
while (i <= 9) {
    console.log("One run of the loop");
    i += 2
}

// Exercice 2

for (var i = 0; i <= 9 ; i+=2) {
    console.log("One run of the loop");
}

// Exercice 3

for (var i = 0; i <= 100 ; i++) {
    console.log(i);
}

// Exercice 4

for (var i = 0; i <= 100 ; i++) 

if (i%2 === 0) {
    console.log(i + " is even");
}

else {
    console.log(i + " is odd");
}

// Exercice 5

var items = [
    "First item",
    "Second item",
    "Third item",
    "Fourth item"
];

for (var i=0; i < 5; i++) {
    console.log(items[i]);
}


// Exercice 6

customers = [
    "Albin Term",
    "Anna Sandgrove",
    "John Doe",
    "Terrance Head",
    "Yan Mock",
    "Zoe Durst"
  ];
  console.log("List of customers : ");
  for (var i=0; i < customers.length; i++) {
    console.log(customers[i]);
   }

   // Exercice 7

   var items = [
    "First item",
    "Second item",
    "Third item",
    "Fourth item"
   ]

   for(var number of items) {

    console.log(number); 
   }

   // Exercice 8 

   var citizen = [
       "firstname" : "John",
       "Lastname" : "Doe",
       "age" : 45,
       "income" : 60000
   ];
   console.log("Citizen identity : ");
   for (var i=0; i < ; i++) {

