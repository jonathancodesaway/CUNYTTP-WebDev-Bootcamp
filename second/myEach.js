const myEach = (array,  callback) => {
    for (let i=0; i<array.length; i++) {
        callback(array[i]);
    }
}

//Test Below

function test(item){
	console.log(item);
}

let arr = [1,2,3];

myEach(arr, test);