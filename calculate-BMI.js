function bmi(weight, height) {
    let bmi = (weight)/ (Math.pow(height,2))
    let BMI;
    bmi <= 18.5? BMI = "Underweight"
      : bmi <= 25.0? BMI ="Normal"
      : bmi <= 30.0? BMI = "Overweight"
      : BMI = 'Obese'
    
    return BMI
  }

console.log(bmi(5,5))


  //other solution by ulitizing the 'return' keyword

//   function bmi(weight, height) {
//     let bmi = (weight)/ (Math.pow(height,2));
  
//     return bmi <= 18.5 ? "Underweight"
//       : bmi <= 25.0 ? "Normal"
//       : bmi <= 30.0 ? "Overweight"
//       : "Obese";
//   }