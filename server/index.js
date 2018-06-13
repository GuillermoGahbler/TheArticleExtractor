const express = require('express');
const path = require('path');
const exphbs = require('express-handlebars');

const app = express();
const PORT = process.env.PORT || 3000;
const routes = require('./routes')


app.use(express.static(path.join(__dirname, "../public")));
app.set('view engine', 'handlebars');
app.engine('handlebars', exphbs({defaultLayout: path.join(__dirname, './views/layouts/main')
}));
app.set('views', path.join(__dirname, './views'));
app.use(routes);

app.listen(PORT, function () {
  // Log (server-side) when our server has started
  console.log("Server listening on: http://localhost:" + PORT);
});