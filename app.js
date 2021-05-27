const express = require('express');
const app = express();
const port = 3001;

app.get('/', (req, res) => {
	res.send('<h1>aws ec2 demo</h1>');
});
app.get('/products', (req, res) => {
	res.send([
		{
			productId: '101',
			price: 1000,
		},
		{
			productId: '102',
			price: 1500,
		},
	]);
});

app.listen(port, () => {
	console.log(`Demo app is up and listening to port: ${port}`);
});
