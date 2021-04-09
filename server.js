const express = require('express');

const PORT = 5000;
const app = express();

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.use(express.static('public'));
app.engine('html', require('ejs').renderFile);

app.get('/',function(req,res){
    res.render('index.html')
 });

app.listen(PORT, () => {
  console.log(`😎 Server is listening on port ${PORT}`);
});