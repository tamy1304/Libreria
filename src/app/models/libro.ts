export class Libro{
    _id?: number;
    tituloLibro: string;
    autor: string;
    fechaPublicacion: string;
    lugarPublicacion: string;
    editorial: string;
    numPaginas: number;

    constructor(tituloLibro: string, autor: string, fechaPublicacion: string, lugarPublicacion: string, editorial: string, numPaginas: number){
        this.tituloLibro= tituloLibro;
        this.autor = autor;
        this.fechaPublicacion = fechaPublicacion;
        this.lugarPublicacion = lugarPublicacion;
        this.editorial = editorial;
        this.numPaginas = numPaginas;
    }

}