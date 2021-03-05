
// You should implement your task here.

module.exports = function towelSort (matrix) {
  try{
        if(matrix.length==0){
             return [];
            }
            let flattend = [];
            (function flat(matrix){
              for (let i = 0; i < matrix.length; i++) {
                if(i%2!=0){
                  matrix[i].reverse();
                }
                  flattend.push(matrix[i]);
              }
            })(matrix);
            return flattend.flat();
  
}catch{
    return [];
  }
}
