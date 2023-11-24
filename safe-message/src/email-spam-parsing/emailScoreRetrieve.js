
const { evaluateSpamScore } = require("./emailSpamScore.js");
const key = "EAG3LoNSDPpZmV0N4ABNU4mxjkJUZMrqSxFlRirN";

async function checkSpamLikelyHood(emails) {
  let emailsWithScore = [];
  for(let i = 0; i < emails.length; i++){


    const data = JSON.stringify({
      checkForLength: true,
      content: emails[i].content,
      email: emails[i].sender,
      allowedCountries: ["ca", "us"],
      allowedLanguages: ["en"],
    });

    const response = await fetch("http://localhost:3030/proxy", {
    method: "POST",
    body: data,
    headers: {
      "Content-type": "application/json; charset=UTF-8",
      "X-Api-Key": key,
    }
  });

  const result = await response.json();

  if (response.status !== 200) {
    console.log("error");
    console.log(response.body);
    return "error";
  } else {
    emailsWithScore.push({content: emails[i].content, sender: emails[i].sender, subject: emails[i].subject, score: result.Score})
  }
  }
  
  return emailsWithScore;
}

module.exports = { checkSpamLikelyHood };
