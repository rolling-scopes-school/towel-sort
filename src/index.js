module.exports = function towelSort (matrix) {
  result=[]
  if (Array.isArray(matrix) && matrix.lenght==0 || !matrix) {
    return []
  }

  matrix.sort((a, b) => {
  return a - b
    })
    
    matrix.forEach((element, index) => {
    if(!Array.isArray(element)){
        return result.push(element)
    }
    if(Array.isArray(element)){
      element.sort((a, b) => {
      return a - b
    })    
     if(index%2!=0 && index!=0){
      result.push(element.reverse())
    }
      else{
      result.push(element)
    }
  }  
});
  return result.flat();
}