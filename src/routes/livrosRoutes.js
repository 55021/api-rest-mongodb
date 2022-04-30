import express from 'express';
import livrosController from '../controllers/livrosController.js';

const router = express.Router();

router.get('/livros', livrosController.listarLivros);
router.get('/livros/busca', livrosController.listarLivroPorEditora); // ordenar da mais específica pra menos
router.get('/livros/:id', livrosController.listarLivro);
router.post('/livros', livrosController.cadastrarLivro);
router.put('/livros/:id', livrosController.atualizarLivro);
router.delete('/livros/:id', livrosController.deletarLivro);

export default router;