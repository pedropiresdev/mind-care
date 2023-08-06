import express from "express";
import routes from "./routes.js";
import sequelize from "./db.config.js";
import dotenv from "dotenv/config.js";

const app = express();

app.use(express.json());
app.use(routes);

sequelize.sync(() => console.log(`Banco de dados conectado: ${process.env.DB_NAME}`));

app.listen(8081, () => console.log("Servidor iniciado na porta 3000"));