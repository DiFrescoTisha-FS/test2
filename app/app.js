const express = require('express');
const router = require('../router/routes');

const app = express();

// middleware
// takes in your payload as json req.body.firstName
// takes parameters from your url
app.use(express.json());
// http://localhost:3000/85
// req.params.id
app.use(express.urlencoded({ extended: true }));

// set up router
app.use('/', router);


// add middleware to handle and errors of bad url paths
// app.use((req,res,next) => {
//     const error = new Error("NOT FOUND!!!");
//     error.status = 404;
//     next(error);
// });

// app.use((error, req, res, next) => {
//     res.status(error.status || 500).json({
//         error: {
//             message: error.message,
//             status: error.status,
//             method: req.method,
//         },
//     });
// });
module.exports = app;







// app.get("/", (req, res, next) => {
//     res.json({
//         message: "Using GET /",
//         metadata: {
//             host: "localhost",
//             port: "",
//             method: get
//             // find values in Postman
//             // key_value_pair for host
//             // host:"" and it should say local host in Postman
//             // key_value_pair for port
//             // key_value_pair for method

//         }
//     });
// });

// // post, patch, delete
// app.post("/", (req, res, next) => {
//     res.json({
//         message: "Using POST /",
//         metadata:{
//             host: "",
//             port: "",
//             method: "post"
//         }
//     });
// });

// app.patch("/", (req, res, next) => {
//     res.json({
//         message: "Using PATCH /",
//         metadata: {
//             host: "",
//             port: "",
//             method: ""
//         }
//     });
// });

// app.delete("/", (req, res, next) => {
//     res.json({
//         message: "Using DELETE /",
//         metadata: {

//         }
//     })
// })

// middleware modules for error handling
// app.use((req, res, next) => {
//     const error = new Error("NOT FOUND!!!");
//     error.status = 404;
//     next(error);
// });

// // middleware to send error nicely
// app.use((error, req, res, next) => {
//     res.status(error.status || 500).json({
//         error: {
//             message: error.message,
//             status: error.status,
//             method: req.method
//         }
//     });
// })

// app.listen(process.env.port, () => console.log(`Starting server on port ${process.env.port}`))