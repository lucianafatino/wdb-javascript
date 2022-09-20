function whosPaying(names) {
    const random = Math.floor(Math.random() * names.length);
    return `${random, names[random]} is going to buy lunch today!`;  
}

console.log(whosPaying(['Luciana', 'Marcos', 'Ítalo', 'Carla']));

// Professors answer
// function whosPaying(names) {
//     let numberOfPeople = names.length;
//     let randomPersonPosition = Math.floor(Math.random() * numberOfPeople);
//     let randomPerson = names[randomPersonPosition];
//     return randomPerson + ' is going to buy lunch today!';
// }
