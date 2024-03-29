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

    /* Peticiones AJAX al Backend */
    // Obtener todos los artículos
    getArticles(last:any = null): Observable<any> {
        var articles = 'articles';
        if(last != null) { articles = 'articles/true'; }
        return this._http.get(this.url + articles); 
    }

    // Obtener un artículo en concreto
    getArticle(articleId: string): Observable<any> {
        return this._http.get(this.url + 'article/' + articleId); 
    }

    // Buscar un artículo
    searchArticle(searchString: string): Observable<any> {
        return this._http.get(this.url + 'search/' + searchString); 
    }

    // Crear un artículo
    createArticle(article: any): Observable<any> {
        let params = JSON.stringify(article);
        let headers = new HttpHeaders().set('Content-Type', 'application/json');
        return this._http.post(this.url + 'save', params, {headers: headers}); 
    }

    // Editar un artículo
    updateArticle(id: any, article: any): Observable<any> {
        let params = JSON.stringify(article);
        let headers = new HttpHeaders().set('Content-Type', 'application/json');
        return this._http.put(this.url + 'article/' + id, params, {headers: headers}); 
    }

    // Borrar un artículo
    deleteArticle(id: any): Observable<any> {
        let headers = new HttpHeaders().set('Content-Type', 'application/json');
        return this._http.delete(this.url + 'article/' + id, {headers: headers}); 
    }
}