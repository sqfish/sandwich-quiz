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
  var message = "";

  if (pickle) {
    sandwich.pickle = addPickle();
    message = message + " pickles,";
  }
  if (lettuce) {
    sandwich.lettuce = addLettuce();
    message = message + " lettuce,";
  }
  if (tomato) {
    sandwich.tomato = addTomato();
    message = message + " tomatoes,";
  }
  if (ketchup) {
    sandwich.ketchup = addKetchup();
    message = message + " ketchup,";
  }
  if (mustard) {
    sandwich.mustard = addMustard();
    message = message + " mustard,";
  }
  if (mayo) {
    sandwich.mayo = addMayo();
    message = message + " mayo,";
  }
  message = message.slice(0, -1);
  return message;
}


var $yes_sandwich = $(document.getElementById("yes-sandwich"));
var $no_sandwich = $(document.getElementById("no-sandwich"));
var $selections = $(document.getElementById("selections"));
var $toppings = $(document.getElementById("toppings"));
var $makeIt = $(document.getElementById("makeSandwich"));

var element = document.getElementById("new");

$yes_sandwich.click(function(){
  $selections.show();
  $("main").css("min-height", "max-content");
});

$no_sandwich.click(function(){
  $("button").removeClass();
  $("#toppings button").css( "opacity", ".5" );
  $("#toppings button").css( "font-weight", "400" );
  $selections.hide();
  element.innerHTML = "";
});


$toppings.find("button").click(function() {
  if ($(this).hasClass("selected") !== true) {
    $(this).css( "opacity", "1" );
    $(this).css( "font-weight", "700" );
  } else { 
    $(this).css( "opacity", ".5" );
    $(this).css( "font-weight", "400" );
  }
  $(this).toggleClass("selected");
});

$makeIt.click(function(){
  var pickleChoice = $("#pickle").hasClass("selected");
  var lettuceChoice = $("#lettuce").hasClass("selected");
  var tomatoChoice = $("#tomato").hasClass("selected");
  var ketchupChoice = $("#ketchup").hasClass("selected");
  var mustardChoice = $("#mustard").hasClass("selected");
  var mayoChoice = $("#mayo").hasClass("selected");
  var sandwichMessage = makeMeASandwich(pickleChoice, lettuceChoice, tomatoChoice, ketchupChoice, mustardChoice, mayoChoice);
  element.innerHTML = "<p>Here is your magic INVISIBLE sandwich with</p><p>" + sandwichMessage + ". You're welcome.</p>";
});


// document.getElementById("sandwich").addEventListener("click", function(){
//   document.write("ok");
// });
// var response = 
// var pickle = window.confirm('Would you like to add pickles to your sandwich?\nSelect "OK" to add pickles or cancel to decline')
// var sandwichMessage = makeMeASandwich(true, true, true, true, true, true);



