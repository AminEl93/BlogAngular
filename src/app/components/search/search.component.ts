import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { ArticleService } from 'src/app/services/article.service';
import { Article } from 'src/app/models/article';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
  providers: [ArticleService]
})
export class SearchComponent implements OnInit {
   
    public articles!: Article[];
    public search!: string;

    constructor(
        private _articleService: ArticleService,
        private _route: ActivatedRoute,
        private _router: Router
    ) { }

    ngOnInit() {
        // Recoger el id que nos llega como parámetro de una URL y llamar al servicio
        this._route.params.subscribe(params => {
            var search = params['search'];
            this.search = search;
            
            this._articleService.searchArticle(search).subscribe({
                next: response => {
                    if(response.articles) {
                        this.articles = response.articles;
                    } else {
                        this.articles = [];
                    }
                },
                error: error => {
                    this.articles = [];
                    console.log(error);
                },
                complete: () => console.info('complete')
            });
        });  
    }
}
