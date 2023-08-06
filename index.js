import express from "express";
import path from "path";
import { fileURLToPath } from 'url';
import handlebars from "express-handlebars";
import bodyParser from "body-parser";
import sequelize from "./public/js/db.config.js";
import cookieParser from "cookie-parser";
import routes from "./public/js/routes.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const app = express();
const port = 8081;
const db = sequelize

//Sets our app to use the handlebars engine
app.set('view engine', 'hbs');

app.engine('hbs', handlebars.engine({
        layoutsDir: __dirname + '/views/layouts',
        extname: 'hbs',
        defaultLayout: 'index'
}));

app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(routes)

db.sync(() => console.log(`Banco de dados conectado: ${process.env.DB_NAME}`));

app.listen(port, () => console.log(`Servidor rodando na URL http://localhost:${port}`));