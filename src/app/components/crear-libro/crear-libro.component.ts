import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Libro } from 'src/app/models/libro';

@Component({
  selector: 'app-crear-libro',
  templateUrl: './crear-libro.component.html',
  styleUrls: ['./crear-libro.component.css']
})
export class CrearLibroComponent implements OnInit {
  libroForm: FormGroup;

  constructor(private fb: FormBuilder,
              private router: Router,
              private toastr: ToastrService) {
    this.libroForm = this.fb.group({
      titulo:['', Validators.required],
      autor:['', Validators.required],
      fechaPublicacion:['', Validators.required],
      lugarPublicacion:['', Validators.required],
      editorial:['', Validators.required],
      numPaginas:['', Validators.required],
    })
  }

  ngOnInit(): void {
  }

  agregarLibro(){


    const LIBRO: Libro = {
      tituloLibro: this.libroForm.get('titulo')?.value,
      autor: this.libroForm.get('autor')?.value,
      fechaPublicacion: this.libroForm.get('fechaPublicacion')?.value,
      lugarPublicacion: this.libroForm.get('lugarPublicacion')?.value,
      editorial: this.libroForm.get('editorial')?.value,
      numPaginas: this.libroForm.get('numPaginas')?.value,
    }

    console.log(LIBRO);
    this.toastr.success('El libro fue registrado con exito!', 'Libro Registrado!');
    this.router.navigate(['/']);
  }

  esEditar() {

    if(this.id !== null) {
      this.titulo = 'Editar Libro';
      this._libroService.obtenerLibro(this.id).subscribe(data => {
        this.libroForm.setValue({
          tituloLibro: data.tituloLibro,
          autor: data.autor,
          fechaPublicacion: data.fechaPublicacion,
          lugarPublicacion: data.lugarPublicacion,
          editorial: data.editorial,
          numPaginas: data.numPaginas,
        })
      })
    }
  }

}


