const express = require("express");
const bodyParser = require("body-parser");

const partnerRouter = express.Router();

partnerRouter.use(bodyParser.json());

partnerRouter.all("/", (req, res, next) => {
    res.statusCode = 200;
    res.setHeader("Content-type", "text/plain");
    next();
})

.get("/", (req, res) => {
    res.end("Will send all the partners to you")
})

.post("/", (req, res) => {
    res.end(`Will send the partner: ${req.body.name} with description ${req.body.description}`)
})

.put("/", (req, res) => {
    res.statusCode = 403;
    res.end("PUT operation is not supported on /partners")
})

.delete("/", (req, res) => {
    res.end("Deleting all partners")
});

partnerRouter.route("/:partnerId")

.all((req, res, next) => {
    res.statusCode = 200;
    res.setHeader("Content-type", "text/html");
    next();
})

.get((req, res) => {
    res.end(`Will send details of the partner: ${req.params.partnerId} to you`);
})

.post((req, res) => {
    res.statusCode = 403;
    res.end(`POST operation is not supported on /partners/${req.params.partnerId}`)
})

.put((req, res) => {
    res.write(`Updating the partner: ${req.params.partnerId}\n`);
    res.end(`Will update the partner: ${req.body.name} with description ${req.body.description}`);
})

.delete((req, res) => {
    res.end(`Deleting the partner: ${req.params.partnerId}`);
});

module.exports = partnerRouter;