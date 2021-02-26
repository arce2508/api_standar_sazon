require("dotenv").config();
const db = require("./src/lib/db");
const server = require("./src/server");

async function main() {
  await db.connect();
  console.log("Conexión exitosa db");
  const port = process.env.PORT || "8080";
  server.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
  });
}
main()
  .then(() => {
    console.log("Todo chido");
  })
  .catch((error) => console.error(error));
