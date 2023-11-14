function nameInStr(str, name) {
  let newStr = str.toLowerCase();
  let newName = name.toLowerCase();
  let keepCount = 0;
  for (let i = 0; i < newStr.length; i++) {
    newStr[i] === newName[keepCount] ? keepCount++ : null;
    if (keepCount === newName.length) {
      return true;
    }
  }
  return false;
}
