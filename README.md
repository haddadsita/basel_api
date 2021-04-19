# API - BSALE Challenge

API desarrollado con NodeJS + Express.

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

