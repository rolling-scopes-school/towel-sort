
// You should implement your task here.

module.exports = function towelSort (matrix) {
  if (matrix === [] || matrix === undefined) return [];
  let b = [];
  for (let i = 0; i < matrix.length; i++) {
    if (i % 2 !== 0) {
      for (let j = matrix[i].length - 1; j >=0; j--) {
        b.push(matrix[i][j]);
      }
    } else {
    for (let j = 0; j < matrix[i].length; j++) {
      b.push(matrix[i][j]);
    }
  }
  }
  return b;
}
