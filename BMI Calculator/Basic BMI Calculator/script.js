function bmiCalculator(weight, height){
    var bmi = weight / (height*height);
    return Math.round(bmi);
}
bmiCalculator(80 , 1.55);