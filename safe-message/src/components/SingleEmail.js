const { evaluateSpamScore } = require("../email-spam-parsing/emailSpamScore");

function SingleEmail(email){
    return (
        <>
        <h5>{email.subject}</h5>
        <p>{email.content}</p>
        <h6>{email.sender}</h6>
        <p>Score: {email.score}</p>
        <p>{evaluateSpamScore(email.score)}</p>
        </>
    )
}