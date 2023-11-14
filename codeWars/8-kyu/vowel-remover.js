function shortcut(string) {
    let newArr = string.split('')
    for(let i = 0; i < newArr.length; i++){
      if(newArr[i] === 'a' || newArr[i] === 'e' || newArr[i] === 'i' || newArr[i] === 'o'
      || newArr[i] === 'u'){
        newArr.splice(i,1)
        i--
      }
    }
    return newArr.join('')
  }