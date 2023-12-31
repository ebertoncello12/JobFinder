const express       = require('express');
const exphbs        = require('express-handlebars');
const app           = express();
const path          = require('path');
const db            = require("./db/connection");
const bodyParser    = require('body-parser');

const PORT = 3000;



app.listen(PORT, function() {
console.log('O express esta rodando na porta', PORT);
});

// Body-parser
app.use(bodyParser.urlencoded({ extended: false }));

// handle bars

app.set('views', path.join(__dirname,'views'));
app.engine('handlebars', exphbs({defaultLayout: 'main'}));

// Db Connection
db
.authenticate()
// Sucesso da conexao com o banco
.then(() => {
console.log("Conectou ao banco com sucesso");
})
// Tratamento de erro
.catch(err => {
console.log("Ocorreu um erro ao conectar ao banco", err);
});


// Routes
app.get('/', (req, res) => {
  res.send("Esta funcionando 3");  
});

// jobs Routes

app.use('/jobs', require('./routes/jobs'));