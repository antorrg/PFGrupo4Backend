# GameWorld Server
Este servidor cuenta con la instalacion de las siguientes dependencias:  express, axios, dotenv, nodemon, morgan, sequelize, postgres, pg, pg-hstore, cors, uuid.

Para inicializar en desarrollo el comando es: ```npm run dev```, esto inicializa con nodemon.
El comando ```npm start``` también va a inicializar pero con node, a cada cambio lo deberiamos reiniciar manualmente, pero a la hora de deployarlo es necesario que esté así..

## ¡Exitos muchachos!


### Para Victor, Denis, Vladimir:

Estuve rehaciendo el handler antiguo, hice dos en el mismo archivo, para no llenar de archivos el back, asimismo estuve acomodando las funciones de userLogin para que sirvan.

En resumen, ademas de poner dos middleware en las rutas que verifiquen que email y password no esten vacios y hashear de entrada el password, implemente los controllers asi:

El controlador de la parte de auth0 permite postear y loguear en la misma ruta (.../post/user), pero el controlador de la parte del login con password permite crear usuario en la misma ruta (.../post/user) pero solo loguearse en la ruta (.../post/user/login), estuve trabajando e investigando sobre el tema del manejo de errores, para que al front le llegue una respuesta personalizada, creo por mi parte que hay mucho para aprender alli, pues hasta se configura el server para eso. Por cuestiones de tiempo y por no saber lo suficiente no lo hice, pero configure handlers y controllers de post user para que de todos modos den una respuesta apropiada. 

Muchachos, tengo SUP y por eso me tomé la tarde para no dejarlos en banda, deseo que este bien, pero confio que ustedes lo van a "trastear" y forzaran todas las pruebas para que esto sea asi, cuando me conecte con ustedes por favor cuentenme los cambios que hicieron asi aprendo tambien. 
Nos vemos a las 22.30 Argentina aprox.

PD: En el archivo "ProbarRuta.txt" que esta en la raiz / puse los endpoints y algunos usuarios para facilitarles la prueba. ¡Exitos, nos vemos más tarde!
