let greetings = 'Hello World';
alert(greetings);

//number
//string
//boolean
//null
//undefined
//object
//symbol


const age = 42;
let isMarried = false;

const userAge = parseFloat(prompt('Ente your age'));
alert('Your age is ' + userAge);
console.log(userAge);
const nextAge = userAge + 1;
alert('Next year you will be ' + nextAge);

// if(userAge<18) {//< > <= >= == === != !==
//     alert('You are child')
// } else{
//     alert('You are adult')
// }
const ageString = checkAge(userAge);
alert('You are ' + ageString);

function checkAge(age) {
    if (age > 100) {
        return 'old'
    }
    if (age < 18) { // < > <= >= == === != !==
        return 'child';
    }else {
        return 'adult';
    }
}