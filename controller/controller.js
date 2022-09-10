const { Cat } = require('../models/model');
const { Book } = require('../models/book');
const { Bookshoop } = require('../models/bookshop')
const { check, validationResult, body } = require("express-validator");

const vistaUno = (req, res) => {
    res.render('index', { title: 'Express' });
}

const vistas = {

    vistaGatitos: async (req, res) => {
        const gatitos = await Cat.find()
        res.json({ gatitos })
    },
    vistaUnGatito: async (req, res) => {
        const gatito = await Cat.findById(req.params.id)
        res.json({ gatito })
    },

    editarUnGatito: async (req, res) => {
        const { id } = req.params;
        const name = req.body.name
        await Cat.findByIdAndUpdate(id, req.body)
        res.status(202).json(name)
    },

    eliminarUnGatito: async (req, res) => {
        try {
            const gatito = await Cat.findByIdAndDelete(req.params.id)
            res.json({ msj: "adios", gatito })
        } catch (error) {
            res.status(400).json({ msj: "No se puede eliminar el gatito deseado" })
        }

    },

    crearGatito: async (req, res) => {

        try {
            const err = validationResult(req)
            if (err.isEmpty()) {
                const gato = new Cat(req.body);
                await gato.save()
                res.status(201).json({ gato, msg: 'Se inserto un gatito' })
            } else {
                res.status(400).json({ msg: err })
            }

        } catch (error) {
            res.status(501).json({ msg: 'El Nombre ya existe en la base de datos' })
        }

    },
    // Muestra todas las librerias
    vistaLibrerias: async (req, res) => {
        const librerias = await Bookshoop.find()
        res.json({ librerias })
    },

    //Muestra Libreria por Id
    vistaUnaLibreria: async (req, res) => {
        const libreria = await Bookshoop.findById(req.params.id)
        res.json({ libreria })
    },
    //Edita una Libreria
    editarUnaLibreria: async (req, res) => {
        const { id } = req.params;
        const name = req.body.name
        await Bookshoop.findByIdAndUpdate(id, req.body)
        res.status(202).json(name)
    },

    //Elimina una libreria
    eliminarUnaLibreria: async (req, res) => {
        try {
            const libreria = await Bookshoop.findByIdAndDelete(req.params.id)
            res.json({ msj: "Se elimino ", libreria })
        } catch (error) {
            res.status(400).json({ msj: "No se puede eliminar la libreria deseada" })
        }

    },

    //Crear una Libreria
    crearLibreria: async (req, res) => {

        try {
            const err = validationResult(req)
            if (err.isEmpty()) {
                const libreria = new Bookshoop(req.body);
                await libreria.save()
                res.status(201).json({ libreria, msg: 'Se creo una libreria' })
            } else {
                res.status(400).json({ msg: err })
            }

        } catch (error) {
            res.status(501).json({ msg: 'La libreria ya existe en la base de datos' })
        }

    },

    //Muestra todos los libros
    vistaLibros: async (req, res) => {
        const libros = await Book.find()
        res.json({ libros })
    },

    //Muestra Libro por Id
    vistaUnLibro: async (req, res) => {
        const libro = await Book.findById(req.params.id)
        res.json({ libro })
    },

    //Edita un Libro
    editarUnLibro: async (req, res) => {
        const { id } = req.params;
        const title = req.body.title
        await Book.findByIdAndUpdate(id, req.body)
        res.status(202).json(title)
    },

    //Elimina un libro
    eliminarUnLibro: async (req, res) => {
        try {
            const libro = await Book.findByIdAndDelete(req.params.id)
            res.json({ msj: "Se elimino ", libro })
        } catch (error) {
            res.status(400).json({ msj: "No se puede eliminar el libro deseado" })
        }

    },

    //Crear una Libro
    crearLibro: async (req, res) => {

        try {
            const err = validationResult(req)
            if (err.isEmpty()) {
                const libro = new Book(req.body);
                await libro.save()
                res.status(201).json({ libro, msg: 'Se creo una libro' })
            } else {
                res.status(400).json({ msg: err })
            }

        } catch (error) {
            res.status(501).json({ msg: 'La libro ya existe en la base de datos' })
        }

    },


}

module.exports = { vistaUno, vistas }