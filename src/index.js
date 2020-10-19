
// You should implement your task here.

module.exports = function towelSort (arr) {
     if(arr === undefined ) {
         return [];
     }

    let newArr = [];
    for(let i=0; i < arr.length; i++){ 
      if( i%2 == 0){
        for(let j=0; j < arr[i].length; j++){
        newArr.push(arr[i][j]);
      } 
      } else {
        for(j=arr[i].length-1; j >= 0; j--){
        newArr.push(arr[i][j]);
      }
    }
     
  }
  return newArr;
  }



