
// You should implement your task here.

module.exports = function towelSort (arr1) {
		const arr2 = [];
		if (arr1==null) {return [];}

		for (i = 0; i < arr1.length; i++) {
			
			if (i%2 == 0) {
				
				let j = arr1[i].length;
				
				for (j = 0; j < arr1[i].length; j++) {
					
    				arr2.push(arr1[i][j]);
    				
  				}
		
			}
			else {
				for (j =  arr1[i].length-1; 0 <=j; j--) {
    			arr2.push(arr1[i][j]);
    
  				}
  			}
		}
		return arr2;
}
