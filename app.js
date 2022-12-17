import  express  from "express";
import { BD } from "./db.js"
import {PORT} from "./config.js"

const app = express();

app.get('/', async (req,res)=>{
    res.json("welcome")
})
app.get('/peliculas', async (req,res)=>{
    const rows = await BD.query('SELECT * from peliculas')
    res.json(rows)
})
app.get('/crearPelicula', async (req,res)=>{
    const response = await BD.query('INSERT INTO peliculas(name) VALUE("guerra de las galaxias"), (categoria) VALUE("accion")') 
    res.json(response)
})

app.listen(PORT);
console.log("Corriendo en puerto", PORT);