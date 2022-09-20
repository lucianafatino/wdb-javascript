function bmiCalculator(weight, height){
    var bmi = weight / (height*height);
    bmi = Math.round(bmi);
    if(bmi <= 18.55){
        return `Your BMI is ${bmi}, so you are underweight.`;
    }
    if(bmi > 18.55 && bmi <= 24.9){
        return `Your BMI is ${bmi}, so you have a normal weight.`;
    }
    if(bmi > 24.9){
        return `Your BMI is ${bmi}, so you are overweight.`; 
    }
}
bmiCalculator(50, 1.55);