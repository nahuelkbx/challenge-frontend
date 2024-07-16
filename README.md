
# Challenge - Frontend

Este proyecto fue creado para un challenge de frontend

Los requerimientos son los siguientes:

* Searchbar al buscar devuelva los primeros 4 items dado un input
* Vista de los items pudiendo acceder al detalle clickeando en cada card
* Detalles del item



## Setup del proyecto

Para poder levantar el proyecto es necesario estas variables de entorno

### Frontend
Dentro de la carpeta /app/src es necesario crear las siguientes variables en nuestro archivo .env

`REACT_APP_API_URL=http://localhost:3001`

parados en la carpeta /app/src correr el siguiente comando

`npm run start`

### Backend
Dentro de la carpeta /api/ es necesario crear las siguientes variables en nuestro archivo .env

```
PORT=3001
MELI_HOST=https://api.mercadolibre.com
ORIGIN_URL=http://localhost:3000
```

parados dentro de la carpeta /api correr el siguiente comando

`npm run start`

### Arquitectura de las carpetas

Para el backend elegi una estructura basada en capas. Inicialmente pense en una arquitectura de MVC (Model View Controller) pero al no tener base de datos opte por la arquitectura de capas que se ajustaba a los requerimientos que eran basicamente recibir peticion del cliente y enviar una request hacia una api.

Para el frontend opte por una arquitectura basada en componentes para una mejor legibilidad de los mismos.

## Testing
Para los test opte por react-testing-library por cuestiones de curva de aprendizaje. Era lo mejor en cuestion de dificultad / tiempo para aprender.