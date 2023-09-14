import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { ArticleService } from 'src/app/services/article.service';
import { Article } from 'src/app/models/article';
import { UrlGlobal } from 'src/app/services/global';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css'],
  providers: [ArticleService]
})

export class ArticleComponent implements OnInit {
    
    public article!: Article;
    public url: string;

    constructor(
        private _articleService: ArticleService,
        private _route: ActivatedRoute,
        private _router: Router
    ) { this.url = UrlGlobal.url; }

    ngOnInit() {
        // Recoger el id que nos llega como parámetro de una URL y llamar al servicio
        this._route.params.subscribe(params => {
            let id = params['id']; 
            this._articleService.getArticle(id).subscribe({
                next: response => {
                    if(response.article) {
                        this.article = response.article;
                    } else {
                        this._router.navigate(['/home']);
                    }
                },
                error: error => {
                    console.log(error);
                    this._router.navigate(['/home']);
                }
            });
        });        
    }

    delete(id: string) {
        Swal.fire({
            title: 'Estás seguro?',
            text: "Una vez se borre el artículo no podrás recuperarlo!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Sí, bórralo!',
            cancelButtonText: 'Cancelar'
        }).then((result) => {
            if (result.isConfirmed) {
                this._articleService.deleteArticle(id).subscribe({
                    next: response => {
                        Swal.fire('Artículo borrado!', 'El artículo ha sido borrado correctamente', 'success');
                        this._router.navigate(['/blog']);
                    },
                    error: error => {
                        console.log(error);
                        Swal.fire('Borrado fallido!', 'El artículo no se ha borrado correctamente', 'error');
                        this._router.navigate(['/blog']);
                    },
                    complete: () => { console.log('Borrado completado!') }
                });                
            } else {
                Swal.fire('Tranquilo, nada se ha borrado!');
            }
        })        
    }
}
