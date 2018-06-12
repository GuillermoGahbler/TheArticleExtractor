const express = require('express');
const path = require('path');
const exphbs  = require('express-handlebars');
const app = express();
const PORT = process.env.PORT || 3000;


app.use(express.static(path.join(__dirname,"../public")));
app.set('views', path.join(__dirname, './views'));
app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

app.listen(PORT, function() {
    // Log (server-side) when our server has started
    console.log("Server listening on: http://localhost:" + PORT);
  });
  
  