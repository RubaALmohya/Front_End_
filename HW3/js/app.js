/*
Creating a page where every time the user hits the "Roll Dice" button, the screen randomly updates the two dice. Use the html and css code included in the starter code folder to get started.
1) Write down pseudocode for the following program.
2) Follow the steps below to write your code.
* generate a random number between 1 - 6 and store to a variable, random1
* generate a random number between 1 - 6 and store to a variable, random2
* combine 'dice-' and random1 to form the random class for the first die, firstDie
* combine 'dice-' and random2 to form the random class for the second die, secondDie
* get the first die by ID and update the class to firstDie (hint: document.getElementById)
* get the first die by ID and update the class to secondDie (hint:document.getElementById)
3) Check to see if the Dice Roll has been hit, if it has run the diceRoll function.
*/

let images = ["dice dice-1","dice dice-2","dice dice-3","dice dice-4","dice dice-5","dice dice-6"]
let dice = document.querySelectorAll("span")
  
function rolldice(){
        let fd  = document.getElementById('first-die');
        let sd = document.getElementById('second-die');
        // let roll_dice       = document.getElementById('roll-dice');

        // roll_dice.onclick   = function () {rollDice();};
        
        let random1 = Math.floor(Math.random() * 6) + 1;
        let random2 = Math.floor(Math.random() * 6) + 1;
        // console.log(random1," ",random2)

        fd.setAttribute('class',`dice-${random1}`)
        sd.setAttribute('class',`dice-${random2}`)
    

        

    }
