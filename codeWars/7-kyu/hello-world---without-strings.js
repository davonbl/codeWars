const helloWorld = () => {
    let binarySpace = String(0) + String(0) + String(100000);
    convertBinarySpace = binarySpace.split(/\s/);
    convertBinarySpace = convertBinarySpace.map((ele) => parseInt(ele, 2));
    convertBinarySpace = convertBinarySpace.map((ele) =>
      String.fromCharCode(ele)
    );
    let emptySpaceStr = joinWithoutQuotes(convertBinarySpace);
  
    let outputHelloWorld =
      String(0) +
      String(1001000) +
      emptySpaceStr +
      String(0) +
      String(1100101) +
      emptySpaceStr +
      String(0) +
      String(1101100) +
      emptySpaceStr +
      String(0) +
      String(1101100) +
      emptySpaceStr +
      String(0) +
      String(1101111) +
      emptySpaceStr +
      String(0) +
      String(0) +
      String(101100) +
      emptySpaceStr +
      String(0) +
      String(0) +
      String(100000) +
      emptySpaceStr +
      String(0) +
      String(1010111) +
      emptySpaceStr +
      String(0) +
      String(1101111) +
      emptySpaceStr +
      String(0) +
      String(1110010) +
      emptySpaceStr +
      String(0) +
      String(1101100) +
      emptySpaceStr +
      String(0) +
      String(1100100) +
      emptySpaceStr +
      String(0) +
      String(0) +
      String(100001);
  
    let binary = outputHelloWorld.split(/\s/);
    binary = binary.map((ele) => parseInt(ele, 2));
    binary = binary.map((ele) => String.fromCharCode(ele));
  
    const displayWord = binary.map((element) => element.charCodeAt(0));
    return String.fromCharCode(...displayWord);
  };
  
  function joinWithoutQuotes(arr) {
    const charCodes = arr.map((element) => element.charCodeAt(0));
    return String.fromCharCode(...charCodes);
  }
  