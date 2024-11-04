
// TASK 1
const greet = (name) => {
    console.log(`hello, ${name}!`);
}

greet("jenan");


// TASK 2
const sum = (num1, num2) => {
    console.log(num1 + num2);
}

sum(3, 7);


// TASK 3
const square = (num) => {
    console.log(num * num);
}

square(3);


// CHALLENGE
const arraySquared = (nums) => {
    newArray = nums.map(function (num) {
        return num * num
    });
    console.log(newArray);
}

let numbers = [1, 4, 5, 2];

arraySquared(numbers);