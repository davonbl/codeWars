function likes(names) {
  let newArr = [];
  let keepCount = 0;
  if (names.length <= 0) {
    return "no one likes this";
  }
  for (let i = 0; i < names.length; i++) {
    if (names.length > 3) {
      i === 0? newArr.push(names[i] + ",")
        : i === 1? newArr.push(names[i])
        : i > 1 && i !== names.length - 1? keepCount++
        : newArr.push("and", keepCount + 1, "others", "like", "this");
    } else if (names.length > 2) {
      i === 0? newArr.push(names[i] + ",")
        : i !== names.length - 1? newArr.push(names[i])
        : newArr.push("and", names[i], "like", "this");
    } else if (names.length > 1) {
      i === 0? newArr.push(names[i], "and")
        : newArr.push(names[i], "like", "this");
    } else {
      return names[i] + " likes this";
    }
  }
  return newArr.join(" ");
}
