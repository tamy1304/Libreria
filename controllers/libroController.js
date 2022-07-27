const Libro = require("../models/Libro");
exports.crearLibro = async (req, res) =>{
    
    try{
        let libro;
        //Creamos nuevo libro
        libro = new Libro(req.body);

        await libro.save();
        res.send(libro);
    }catch(error){
        console.log(error);
        res.status(500).send('Hubo un error');
    }
}

exports.obtenerLibros = async (req, res) =>{
    try{
        const libros = await Libro.find();
        res.json(libros);
    }catch(error){
        console.log(error);
        res.status(500).send('Hubo un error');
    }
}

exports.actualizarLibro = async (req, res) => {
    try{
        const { tituloLibro, autor, fechaPublicacion, lugarPublicacion, editorial, numPaginas} = req.body;
        let libro = await Libro.findById(req.params.id);
        if(!libro) {
            res.status(404).json({ msg: 'No existe el libro'})
        }

        libro.tituloLibro = tituloLibro;
        libro.autor = autor;
        libro.fechaPublicacion = fechaPublicacion;
        libro.lugarPublicacion = lugarPublicacion;
        libro.editorial = editorial;
        libro.numPaginas = numPaginas;

        libro = await Libro.findOneAndUpdate({_id: req.params.id}, libro, {new: true})
        res.json(libro);

    }catch(error){
        console.log(error);
        res.status(500).send('Hubo un error');
    }
}

exports.obtenerLibro = async (req, res) =>{
    try{
       
        let libro = await Libro.findById(req.params.id);
        if(!libro) {
            res.status(404).json({ msg: 'No existe el libro'})
        }
        res.json(libro);

    }catch(error){
        console.log(error);
        res.status(500).send('Hubo un error');
    }
}

exports.eliminarLibro = async (req, res) =>{
    try{
       
        let libro = await Libro.findById(req.params.id);
        if(!libro) {
            res.status(404).json({ msg: 'No existe el libro'})
        }
        await Libro.findOneAndRemove({_id: req.params.id});
        res.json({msg: "Libro eliminado con exito"});

    }catch(error){
        console.log(error);
        res.status(500).send('Hubo un error');
    }
}