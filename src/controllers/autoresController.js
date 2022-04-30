import autores from '../models/Autor.js';

class AutorController {

    static listarAutores = (req, res) => {
        autores.find((err, autores) => {
            res.status(200).json(autores);
        })
    }

    static listarAutor = (req, res) => {
        const id = req.params.id;
        autores.findById(id, (err, autor) => {
            if (!err) {
                res.status(200).json(autor);
            } else {
                res.status(400).send({ message: `${err.message} - autor não encontrado`});
            }
        });
    }
    
    static cadastrarAutor = (req, res) => {
        let autor = new autores(req.body);
        autor.save((err) => {
            if (err) {
                return res.status(500).send({
                message: `${err.message} - Falha ao cadastrar autor`
            })} else {
                res.status(201).send(autor.toJSON());
            }
        })
    }

    static atualizarAutor = (req, res) => {
        const id = req.params.id;

        autores.findByIdAndUpdate(id, {$set: req.body}, err => {
            if (!err) {
                res.status(200).send('O autor foi atualizado com sucesso');
            } else {
                res.status(500).send({
                    message: err.message
                })
            }
        })
    }

    static deletarAutor = (req, res) => {
        const id = req.params.id;

        autores.findByIdAndDelete(id, (err) => {
            if (!err) {
                res.status(200).send('Autor deletado com sucesso');
            } else {
                res.status(500).send({ message: err.message });
            }
        })
    }
    
}

export default AutorController;