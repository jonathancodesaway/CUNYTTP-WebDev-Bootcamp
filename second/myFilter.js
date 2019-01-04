const myFilter = (array, callback) => {
	let newarray = []
	for (let i=0; i<array.length; i++) {
        if (callback(array[i])){
        	newarray.push(array[i]);
        }
    }
    return newarray;
}

//Test Below

function test(item){
	if (item >= 2) {
		return true;
	} else {
		return false;
	}
}

let arr = [1,2,3];

console.log(myFilter(arr, test));