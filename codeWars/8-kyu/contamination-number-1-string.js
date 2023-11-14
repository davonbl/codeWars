// function contamination(text, char){
//   let newText = ''
//   let grab = text.split('')
//   if(text.length >= 1){
//     if(char.length >= 1){
//       for(let i = 0; i < text.length; i++){
//         grab[i] = char
//       }
//     }  
//   }
  
//   newText = grab.join().replaceAll(',', '')
//   return newText
// }

// function contamination(text, char){
//     if (text.length === 0 || char.length === 0) return ''
//     let newText = ''
//     let grab = text.split('')
//         for(let i = 0; i < text.length; i++){
//           grab[i] = char
//         }
//       newText = grab.join().replaceAll(',', '')
//       return newText
//     }

function contamination(text, char){
    if (text.length === 0 || char.length === 0) return ''
    let newText = ''
        for(let i = 0; i < text.length; i++){
          newText = newText + char // here you are concantating the text 
        }
      return newText
    }

console.log(contamination('_3ebzgh4', '&'));
console.log(contamination('//case', ' '))