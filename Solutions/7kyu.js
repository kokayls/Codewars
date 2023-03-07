//https://www.codewars.com/kata/54ff3102c1bad923760001f3
export function getCount(str) {
  const vovels = ["a", "e", "i", "o", "u"];
  let count = 0;
  for (const letter of str) {
    if (vovels.includes(letter)) {
      count++;
    }
  }
  return count;
}

//https://www.codewars.com/kata/52fba66badcd10859f00097e
export function disemvowel(str) {
//   const vovels = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U" ];
//   for (const vovel of vovels) {
//     str = str.replaceAll(vovel, "");
//   }
//   return str;
return str.replace(/[aeiou]/gi, ''); //g-global i=insensitive. Case insensitive
}

//https://www.codewars.com/kata/546e2562b03326a88e000020