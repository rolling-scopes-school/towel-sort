
// You should implement your task here.

module.exports = function towelSort (matrix) {
  
  let towel = [];

  if (Array.isArray(matrix) && matrix.length){
    
    for (i=0; i<matrix.length; i++){
      
      if (i%2 !== 0) {
        matrix[i] = matrix[i].reverse();
      }
  
      let add = matrix[i];
      
      for (j=0; j<add.length; j++){
          towel.push(add[j]);
      }      
    }
  }
    
  return towel;
}
