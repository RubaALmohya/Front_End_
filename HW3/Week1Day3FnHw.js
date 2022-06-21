//  Create a function that will get the sum of the numbers between 1 and n and return the answer summation(5) 
// should return 15 because 1+2+3+4+5=15

function summation(n){
    let sum = 0;
      for(i = 0; i <= n; i++){
        sum += i; 
         }
         console.log(` The sum of n numbers is = ${sum}`)
         }
summation(5);

// Create a function to get the sum of all the even numbers in a group summationEven(5) 
// should return 6 because 2+4=6

function summationEven(n){
    let sum = 0;
      for(i = 0; i <= n; i++){
        if(i%2 == 0){
            sum += i; 
        }
         }
    console.log(` The sum of even numbers is = ${sum}`)
         }
summationEven(5);