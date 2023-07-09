function tripleTrouble(one, two, three){
    //Solution
    let newArr = []
    let newOne = one.split('');
    let newTwo = two.split('');
    let newThree = three.split('')
    for(let i = 0; i < newOne.length; i++){
      newArr.push(newOne[i], newTwo[i], newThree[i])
    }
    
    let newWord = newArr.join('')
    return newWord
   }