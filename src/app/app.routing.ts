// Importar los módulos del router de Angular
import { ModuleWithProviders } from "@angular/core";
import { Routes, RouterModule, Route } from "@angular/router";

// Importar los componentes a los cuáles se les hará una página exclusiva
import { HomeComponent } from "./components/home/home.component";
import { BlogComponent } from "./components/blog/blog.component";
import { FormularioComponent } from "./components/formulario/formulario.component";
import { PeliculasComponent } from "./components/peliculas/peliculas.component";
import { PaginaComponent } from "./components/pagina/pagina.component";
import { ErrorComponent } from "./components/error/error.component";
import { ArticleComponent } from "./components/article/article.component";

// Configuración del array de las rutas
const appRoutes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'home', component: HomeComponent },
    { path: 'blog', component: BlogComponent },
    { path: 'blog/articulo/:id', component: ArticleComponent },
    { path: 'formulario', component: FormularioComponent },
    { path: 'peliculas', component: PeliculasComponent },
    { path: 'pagina-de-pruebas', component: PaginaComponent },
    { path: 'pagina-de-pruebas/:nombre/:apellidos', component: PaginaComponent },
    { path: '**', component: ErrorComponent }
];

// Exportar el módulo de rutas
export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders<Route> = RouterModule.forRoot(appRoutes);