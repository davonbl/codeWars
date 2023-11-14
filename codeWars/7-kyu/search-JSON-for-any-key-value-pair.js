function getCharacters(obj, key, val) {
    let object = obj.characters;
    let foundCharacters = [];
    object.forEach((ele, index, array) => {
      if(ele.hasOwnProperty(key)){
          if(ele[key].toLowerCase() === val.toLowerCase()){
            foundCharacters.push(ele);
          }
      }
    })
    return foundCharacters;
  };