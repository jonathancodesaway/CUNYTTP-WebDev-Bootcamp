const myReduce = (array, callback, init) => {
	let output = init;
	for (let i=0; i<array.length; i++) {
        output = callback(array[i], output);
    }
    return output;
}

//Test Below

function test(item, modifier){
	return modifier + item;
}

let arr = [1,2,3];

console.log(myReduce(arr, test, 0));