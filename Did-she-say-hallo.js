const validateHello = (greetings) => {
  let res = greetings.toLowerCase();
  return res.includes('hello')? true
    : res.includes('ciao')? true
    : res.includes('salut')? true
    : res.includes('hallo')? true
    : res.includes('hola')? true
    : res.includes('ahoj')? true
    : res.includes('czesc')? true
    : false;
}
