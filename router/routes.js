const express = require("express");
const router = express.Router();

// http:localhost:3000/85
// - GET
// router.get('/:id', (req,res) => {
//     console.log("Got here");
//     const id = req.params.id;
//     res.status(200).json({
//         message: 'Using - GET by ID',
//         metadata: {
//             host: req.hostname,
//             method: req.method,
//             ID: id,
//         },
//     });
// });

// app.use('/', router);

// router.post("/", (req,res) => {
//     const name = req.body.name;
//     const age = req.body.age;

//     res.status(200).json({
//         message: "Using - Post",
//         metadata: {
//             name: name,
//             age: age,
//             host: req.hostname,
//             method: req.method,
//         },
//     });
// });

module.exports = router;