// Powers of 2
// https://www.codewars.com/kata/57a083a57cb1f31db7000028

function powersOfTwo(n){
    let arr=[]
    for(i=0;i<=n;i++){
      arr[i] =  Math.pow(2,i)
    }
    return arr
  }
  