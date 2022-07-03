const express = require("express");
const router = express.Router();

router.get("/", (req,res) => {
    res.json({
        message: "Using - GET",
        metadata: {
            host: req.hostname,
            port: process.env.port,
            method: req.method,
        },
    });
});

//GET - http://localhost:3000/45
// http:localhost:3000/85
// - GET
router.get("/:id", (req, res) => {
    const id = req.params.id;
    res.status(200).json({
        message: "using GET by ID",
        metadata: {
            host: req.hostname,
            port: process.env.port,
            method: req.method,
            id: id,
        },
    });
});

// GET - http://localhost:3000/45
router.post("/", (req,res) => {
    const name = req.body.name;
    const age = req.body.age;

    res.status(200).json({
        message: "Using - Post",
        metadata: {
            name: name,
            age: age,
            host: req.hostname,
            port: process.env.port,
            method: req.method,
        },
    });
});

router.post("/:id", (req, res) => {
    const name = req.body.name;
    const age = req.body.age;
    const id = req.params.id;

    res.status(200).json({
        message: "Using - Post",
        metadata: {
            name: name,
            age: age,
            host: req.hostname,
            port: process.env.port,
            method: req.method,
            id: id
        }
    });
});

router.patch("/:id", (req, res) => {
    const id = req.params.id;
    res.status(200).json({
        message: "Using - Patch",
        metadata: {
            host: req.hostname,
            port: process.env.port,
            method: req.method,
            id: id
        }
    });
});

router.delete("/:id", (req, res) => {
    const id = req.params.id;
    res.status(200).json({
        message: "Using - DELETE",
        metadata: {
            host: req.hostname,
            port: process.env.port,
            method: req.method,
            id: id
        }
    });
});

router.put("/:id", (req, res) => {
    const id = req.params.id;
    res.status(200).json({
        message: "Using - PUT",
        metadata: {
            host: req.hostname,
            port: process.env.port,
            method: req.method,
            id: id
        }
    });
});

module.exports = router;