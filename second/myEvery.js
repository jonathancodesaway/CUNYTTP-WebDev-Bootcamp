function myEvery(array, callback){
	for (let i=0; i<array.length; i++) {
        if (!callback(array[i])){
        	return false;
        }
    }
    return true;
}

function test(item){
	if (item > 2){
		return true;
	} else {
		return false;
	}
}

let arr = [1,2,3];

console.log(myEvery(arr, test));