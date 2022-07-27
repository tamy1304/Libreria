const mongoose = require('mongoose');

const LibroSchema = mongoose.Schema({
    tituloLibro: {
        type: String,
        required: true
    },
    autor: {
        type: String,
        required: true
    },    
    fechaPublicacion: {
        type: String,
        required: true
    },
    lugarPublicacion: {
        type: String,
        required: true
    },
    editorial: {
        type: String,
        required: true
    },
    numPaginas: {
        type: Number,
        required: true
    },
    fechaCreacion: {
        type: Date,
        default: Date.now()
    }
});

module.exports = mongoose.model('Libro', LibroSchema);

