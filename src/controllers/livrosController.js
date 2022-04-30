import livros from '../models/Livro.js';

class LivroController {

    static listarLivros = (req, res) => {
        livros.find((err, livros) => {
            res.status(200).json(livros);
        })
    }

    static listarLivro = (req, res) => {
        const id = req.params.id;
        livros.findById(id, (err, livro) => {
            if (!err) {
                res.status(200).json(livro);
            } else {
                res.status(400).send({ message: `${err.message} - Livro não encontrado`});
            }
        });
    }
    
    static cadastrarLivro = (req, res) => {
        let livro = new livros(req.body);
        livro.save((err) => {
            if (err) {
                return res.status(500).send({
                message: `${err.message} - Falha ao cadastrar livro`
            })} else {
                res.status(201).send(livro.toJSON());
            }
        })
        // res.status(201).send('O livro foi cadastrado com sucesso');
    }

    static atualizarLivro = (req, res) => {
        const id = req.params.id;

        livros.findByIdAndUpdate(id, {$set: req.body}, err => {
            if (!err) {
                res.status(200).send('O livro foi atualizado com sucesso');
            } else {
                res.status(500).send({
                    message: err.message
                })
            }
        })
    }

    static deletarLivro = (req, res) => {
        const id = req.params.id;

        livros.findByIdAndDelete(id, (err) => {
            if (!err) {
                res.status(200).send('Livro deletado com sucesso');
            } else {
                res.status(500).send({ message: err.message });
            }
        })
    }
    
}

export default LivroController;