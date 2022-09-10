const express = require('express');
const router = express.Router(); 
const {vistas} = require('../controller/controller.js');
const {check, validationResult , body } = require ("express-validator");
const {validar,validarLibro,validarPrecio} = require('../middleware/validations')



router.get('/ver', vistas.vistaGatitos);
router.get('/ver/:id', vistas.vistaUnGatito);
router.put('/editar/:id',vistas.editarUnGatito)
router.delete('/eliminar/:id',vistas.eliminarUnGatito)
router.post('/crear/',[check("name").not().isEmpty().withMessage("El nombre no puede ser vacio").isLength({min: 4, max: 15}).withMessage("El nombre debe tener entre 4 y 15 caracteres")], vistas.crearGatito);

router.get('/verLibrerias', vistas.vistaLibrerias);
router.get('/verLibreria/:id', vistas.vistaUnaLibreria);
router.put('/editarLibreria/:id',vistas.editarUnaLibreria)
router.delete('/eliminarLibreria/:id',vistas.eliminarUnaLibreria)
router.post('/crearLibreria/',validar,[check("name").not().isEmpty().withMessage("El nombre no puede ser vacio")], vistas.crearLibreria);


router.get('/verLibros', vistas.vistaLibros);
router.get('/verLibro/:id', vistas.vistaUnLibro);
router.put('/editarLibro/:id',vistas.editarUnLibro)
router.delete('/eliminarLibro/:id',vistas.eliminarUnLibro)
router.post('/crearLibro/',validarLibro,validarPrecio, vistas.crearLibro);

module.exports = router;
