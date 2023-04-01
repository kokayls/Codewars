//https://www.codewars.com/kata/514b92a657cdc65150000006
export function solution(number) {
  let sum = 0;
  for (let index = 3; index < number; index++) {
    if (index % 3 === 0 || index % 5 === 0) {
      sum += index;
    }
  }
  return sum;
}

//https://www.codewars.com/kata/5264d2b162488dc400000001
export function spinWords(string) {
  let words = string.split(" ");
  let reversed = words.map((word) =>
    word.length < 5 ? word : word.split("").reverse().join("")
  );
  return reversed.join(" ");
}

//https://www.codewars.com/kata/54da5a58ea159efa38000836
export function findOdd(A) {
  let count = {};
  A.forEach(v => {
    count[v] = count[v] ? count[v] + 1 : 1;
  });

  console.log(count)
  
  return +Object.keys(count).find(key => count[key] % 2 === 1);
}

//https://www.codewars.com/kata/541c8630095125aba6000c00
export function digitalRoot(n) {
  let sum = n;
  
  while(sum >= 10) {
    let string = sum.toString();
    let nums = string.split('').map(x=>+x)
    sum = nums.reduce((a, b) => a + b)
  }
  
  return sum
}

//https://www.codewars.com/kata/5266876b8f4bf2da9b000362
export function likes(names) {
  //
}