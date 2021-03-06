
module.exports = function towelSort (matrix) {

    if(matrix == undefined) return []
    for (let i = 0; i < matrix.length; i++) {
      if(i%2) matrix[i].reverse();
    }
    return matrix.flat()
}
