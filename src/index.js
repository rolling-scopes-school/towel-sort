
// You should implement your task here.

module.exports = function towelSort (matrix) {
  if(!arguments.length){
    return [];
  } else {
    let er = [];
    for(let i=0; i<matrix.length; i++){
      if(i%2==0){
        for(let j = 0; j<matrix[i].length; j++){
          er.push(matrix[i][j]);
        }
      }else{
        matrix[i].sort((a,b) => b-a);
        
        for(let j = 0; j<matrix[i].length; j++){
          er.push(matrix[i][j]);
        }
      }
    }
  
    return er;
  }
}
