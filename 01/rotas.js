const express = require('express');
const {
    cadastrarAutor,
    identificarAutor,
    cadastrarLivro
} = require('./controladores/autores');

const { listarLivros } = require('./controladores/livros');

const rotas = express()

rotas.post('/autor', cadastrarAutor);

rotas.get('/autor/:id', identificarAutor);

rotas.post('/autor/:id/livro', cadastrarLivro);

rotas.get('/livros', listarLivros);

module.exports = rotas