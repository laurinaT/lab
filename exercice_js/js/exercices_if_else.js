// Exercice 1

if (true) {
    console.log("Condition is working !");
  }

  if (false) {
    console.log("Condition is working !");
  }

  else {
    console.log("Condition is not working !");
  }

  if (false === false) {
    console.log("Condition is working !");
  }

  // Exercice 2

  var content = 123;
  if (content) {
    console.log("Condition is OK");
  }
  else {
    console.log("Condition is KO");
  }

  // Exercice 3

  var price = "forty-five";

  if (price === 45) {
    console.log("The price is a number");
  }
  else if (price == 45) {
    console.log("The price is a string");
  }
  else {
    console.log("The price is something else");
  }

  // Exercice 4

  var age = 32;

  if (age >= 18) {
      console.log("You are welcome to enter");
  }
  else {
      console.log("You can't enter here");
  }

  // Exercice 5

  var store = ["Carrefour", "Colorado", "South-Park", 483];

if (store[0] === "Walmart" && store[1] === "Colorado" && store[2] === "South-Park") {
    console.log("The Walmart in South-Park has " + store[3] + " employees")
}

else if (store[0] === "Walmart" && store[1] === "Colorado") {
  console.log("Hum this is an other Walmart from Colorado");
}

else if(store[0] === "Walmart") {
  console.log("Too bad this is just a Walmart");
}

else {
  console.log("This is not a Walmart at all !!!!");}

  //Exercice 6

  var student =
    {
      "name" : "John Doe",
      "grade" : 14,
    }


    if (student["grade"] < 10)
    {
        console.log("Recalé !");
    }

    else if (student["grade"] < 12) 
    {
        console.log("Passable");
    }

    else if (student["grade"] < 14)
    {
        console.log("Moyen");
    }

    else if (student["grade"] < 16)
    {
        console.log("Bien");
    }

    else if (student["grade"] > 16)
    {
        console.log("Très bien");
    }