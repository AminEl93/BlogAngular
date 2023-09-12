import { Component, OnInit } from '@angular/core';
import { Pelicula } from 'src/app/models/pelicula';
import { PeliculaService } from 'src/app/services/pelicula.service';

@Component({
  selector: 'app-peliculas',
  templateUrl: './peliculas.component.html',
  styleUrls: ['./peliculas.component.css'],
  providers: [PeliculaService]
})
export class PeliculasComponent implements OnInit {
    
    public title: string;
    public peliculas: Pelicula[];
    public favorita!: Pelicula;
    public fecha: any;

    constructor(private _peliculaService: PeliculaService) {
        this.title = "Componente de películas";
        this.peliculas = this._peliculaService.getPeliculas();
        this.fecha = new Date(2023, 3, 3);
    }

    ngOnInit() {
        console.log(this.peliculas);
        console.log("Componente iniciado!");
        console.log(this._peliculaService.holaMundo());
    }

    ngDoCheck() {
        console.log("DoCheck lanzado!");
    }

    ngOnDestroy() {
        console.log("El componente se va a eliminar!");
    }

    mostrarFavorita(event: any) {
        this.favorita = event.pelicula;
    }
}
