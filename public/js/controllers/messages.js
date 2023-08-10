import Message from "../models/message.js";

async function findAll(req, res) {
    const messages = await Message.findAll();
    res.json(messages);
}

async function addClient(req, res) {
    Message.create({
        nome: req.body.name,
        email: req.body.email,
        form_message: req.body.message,
    }).then((result) => res.json(result));
}

export default { findAll, addClient };
