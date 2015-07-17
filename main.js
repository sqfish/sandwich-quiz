/*
  ...........YOUR MISSION...........

  Make me a sandwich.
  
  1. Create a Sandwich object.
  2. Create 6 keys on the object all defaulted to a value of false
     a. pickle: false
     b. lettuce: false
     c. tomato: false
     d. ketchup: false
     e. mustard: false
     f. mayo: false
  3. Create different functions where each one can change the value of only one of the keys on a Sandwich object to "true".
  4. Create a function named "makeMeASandwich".
  5. That function should take 6 arguments - one for each condiment on the sandwich.
  6. If any of those 6 argument values are true, put that condiment on the sandwich.
  7. Write to the document something like this...
    "My sandwich has pickle, ketchup, mustard on it"
*/

function Sandwich(pickle, lettuce, tomato, ketchup, mustard, mayo) {
  this.pickle = false;
  this.lettuce = false;
  this.tomato = false;
  this.ketchup = false;
  this.mustard = false;
  this.mayo = false;

}

function addPickle() {
  var pickle = true;
  return pickle;
}

function addLettuce() {
  var lettuce = true;
  return lettuce;
}

function addTomato() {
  var tomato = true;
  return tomato;
}

function addKetchup() {
  var ketchup = true;
  return ketchup;
}

function addMustard() {
  var mustard = true;
  return mustard;
}

function addMayo() {
  var mayo = true;
  return mayo;
}

function makeMeASandwich(pickle, lettuce, tomato, ketchup, mustard, mayo) {
  var sandwich = new Sandwich;
  var message = "My sandwich has";

  if (pickle) {
    sandwich.pickle = addPickle();
    message = message + " pickles";
  }
  if (lettuce) {
    sandwich.lettuce = addLettuce();
    message = message + " lettuce";
  }
  if (tomato) {
    sandwich.tomato = addTomato();
    message = message + " tomatoes";
  }
  if (ketchup) {
    sandwich.ketchup = addKetchup();
    message = message + " ketchup";
  }
  if (mustard) {
    sandwich.mustard = addMustard();
    message = message + " mustard";
  }
  if (mayo) {
    sandwich.mayo = addMayo();
    message = message + " mayo";
  }

  return message;
}

var sandwichMessage = makeMeASandwich(true, true, true, true, true, true);

var element = document.getElementById("new");
element.innerHTML = sandwichMessage;

