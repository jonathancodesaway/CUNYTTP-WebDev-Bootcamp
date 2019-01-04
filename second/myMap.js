const myMap = (array, callback) => {
	var newarray = callback(array)
	return newarray;
}

//Test Below

function test(array){
	for (let i=0; i<array.length; i++) {
        array[i] *= 2;
    }
    return array;
}

var arr = [1,2,3];

console.log(myMap(arr, test));