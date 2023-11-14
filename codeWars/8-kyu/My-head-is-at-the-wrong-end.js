function fixTheMeerkat(arr) {
    //your code here 
     let head = arr[2]
     let body = arr[1]
     let tail = arr[0]
     
     let newArr = [head, body, tail]
     return newArr
   }

let testValue = ['tail', 'body', 'head']
console.log(fixTheMeerkat(testValue))