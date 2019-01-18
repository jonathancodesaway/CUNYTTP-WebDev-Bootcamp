exports.diff = (a, b) => {
	let c = a.concat(b);
	return (c.filter( onlyUnique ));
}

exports.setInter = (a,b) => {
	let ret = [];
	for (var i = 0; i < a.length; i++){
		let isIn = false;
		for (var j = 0; j < b.length; j++){
			if (a[i] == b[j]){
				isIn = true;
			}
		}
		if (isIn){
			ret.push(a[i]);
			isIn = false;
		} 
	}
	return ret;
}