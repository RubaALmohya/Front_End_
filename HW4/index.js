 console.log("----------Question 1---------")
const friends = ["Melissa", "Marc", "Andrew", "Nick"];

friends.forEach(function (item) {
  console.log("I have a friend named " + item.toLowerCase());
});

console.log("----------Question 2---------")
const numbers = [1, 5, 8];
const squared = numbers.map((num) => {
  return num**2;
}); 
console.log(squared);

console.log("----------Question 3---------")
const instructors = ["Alex", "Daniel", "Morgan", "Ben", "Micah", "Jims"];
const newList = instructors.map((item) => {
  return item + " is awesome";
});
console.log(newList);

console.log("----------Question 4---------")
const nums = [25, 6, 8, 3];
let evenNum = 0;
nums.reduce((acc, num) => {
  if (acc % 2 == 0 || num % 2 == 0) {
    evenNum++;
  }
});

console.log(evenNum);

console.log("----------Question 5---------")
const people = ["jerks", "nice people", "jerks", "nice people", "nice people"];
const jerks = people.filter((item) => item.includes("jerks"));
console.log(jerks);

console.log("----------Arrow Methods 1---------")
let myFunction = (a, b) => a * b;
const average = (arr) => {
  let cont = 0;
  let sum = 0;
  arr.forEach((item) => {
    cont++, (sum += item);
  });
  return sum / cont;
};
console.log(average([8, 2, 2, 4]));

console.log("----------Arrow Methods 2---------")
const reverse = (word) => {
  return word.split("").reverse().join("");
};
console.log(reverse("caterpillar"));

console.log("----------Objects Exercise: The Movie Database---------")
let Movie = { 
    title: "Puff the Magic Dragon", 
    duration: 30, 
    stars: ["Puff","Jackie","Living Sneezes"],
    intr : function(){
        console.log(`${this.title}\nlasts for ${this.duration} minutes\nStars: ${this.stars}`)
    }
 };
 Movie.intr()
