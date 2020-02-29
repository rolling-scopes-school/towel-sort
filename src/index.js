
// You should implement your task here.

module.exports = function towelSort (matrix) {
  if(!matrix){
    return [];
  }

  let res = []
  for (let arr of matrix) {
    if(!(matrix.indexOf(arr) % 2 === 0)){
      res = [...res,...arr.reverse()];
      continue;
    }
    res = [...res,...arr]; 
  }
  return res;
}
