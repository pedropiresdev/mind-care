import express from "express";
import messages from "./controllers/messages.js"

const routes = express.Router();

routes.get("/messages", messages.findAll);
routes.post("/send_message", messages.addClient);
routes.get('/', (req, res) => {
    res.render('main');
});

export { routes as default };
