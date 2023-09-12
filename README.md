# BlogAngular

Este proyecto consiste en un blog de diferentes artículos y películas creado con Angular. Se ha generado con la versión 16.0.3 de [Angular CLI](https://github.com/angular/angular-cli), con la versión 18.16.0 de NodeJS y con la versión 9.6.6 de npm.

## Iniciar aplicación y servidor de desarrollo

Ejecutar el comando `npm run start` o `ng serve` y acceder a la URL `http://localhost:4200/`. La aplicación se recargará automáticamente si cambias alguno de los archivos fuente.

Para mantener abierta la base de datos de los artículos, hay que seguir estos pasos:
- Ejecutar el archivo `mongod.exe` en la carpeta `C:\Program Files\MongoDB\Server\6.0\bin`.
- Abrir la consola, acceder a la carpeta dónde tengamos el backend (`...\Projects\Blog-Articulos\Backend`)
  y ejecutar el comando `npm start`.
- Tener abierto el Postman para consultar las diferentes URLs a las cuáles acceder.

## Scaffolding de código

Ejecutar el comando `ng generate component component-name` para generar un nuevo componente. También puedes usar el comando `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Ejecutar el comando `ng build` para compilar el proyecto. Los artefactos de compilación se almacenarán en el directorio `dist/`.

## Ejecutar pruebas unitarias

Ejecutar el comando `ng test` para hacer las pruebas unitarias a través de [Karma](https://karma-runner.github.io).

## Ejecutar pruebas end-to-end

Ejecutar el comando `ng e2e` para hacer las pruebas end-to-end (extremo a extremo) a través de una plataforma de su elección. Para utilizar este comando, primero necesitas añadir un paquete que implemente capacidades de pruebas end-to-end.