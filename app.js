// app.js
const express = require('express')
const app = express()


app.engine('html', require('ejs').renderFile);
app.set('view engine', 'ejs');
app.set('views', __dirname);
app.use(express.static('public'));

app.get('/', (req, res) => {                                  // when URL is the root of your server
    res.render('templates/index');
})


//`run dev` node app.js
//app.listen(3000, () => console.log('CVS app listening on port 3000!'))
//prod
app.listen(process.env.PORT || 5000)
app.use('/js', express.static(__dirname + '/node_modules/bootstrap/dist/js')); // redirect bootstrap JS
app.use('/js', express.static(__dirname + '/node_modules/jquery/dist')); // redirect JS jQuery
app.use('/css', express.static(__dirname + '/node_modules/bootstrap/dist/css')); // redirect CSS bootstrap
app.use('/public', express.static(__dirname + '/public')); // public
app.use('/assets', express.static(__dirname + '/assets')); // assets