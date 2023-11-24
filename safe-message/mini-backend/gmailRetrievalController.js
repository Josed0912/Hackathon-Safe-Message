const express = require('express')
const router = express.Router();
const routeRoot = "/";
const {authorize, listLabels} = require('./gmail-methods')

router.get("/emails", getUserEmails)
async function getUserEmails(request, response){
    try{
        let res1 = await authorize()
        let res2 = await listLabels(res1)

        response.send(res2)
    } catch(e){

    }
}

module.exports = {routeRoot, router};