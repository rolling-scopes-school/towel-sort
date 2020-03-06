
// You should implement your task here.

module.exports = function towelSort (matrix) {
  if(!Array.isArray(matrix))
  return [];
    var res=[];
  k=0;
    for(let i=0;i<matrix.length;i++)
  { if(i%2==0)
     {for(let j=0;j<matrix[i].length;j++)
        {res[k]=matrix[i][j];
        k++;}}
      else 
      for(j=matrix[i].length-1;j>=0;j--)
        {res[k]=matrix[i][j];
        k++;}  
  }
  console.log(res);
    return res;
}
