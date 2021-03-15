
// You should implement your task here.
module.exports = function towelSort(matrix) {

    let myArray = [];

    if (Array.isArray(matrix) && matrix.length > 0) {

        for (i = 0; i < matrix.length; i++) {

            if (i % 2 !== 0) {
                matrix[i] = matrix[i].reverse();
            }

            let elements = matrix[i];

            for (n = 0; n < elements.length; n++) {
                myArray.push(elements[n]);
            }
        }
    }

    return myArray;
}
