import  express  from "express";
import { BD } from "./db.js"
import {PORT} from "./config.js"

const app = express();

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
  });

app.get('/', async (req,res)=>{
    res.json("welcome")
})
app.get('/peliculas', async (req,res)=>{
    const rows = await BD.query('SELECT * from peliculas')
    res.json(rows)
})
app.get('/crearPelicula', async (req,res)=>{
    const response = await BD.query('INSERT INTO peliculas(name,categoria) VALUE("guerra de las galaxias","acccion")') 
    res.json(response)
})

app.listen(PORT);
console.log("Corriendo en puerto", PORT);