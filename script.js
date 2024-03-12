 // Array of words for the game
 var words = ["apple", "banana", "orange", "grape", "pineapple"];

 // Select a random word from the array
 var randomIndex = Math.floor(Math.random() * words.length);
 var selectedWord = words[randomIndex];

 // Array to store guessed letters
 var guessedLetters = [];

 // Remaining attempts
 var attemptsLeft = 5;

 // Initialize word display
 var wordDisplay = [];
 for (var i = 0; i < selectedWord.length; i++) {
     wordDisplay.push("_");
 }
 document.getElementById("word-display").textContent = wordDisplay.join(" ");

 // Function to check the guess
 function checkGuess() {
     var guessInput = document.getElementById("guess-input").value.toLowerCase();
     if (!guessInput) return; // Do nothing if the input is empty

     if (selectedWord.includes(guessInput)) {
         // Update word display with correctly guessed letters
         for (var i = 0; i < selectedWord.length; i++) {
             if (selectedWord[i] === guessInput) {
                 wordDisplay[i] = guessInput;
             }
         }
         document.getElementById("word-display").textContent = wordDisplay.join(" ");

         // Check if the word is fully guessed
         if (!wordDisplay.includes("_")) {
             document.getElementById("message").textContent = "Congratulations! You guessed the word!";
             disableInput();
         }
     } else {
         // Decrement attempts left
         attemptsLeft--;

         // Display message
         document.getElementById("message").textContent = "Incorrect guess! Attempts left: " + attemptsLeft;

         // Check if attempts are exhausted
         if (attemptsLeft === 0) {
             document.getElementById("message").textContent = "Sorry, you ran out of attempts! The word was: " + selectedWord;
             disableInput();
         }
     }

     // Clear input field
     document.getElementById("guess-input").value = "";
 }

 // Function to disable input field and button
 function disableInput() {
     document.getElementById("guess-input").disabled = true;
     document.querySelector("button").disabled = true;
 }