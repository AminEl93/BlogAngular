import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { ArticleService } from 'src/app/services/article.service';
import { Article } from 'src/app/models/article';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-article-edit',
  templateUrl: '../create/create.component.html',
  styleUrls: ['./article-edit.component.css'],
  providers: [ArticleService]
})

export class ArticleEditComponent implements OnInit {
    
    public article: Article;
    public status!: string;
    public isEdit: boolean;
    public page_title: string;

    constructor(
        private _articleService: ArticleService,
        private _route: ActivatedRoute,
        private _router: Router
    ) {
        this.article = new Article('', '', '', null, null);
        this.isEdit = true;
        this.page_title = 'Editar el artículo';
    }

    ngOnInit() {
        this.getArticle();
    }

    onSubmit() {
        this._articleService.updateArticle(this.article._id, this.article).subscribe({
            next: response => {
                if(response.status == 'success') {
                    this.status = 'success';
                    this.article = response.articleUpdated;

                    // Alerta
                    Swal.fire('Artículo editado!', 'El artículo se ha editado correctamente', 'success');

                    this._router.navigate(['/blog/articulo', this.article._id]);
                } else {
                    this.status = 'error';
                }
            },
            error: error => {
                console.log(error);
                this.status = 'error';
                Swal.fire('Edición fallida!', 'El artículo no se ha editado correctamente', 'error');
            }
        });
    }

    getArticle() {
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
}
