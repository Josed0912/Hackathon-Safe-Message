const express = require('express')
const {createProxyMiddleware} = require('http-proxy-middleware')

const app = express();
const bodyParser = require('body-parser')
const cors = require('cors');

const controllers =['proxyController','gmailRetrievalController'];

app.use(cors())
app.use(express.json())

app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

controllers.forEach((controllerName) => {
    const controllerRoutes = require('./' + controllerName)
    app.use(controllerRoutes.routeRoot, controllerRoutes.router);
})


app.listen(3030)