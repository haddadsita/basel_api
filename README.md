# API - BSALE Challenge

API desarrollado con NodeJS + Express. El cliente con la conexión a este proyecto se puede ver en el siguiente enlace 
`https://bsale-frontend.herokuapp.com/index.html`

## Iniciar Proyecto

`npm start`

El proyecto se iniciará en `localhost:8001`


## Endpoints 

* [GET] Obtener Categorías de los productos 
```curl --location --request GET 'http://localhost:8001/api/categories/' ```

* [GET] Obtener Listado de productos
```curl --location --request GET 'http://localhost:8001/api/products/' ```

* [GET] Obtener Listado de productos por una categoría
```curl --location --request GET 'http://localhost:8001/api/products/category/ID/' ```

* [GET] Obtener Listado de productos por nombre
```curl --location --request GET 'http://localhost:8001/api/products/search/?name=STRING' ```

## Recursos utilizados

* Deploy automático en Heroku en rama `main`.
* Control de versiones.

## Enlace de API en Heroku
* Listado de todos los productos `https://api-bsale.herokuapp.com/api/products/`
* Listado de categorías `https://api-bsale.herokuapp.com/api/categories/`
* Listado de productos por ID de categoría `https://api-bsale.herokuapp.com/api/products/category/ID/`
* Listado de productos por coincidencia de nombre `https://api-bsale.herokuapp.com/api/products/search/?name=STRING`