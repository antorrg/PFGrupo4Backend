# Acerca de Bcrypt

La biblioteca bcrypt es una biblioteca de funciones hash criptográficas diseñada para ser segura y resistente a los ataques de fuerza bruta. Se utiliza comúnmente para almacenar contraseñas de forma segura en aplicaciones web. La característica principal de bcrypt es que es lenta deliberadamente [nota¹], lo que dificulta el ataque por fuerza bruta. Además, tiene la capacidad de ajustar automáticamente el costo computacional, lo que permite adaptarse a hardware más potente en el futuro.

En el contexto de almacenamiento de contraseñas, bcrypt realiza el hash de las contraseñas y, opcionalmente, puede incluir un "sal" aleatorio para mayor seguridad. El sal es un valor único generado para cada contraseña y se agrega antes de realizar el hash.

## Función generateToken:
Esta función utiliza la biblioteca jsonwebtoken para generar tokens de autenticación basados en JSON (JWT). Aquí hay una descripción de cómo funciona:

### Importación de módulos:
```javascript
const { sign } = require('jsonwebtoken');
require ('dotenv').config();
const {SECRET_KEY} = process.env;

const generateToken = (user) => {
  const secretKey = SECRET_KEY;
  const token = sign({ userId: user.id, email: user.email }, secretKey, { expiresIn: '5h' });
  return token;
};

module.exports = generateToken;
```
sign es una función proporcionada por jsonwebtoken para firmar y generar tokens JWT.
Se carga el módulo dotenv para cargar variables de entorno desde un archivo .env.
### Configuración de la clave secreta:

La clave secreta se obtiene de las variables de entorno, en este caso, de process.env.SECRET_KEY.
### Generación del token:


La función sign toma tres parámetros:
Un objeto que contiene los datos que se incluirán en el token. En este caso, incluye el userId y el email del usuario.
La clave secreta utilizada para firmar el token.
Opciones adicionales, como el tiempo de expiración (expiresIn), que está configurado en 5 horas ('5h').
### Retorno del token:

La función retorna el token generado.
El token generado es un JWT que puede ser enviado al cliente después de una autenticación exitosa. Este token puede ser utilizado por el cliente para realizar solicitudes autenticadas a recursos protegidos en la aplicación. Al incluir información como el userId y el email en el token, el servidor puede verificar la autenticidad del usuario en futuras solicitudes. Además, al configurar un tiempo de expiración, se limita la ventana de tiempo durante la cual el token es válido, mejorando la seguridad.


## Middleware verifyToken:

Este middleware se encarga de verificar la autenticidad y validez de un token JWT enviado en las solicitudes HTTP. 

```javascript
const { verify } = require('jsonwebtoken');
require('dotenv').config();
const { SECRET_KEY } = process.env;

const verifyToken = (req, res, next) => {
  // Obtén el token del encabezado de la solicitud
  const token = req.headers['x-access-token'] || req.headers.authorization;

  // Verifica si el token está presente
  if (!token) {
    return res.status(401).json({ error: 'Acceso no autorizado. Token no proporcionado.' });
  }

      // Verifica el token
  verify(token, SECRET_KEY, (err, decoded) => {
    if (err) {
      if (err.name === 'TokenExpiredError') {
        return res.status(401).json({ error: 'Token expirado.' });
      }
      return res.status(401).json({ error: 'Token inválido.' });
    }
    // Almacena el usuario decodificado en el objeto de solicitud para su uso posterior
    req.user = decoded;
     const userId = decoded.id;
     req.userId = userId;
     //console.log(req.user.userId+' id del usuario')
     //console.log(req.user.email+': este es el email del usuario')

    next();
  });
};

module.exports = verifyToken;
```
Aquí está el desglose de cómo funciona:

### Importación de módulos:

Se importa la función verify del módulo jsonwebtoken.
Se carga el módulo dotenv para cargar variables de entorno desde un archivo .env.
Se obtiene la clave secreta (SECRET_KEY) de las variables de entorno.
Extracción del token de la solicitud:

El middleware intenta obtener el token de dos lugares posibles:
Del encabezado de la solicitud (x-access-token).
De la propiedad authorization del encabezado de la solicitud.
Verificación de la existencia del token:

Si no se encuentra ningún token, se responde con un código de estado 401 (No autorizado) y un mensaje indicando que el token no se proporcionó.
Verificación del token:

Se utiliza la función verify para verificar la autenticidad del token. Esta función toma tres argumentos:
El token a verificar.
La clave secreta utilizada para firmar el token.
Una función de devolución de llamada ((err, decoded) => { ... }) que se ejecuta después de la verificación.
Manejo de errores:

Si ocurre un error durante la verificación, se manejan diferentes casos:
Si el error es causado por un token expirado (TokenExpiredError), se responde con un código de estado 401 y un mensaje indicando que el token ha expirado.
Para otros errores, se responde con un código de estado 401 y un mensaje indicando que el token es inválido.
Almacenamiento de información del usuario:

Si la verificación es exitosa, el objeto decodificado (que contiene la información del usuario) se almacena en req.user.
También se extrae y almacena el userId en req.userId.
Llamada al siguiente middleware:

Se llama a la función next() para pasar al siguiente middleware en la cadena de manejo de solicitudes.
Este middleware es crucial en entornos donde se requiere autenticación para acceder a ciertos recursos o rutas. Verifica la identidad del usuario utilizando el token proporcionado, asegurando que solo los usuarios autenticados puedan acceder a recursos protegidos.








[nota¹]: La característica principal de bcrypt, que se menciona como "lenta deliberadamente", se refiere a que el algoritmo de hashing utilizado por bcrypt está diseñado para ser computacionalmente intensivo y, por lo tanto, ralentizar deliberadamente el proceso de hash. Esta lentitud se logra mediante la iteración múltiple del algoritmo.

Cuando decimos que bcrypt es "lento", nos referimos a que requiere una cantidad significativa de tiempo de CPU para calcular el hash de una contraseña. Este enfoque busca dificultar los ataques por fuerza bruta y los ataques de diccionario, donde un atacante intenta probar múltiples contraseñas en un corto período de tiempo.

La lentitud en el proceso de hash tiene varios beneficios de seguridad:

Resistencia contra ataques por fuerza bruta: Como bcrypt es lento, un atacante que intenta adivinar una contraseña debe realizar una gran cantidad de cálculos para cada intento, lo que hace que el proceso sea extremadamente lento y costoso en términos de recursos computacionales.

Resistencia contra ataques de diccionario: La lentitud también dificulta los ataques de diccionario, donde un atacante intenta adivinar contraseñas probando palabras comunes o combinaciones predefinidas.

Mayor seguridad contra ataques de hardware especializado: La lentitud de bcrypt también proporciona una capa adicional de seguridad contra ataques de hardware especializado, como las tablas arco iris, que son menos efectivos debido al tiempo requerido para calcular cada hash.

En resumen, la lentitud deliberada de bcrypt es una característica diseñada para aumentar la resistencia y la seguridad del sistema frente a diversos tipos de ataques, garantizando que el proceso de hash sea lo suficientemente costoso en términos de recursos computacionales para disuadir a los atacantes.