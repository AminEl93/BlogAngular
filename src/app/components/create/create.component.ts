import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { ArticleService } from 'src/app/services/article.service';
import { Article } from 'src/app/models/article';
import { UrlGlobal } from 'src/app/services/global';
import { ImageUploaderOptions, FileQueueObject } from 'ngx-image-uploader-next';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css'],
  providers: [ArticleService]
})
export class CreateComponent implements OnInit {
    
    public article: Article;
    public status!: string;
    public page_title: string;
    public isEdit: boolean;
    public url: string;

    public options: ImageUploaderOptions = {
        thumbnailHeight: 150,
        thumbnailWidth: 410,
        uploadUrl: UrlGlobal.url + 'upload-image',
        allowedImageTypes: ['image/png', 'image/jpeg', 'image/jpg', 'image/gif'],
        maxImageSize: 50,
        autoUpload: true,
        cropAspectRatio: 1,
        fieldName: 'image'
    };

    constructor(
        private _articleService: ArticleService,
        private _route: ActivatedRoute,
        private _router: Router
    ) {
        this.article = new Article('', '', '', null, null);
        this.isEdit = false;
        this.page_title = 'Crear el artículo';
        this.url = UrlGlobal.url;
    }    

    ngOnInit() {
        
    }

    onSubmit() {
        this._articleService.createArticle(this.article).subscribe({
            next: response => {
                if(response.status == 'success') {
                    this.status = 'success';
                    this.article = response.article;
                    
                    // Alerta
                    Swal.fire('Artículo creado!', 'El artículo se ha creado correctamente', 'success');

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
    
    imageUpload(file: FileQueueObject) {
        if (file.response.status == 200) {
            if (file.response.body.image != '') {
                this.article.image = file.response.body.image;
            }
            console.log('Se ha obtenido tu imagen de manera exitosa!');
        } else {
            console.log('Ha habido un error al subir tu imagen');
        }
    }
}
