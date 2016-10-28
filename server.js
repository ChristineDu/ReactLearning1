var express = require('express');

// Create our app
var app = express();

// For heroku, http and https redirections. Environment variable will get the port number when heroku started
const PORT = process.env.PORT || 3000;

app.use(function (req, res, next){
  if(req.headers['x-forwarded-proto'] === 'https'){
    res.redirect('http://' + req.hostname + req.url);
  }else{
    next();
  }
});

app.use(express.static('public'));

app.listen(PORT, function () {
  console.log('Express server is up on port ' + PORT);
});
