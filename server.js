const express = require('express');
const app = express();

app.use(require('compression')());
app.use(require('cors')());
app.use(require('helmet')());

app.use(express.static('/public'));

app.get('/', async (req, res) => {
	res.sendFile(__dirname + '/index.html');
});

app.listen(process.env.PORT || 3000);
