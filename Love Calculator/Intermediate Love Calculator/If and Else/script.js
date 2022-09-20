let name01 = prompt("Enter your name:");
let name02 = prompt("Enter your lover's name:");
let result = Math.random();
result *= 100;

if(result > 70){
    alert(`Your love score is ${Math.floor(result) + 1}%. You love each other very much 💞`);
} 

if(result > 30 && result <= 70){
    alert(`Your love score is ${Math.floor(result) + 1}%.`);
}

if(result <= 30){
    alert(`OH, this is too bad!! Your love score is ${Math.floor(result) + 1}% 💔`);
}
