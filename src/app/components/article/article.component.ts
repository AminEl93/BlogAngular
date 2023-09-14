import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { ArticleService } from 'src/app/services/article.service';
import { Article } from 'src/app/models/article';
import { UrlGlobal } from 'src/app/services/global';

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

    delete(id: any) {
        this._articleService.deleteArticle(id).subscribe({
            next: response => { this._router.navigate(['/blog']); },
            error: error => {
                console.log(error);
                this._router.navigate(['/blog']);
            }
        });
    }
}
