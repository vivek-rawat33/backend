//custom map function
function mapCopy(arr, transform) {
  newArr = [];
  for (let i = 0; i < arr.length; i++) {
    newArr.push(transform(arr[i]));
  }
  return newArr;
}
const arr = [2, 3, 4, 5, 6];
function transform(arr) {
  return arr * 2;
}
console.log(mapCopy(arr, transform));
