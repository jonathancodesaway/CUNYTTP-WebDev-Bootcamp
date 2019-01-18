exports.setDiff = (a,b) => {
	let ret = [];
	for (var i = 0; i < a.length; i++){
		let isIn = false;
		for (var j = 0; j < b.length; j++){
			if (a[i] == b[j]){
				isIn = true;
			}
		}
		if (!isIn){
			ret.push(a[i]);
		} else {
			isIn = false;
		}
	}

	for (var i = 0; i < b.length; i++){
		let isIn = false;
		for (var j = 0; j < a.length; j++){
			if (b[i] == a[j]){
				isIn = true;
			}
		}
		if (!isIn){
			ret.push(b[i]);
		} else {
			isIn = false;
		}
	}
	return ret;

}