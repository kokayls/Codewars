export function solution(number) {
  let sum = 0;
  for (let index = 3; index < number; index++) {
    if (index % 3 === 0 || index % 5 === 0) {
      sum += index;
    }
  }
  return sum;
}
