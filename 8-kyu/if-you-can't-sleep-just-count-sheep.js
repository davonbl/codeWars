let countSheep = function (num){
    //your code here
      let sleep = ''
      if(num > 0){
        for(let i = 1; i <= num; i++){
              sleep = sleep + `${i} sheep...`
        }
      }
     return sleep
}

console.log(countSheep(3))