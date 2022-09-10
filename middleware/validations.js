
const validar = (req,res,next) => {

    if (req.body.name != "Ateneo" ){
        next();
    } else {
        res.json({ msj: "Ese nombre no se puede usar, es la competencia"})
    }

}

const validarLibro = (req,res,next) => {

    if (req.body.title != "" && req.body.author != "" && req.body.editorial != "" && req.body.price != "" ){
        next();
    } else {
        res.json({ msj: "Debe completar toda la info para cargar el libro"})
    }
}

const validarPrecio = (req,res,next) => {

    if (req.body.price > 0 ){
        next();
    } else {
        res.json({ msj: "El precio debe ser mayor a cero"})
    }

}



module.exports = {validar,validarLibro,validarPrecio}