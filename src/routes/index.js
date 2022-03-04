const express = require('express');
const routes = express.Router();

routes.get('/', (req, res) => {
    res.render('index.html', { tittle: 'HAMSA' });
});
routes.get('/catalogo', (req, res) => {
    res.render('catalogo.html', { tittle: 'Catálogo' });
});
routes.get('/calendario', (req, res) => {
    res.render('calendario.html', { tittle: 'Calendario' });
});
routes.get('/about', (req, res) => {
    res.render('about.html', { tittle: '¿Quienes somos?' });
});
routes.get('/contacto', (req, res) => {
    res.render('contacto.html', { tittle: 'Contactanos' });
});

module.exports = routes;