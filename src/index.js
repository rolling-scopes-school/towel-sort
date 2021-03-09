
// You should implement your task here.

module.exports = function towelSort (matrix) {
  var arr=[];
  if (typeof matrix =='object'){
  for (var i=0; i<matrix.length; i++){
      var currentarr=matrix[i];
      if ((i+2)%2===0){
          for (var j=0; j<currentarr.length; j++){
          arr.push(currentarr[j]);

          }
      }else {
          for (var j=(currentarr.length-1); j>=0; j--){
          arr.push(currentarr[j]);   
      }
      }
  }
}

return arr;
}


