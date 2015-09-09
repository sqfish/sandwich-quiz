# NSS Quiz: sandwich-quiz
sandwich-quiz is an application for sandwich ordering in a desktop browser. It was built for an assignment while I was attending Nashville Software School as part of Cohort 10.

Users can choose to order a sandwich, select toppings, and are presented with a "sandwich" according to their specifications.

### Libraries used:
1. [jQuery](http://jquery.com/)

### Quiz Instructions:
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
