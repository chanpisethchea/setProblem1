console.log("CONNECTED");

function printReverse(arr){
	for(var i=arr.length-1; i >=0; i--){
		console.log(arr[i]);

	}

}

function isUniform(arr){
	var first = arr[0];
	for(var i=1; i <arr.length; i++){
		if(arr[i] !== first){
			return false;
		}
	}
  return true;

}

// function isUniform(arr){
// 	var first = arr[0];
// 	arr.forEach(function(element){
// 		if(element !== first){
// 			return false;
// 		}
// 	});
// 	return true;

// }

function sumArry(arr){
	 var sum = 0;
	 arr.forEach(function(element){
	 	sum += element;

	 });
	 return	sum;
}

function max(arr){
	var max = arr[0];
	  for(var i=1; i<arr.length; i++){
	  	if(arr[i] > max){
	  		max = arr[i];
	  	}
	  }
	  return max;
}





printReverse([3,6,2,5]);
 