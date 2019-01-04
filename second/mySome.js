const mySome = (array, callback) => {
	for (let i=0; i<array.length; i++) {
        if (callback(array[i])){
        	return true;
        }
    }
    return false;
}

//Test Below

function test(item){
	if (item > 1){
		return true;
	} else {
		return false;
	}
}

let arr = [1,2,3];

console.log(mySome(arr, test));