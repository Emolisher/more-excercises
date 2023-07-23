//COunt Vowels

const countVowels = (str) => {
  const vowels = ["a", "e", "i", "o", "u"];
  return str
    .toLowerCase()
    .split("")
    .reduce((acc, char) => {
      if (vowels.includes(char)) {
        acc++;
      }
      return acc;
    }, 0);
};

console.log(countVowels("How many vowels are here"));

//optimize

const countVowels2 = (str) => {
  const vowels = ["a", "e", "i", "o", "u"];
  return str
    .toLowerCase()
    .split("")
    .reduce((acc, char) => {
      return vowels.includes(char) ? acc + 1 : acc;
      //acc ++ doesn't work (idk why)
    }, 0);
};
console.log(countVowels2("How many vowels?"));

// оr

const countVowels3 = (str) => {
    const vowels = ["a", "e", "i", "o", "u"];
    return str.toLowerCase().split("").reduce((acc, char) => 
     vowels.includes(char) ? acc + 1 : acc, 0);
  };
  console.log(countVowels2("How many?"));  