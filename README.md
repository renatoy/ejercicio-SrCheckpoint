==== EJERCICIO INTEGRADOR ====

Recordá antes que nada crear una base de datos, podes llamarla "integradorback"
Hacer una RESTful API usando Node, Express y Sequelize (Postgres)
Vamos a tener una API de Productos y Categorias.
Modelo Producto {
	nombre: string
	precio: int
	descripcion: string
	disponible: booleano = default true
}
Tambien tiene que tener un getter truncarDescripcion que devuelva la descripción truncada a solo 20 caracteres y termine con '…'
Agregar un hook antes de ser creado que se fije en la propiedad 'disponible' en caso de ser false, agregar en el titulo del producto un "NO DISPONIBLE", por ejemplo, si el producto "Cartuchera" no esta disponible quedaría: "Cartucheara NO DISPONIBLE"
Los endpoints van a ser los siguientes:
GET /productos
GET /productos/:id
POST /productos
PUT /productos/:id
DELETE /productos/:id
Los productos pueden tener varias categorías.
Modelo Categoria {
	nombre: string
}
Ademas GET /productos puede incluir un query de categorías por ejemplo
GET /productos?categoria=libros
Debería traer solo los productos que tengan la categoría libros

*** BONUS ***
Reemplazar el hook, por un setter en "disponibilidad" de forma tal que cada vez que cambia la disponibilidad del producto, el titulo cambie dinámicamente, poniendo y sacando el "NO DISPONIBLE", ya que con el hook solo se haría en la creación!!

====================================