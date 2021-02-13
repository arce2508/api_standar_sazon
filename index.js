const db = require('./src/lib/db')
require("dotenv").config();
const server = require ('./src/server')

async function main ( ) { 
  await db.connect ()
  console.log ('Conexión exitosa db')
  const port = process.env.PORT || '8080'
  server.listen(port, () => {
    console.log("Server is listening");
    });
}
main () 
.then (()=> {
  console.log ('Todo chido')
} )
.catch ((error) => console.error(error))


