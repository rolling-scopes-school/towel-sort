
// You should implement your task here.

module.exports = function towelSort (matrix) {
  if (!matrix){
    return []
  }
  let result = []
  for (let i=1; i<matrix.length; i = i+2){
    matrix[i].reverse()
  }
  res = [].concat(...matrix)
  return res

}
