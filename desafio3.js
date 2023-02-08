Importar Express desde 'Express' ;
Importar FS desde 'FS' ;
importar ProductManager desde './models/productManager.js'
 const product = new ProductManager()


const app = express();


aplicación. get('/', (req, res, next) => {
    consola. log("Entrando en la home")
    res. send('<h1 style="color:red;" >Bienvenido</h1>')
})

aplicación. get('/productos', async (req, res, next) => {
    consola. log("entrando en productos")
    let limit = req. consulta. límite

    if (Objeto. entradas(req. consulta). longitud === 0) {
        res. estado(200). Enviar({
            Datos: { Productos: Esperar producto. getAllProducts(), totalItems: esperar producto. getAllProducts(). longitud },
            mensaje: "Datos recuperados"
        })
    }

    if  (Número(límite)) {
        res. estado(200). Enviar({
            Datos: { Productos: Esperar producto. getAllProducts(). slice(0, limit), totalItems: esperar producto. getAllProducts(). sector(0, límite). longitud },
            mensaje: "Datos recuperados"
        })
    } más {
        res. estado(400). Enviar({
            mensaje: "Valor no valido"
        })
    }

})

aplicación. get('/productos/:p id', async (req, res, next) => {
    let pid = req. parámetros. Pid
    consola. log(pid)
    if  (Número(pid)) {
        let prod = esperar producto. getProductById(Number(pid))
        consola. log(prod. identificación)
        Si (prod. identificación) {
            res. estado(200). Enviar({
                data: { products: prod, totalItems: prod.  longitud },
                mensaje: "Datos recuperados"
            })
        } más {
            res. estado(200). Enviar({
                mensaje: "Producto no encontrado"
            })
        }
    } más {
        PID = 0
        res. estado(400). Enviar({
            mensaje: "Valor no valido"
        })
    }
})


aplicación. escuchar(8080, () => {
    consola. log("Servidor de bienvenida que se ejecuta en http://localhost:8080")
})