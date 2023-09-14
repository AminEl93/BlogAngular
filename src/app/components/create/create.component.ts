import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { ArticleService } from 'src/app/services/article.service';
import { Article } from 'src/app/models/article';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css'],
  providers: [ArticleService]
})
export class CreateComponent implements OnInit {
    
    public article: Article;
    public status!: string;

    constructor(
        private _articleService: ArticleService,
        private _route: ActivatedRoute,
        private _router: Router
    ) {
        this.article = new Article('', '', '', null, null);
    }

    ngOnInit() {
     
    }

    onSubmit() {
        this._articleService.createArticle(this.article).subscribe({
            next: response => {
                if(response.status == 'success') {
                    this.status = 'success';
                    this.article = response.article;
                    this._router.navigate(['/blog']);
                } else {
                    this.status = 'error';
                }
            },
            error: error => {
                console.log(error);
                this.status = 'error';
            }
        });
    }
}
