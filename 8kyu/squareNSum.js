// Square(n) Sum
// https://www.codewars.com/kata/515e271a311df0350d00000f
//

function squareSum(numbers){
    let sum = 0
    for(i=0;i<numbers.length;i++){
      sum+= Math.pow(numbers[i], 2)
    }
    return sum
  }