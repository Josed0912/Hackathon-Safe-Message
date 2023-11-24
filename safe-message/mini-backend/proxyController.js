const express = require('express');
const router = express.Router();
const routeRoot = "/";

router.post("/proxy", getApiData)
async function getApiData(request, response){
    const key = "EAG3LoNSDPpZmV0N4ABNU4mxjkJUZMrqSxFlRirN";

    try{
    let res = await fetch("https://api.oopspam.com/v1/spamdetection", {
        method: "POST",
        body: JSON.stringify(request.body),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
          "X-Api-Key": key,
        }
      })

      let result = await res.json();

      response.send(result);
    } catch(e){
        response.status(400);
        response.send({errorMessage: "error"})
    }
}

module.exports = {
    router,
    routeRoot
}