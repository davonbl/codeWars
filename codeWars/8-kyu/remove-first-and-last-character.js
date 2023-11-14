function removeFirstAndLastChar(str){
    let newArr = str.split('')
    newArr.pop()
    newArr.shift()
    return newArr.join().replaceAll(',', '')
}