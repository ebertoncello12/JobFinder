const express   = require('express');
const router    = express.Router();
const Job       = require('../models/Job');

// Rota teste
router.get('/test', (req, res) => {
    res.send('deu certo');
});


// Add jov Via Verbo POST

router.post('/add', (req, res) => {

   let {title, salary, company, description, email, new_job} = req.body;

   // Inserir Dados

   Job.create({
    title,
    description,
    salary,
    company,
    email,
    new_job
   })
    .then(() => res.redirect('/'))
    .catch(err => console.log(err)); 

});

module.exports = router