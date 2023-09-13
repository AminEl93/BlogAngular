import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs'; 
import { Article } from '../models/article';
import { UrlGlobal } from './global';

@Injectable()

export class ArticleService {
    
    public url: string;

    constructor(private _http: HttpClient) {
        this.url = UrlGlobal.url;
    }

    pruebas() {
        return "Soy el servicio de pruebas de los artículos!";
    }

    // Petición AJAX al backend para obtener todos los artículos
    getArticles(last:any = null): Observable<any> {
        var articles = 'articles';
        if(last != null) { articles = 'articles/true'; }
        return this._http.get(this.url + articles); 
    }
}