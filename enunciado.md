**Enunciado**
Aprovechando el anterior proyecto API REST AUTH, añadiremos nuestro middleware y util 
de subida y borrado de ficheros. Es decir: users, collection1, collection2. Tres modelos en total. Colecciones populadas. Contraseñas encriptadas.
Autentificación (a través de nombre o mail) con tokens de usuarios.

**Modelos**
Los 3 modelos tienen que tener un campo de imagen, ya sea un avatar para el usuario, el logo de la consola o la carátula del videojuego. Aquí un ejemplo de uno de los modelos:

    titulo: { type: String, trim: true, required: true },
    desarrolladora: { type: String, trim: true, required: true },
    precio: { type: Number, trim: true, required: true },
    año: { type: Number, trim: true, required: true },
    descripcion: { type: String, trim: true, required: true },
    caratula: { type: String, trim: true, required: true },
    categoria: { type: String, trim: true, required: true }

Ejemplo de modelo de usuario:

    email: { type: String, trim: true, required: true, unique: true },
    nombreUsuario: { type: String, trim: true, required: true, unique: true },
    contraseña: { type: String, trim: true, required: true },
    añoNacimiento: { type: Number, trim: true, required: true },
    rol: { type: String, trim: true, required: true },
    imagenPerfil: { type: String, trim: true, required: true }

**Middleware**
Tras la instalación de multer, cloudinary y las dependencias conectoras de ambas, tendremos que implementar nuestro middleware de subida de fichero.

**Util**
Adicionalmente, habrá un util que se encargue del borrado de las imagenes en Cloudinary una vez borremos un elemento de una de las colecciones en nuestra base de datos.

**CRUD**
Los tres modelos deberán tener el CRUD e implementar tanto la subida de ficheros como el borrado de los mismos cuando corresponda en los controladores y las rutas.

**Extra**
Opcionalmente se puede implementar otro middleware para diferenciar entre un usuario normal y un administrador.
Podéis implementar estos middlewares como queráis según vuestra lógica de negocio.
Por ejemplo: isUser y isAdmin.