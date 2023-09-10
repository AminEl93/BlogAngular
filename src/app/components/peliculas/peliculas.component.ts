import { Component, OnInit } from '@angular/core';
import { Pelicula } from 'src/app/models/pelicula';

@Component({
  selector: 'app-peliculas',
  templateUrl: './peliculas.component.html',
  styleUrls: ['./peliculas.component.css']
})
export class PeliculasComponent implements OnInit {
    
    public title: string;
    public peliculas: Pelicula[];
    public favorita!: Pelicula;

    constructor() {
        this.title = "Componente de películas";
        this.peliculas = [
            new Pelicula ("Spiderman 3", 2007, "https://i.ytimg.com/vi/qSQTdrMSmSY/maxresdefault.jpg"),
            new Pelicula ("Los Vengadores Endgame", 2019, "https://i.blogs.es/d1f406/avengers-endgame-poster-cropped/1366_2000.jpg"),
            new Pelicula ("Harry Potter", 2010, "https://cdn.hobbyconsolas.com/sites/navi.axelspringer.es/public/media/image/2021/09/harry-potter-orden-fenix-2467329.jpg?tf=3840x"),
            new Pelicula ("Piratas del Caribe", 2011, "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/CDFF38C4E0D5966152BA4087F85154710B102E4DD7A8ABA5A80EC815A7F581CE/scale?width=1200&aspectRatio=1.78&format=jpeg"),
            new Pelicula ("Batman vs Superman", 2016, "https://www.hellofriki.com/wp-content/uploads/2016/04/bat_mtan.jpg"),
            new Pelicula ("Super Mario Bros", 2023, "https://assetsio.reedpopcdn.com/the-super-mario-bros-movie-poster-features-all-of-our-favori_xhvn.png?width=1600&height=900&fit=crop&quality=100&format=png&enable=upscale&auto=webp")
        ];
    }

    ngOnInit() {
        console.log(this.peliculas);
        console.log("Componente iniciado!");
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
