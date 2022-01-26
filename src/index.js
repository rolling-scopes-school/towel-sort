
// You should implement your task here.

module.exports = function towelSort (matrix) {
    if (matrix === undefined) return [];
    matrix.map((elem, index) => {
        if(index % 2 !== 0) return elem.reverse()
        else return elem
    })
    return [].concat(...matrix)
}
