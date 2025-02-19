// // fileName : server.js
// // Example using the HTTP module
// const http = require('http');

// //Create an HTTP server
// const server = http.createServer((req,res)=>{
//     //set response headers
//     res.writeHead(200, {'Content-Type': 'text/html'})
//     res.write('<h1>Hello! Node.js HTTP server</h1>')
//     res.end()
// })
// const port = 3000;
// server.listen(port, () => {
//     console.log(`Node js HTTP server is running on port ${port}`)
// })

const express = require('express');
const app = express();

const userRoutes = require( "./routes/users.js")
app.use('/users', userRoutes)

const productRoutes = require( "./routes/products.js")
app.use('/products', productRoutes)

app.get('/', (req,res) => {
    res.send("Hello! express js server")
})
const port = process.env.PORT || 3000;
app.listen(port, () =>{
    console.log(`server is runing at ${port}`)
})