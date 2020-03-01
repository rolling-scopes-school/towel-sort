
// You should implement your task here.

module.exports = function towelSort (matrix) {
    var finalArr = [];
    for (var i in matrix) {
        if (i%2 == 0) {
            matrix[i].sort((a, b) => a-b);
            for (var j of matrix[i]) {
                finalArr.push(j);
            }
        } else {
            matrix[i].sort((a, b) => b-a);
            for (var j of matrix[i]) {
                finalArr.push(j);
            }
        }
    }
    return finalArr
}
