numberOfBottles = 99;
function beer(){
    while(numberOfBottles > 1){
        console.log(`${numberOfBottles} bottles of beer on the wall, ${numberOfBottles} bottles of beer.`);
        numberOfBottles--;
        console.log(`Take one down and pass it around, ${numberOfBottles} bottles of beer on the wall.`);
        if(numberOfBottles === 1){
            console.log(`${numberOfBottles} bottle of beer on the wall, ${numberOfBottles} bottle of beer.`);
            console.log(`Take one down and pass it around, no more bottles of beer on the wall.`);
            numberOfBottles--;
        }
        if(numberOfBottles === 0){
            console.log(`No more bottles of beer on the wall, no more bottles of beer.`);
            console.log(`Go to the store and buy some more, 99 bottles of beer on the wall.`);
        }
    }
}
beer();