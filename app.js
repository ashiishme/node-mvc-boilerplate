/**
 * Name: Node JS MVC Boilerplate
 * Description: A simple NodeJS Model View Controller boilerplate application.
 * Author: Ashish Yadav
 * Author URI: https://www.ashiish.me
 */

const path = require('path')
express = require('express'),
app = express(),
routes = require('./routes/router');

app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(express.static(path.join(path.dirname(process.mainModule.filename), 'public')));
app.use(routes);

app.listen(process.env.PORT || 3000, () => {
	console.log('server started');
});