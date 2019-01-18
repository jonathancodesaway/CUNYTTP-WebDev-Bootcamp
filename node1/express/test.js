const express = require('express');

const app = express();



app.get('/', (req, res) => {

    console.log('Hit root!')

    res.send('<h1>THIS IS THE ROOT!<h1>')

})



app.get(['/apple', '/ale' ], (req, res) => {

    res.send('<h1>Apple or Ale?<h1>')

})


app.get(['/who+a+', '/wh', '/who', '/wha'], (req, res) => {
	res.send('<h1>I know, right?!"</h1>')
})

app.get(['/user/:name/:last'], (req, res) => {
	console.log("blah", req.query)
	var {name, last} = req.params
	res.send(`<p>Hello ${name} ${last}</p>`)
})


app.listen(3000, () => {

    console.log('Listening on port 3000!')

})