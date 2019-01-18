const fs = require('fs');
var newlist = [];


fs.readFile('people.json', function read(err, data)  { 
		var temp = JSON.parse(data);
		console.log(temp['list']);
		var newlist = temp['list'];
	});

fs.readFile('people2.json', function read (err, data)  { 
		var temp2 = JSON.parse(data);
		console.log(temp2['list'])
		newlist.concat(temp2['list']);
	});

fs.open('peopleComplete.txt', 'w', function (err, file) {
	if (err) throw err;
	console.log("new file made");
	});


newlist.sort();
console.log(newlist);

fs.appendFile('peopleComplete.txt', newlist, function (err) {
  if (err) throw err;
  console.log('Updated!');
}); 

