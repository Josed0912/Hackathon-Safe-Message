import React, { Component, useContext } from 'react';
import validator from 'validator'
import { checkSpamLikelyHood } from '../email-spam-parsing/emailScoreRetrieve';

class EmailForm extends Component
{
    constructor(props){
        super(props)
        this.state = {
        email: ''
        }
    }

    handleSubmit = async (event) => 
    {
        event.preventDefault();

        this.props.onLoadingChange(true);

        const response = await fetch("http://localhost:3030/emails", {
            method: "GET",
            headers: {
              "Content-type": "application/json; charset=UTF-8"
            },
          });

          let result = await response.json();

          let emailsWithScore = await checkSpamLikelyHood(result);

          this.props.onLoadingChange(false);

          this.props.onLoginChange(true);

          this.props.onEmailChange(emailsWithScore);

          //to use the result -> 
          //there is also a subject property of the object to be used in display the emails if desired
          //yes I am writing these docs because I will be dead and have flem of talking
          //await checkSpamLikelyHood({content: result[i].content, email: result[i].sender})
    }

    render() {
        return (
        <div>
            <form onSubmit={this.handleSubmit}>
                <input type="submit" value="Scan Gmail"></input>  
            </form>
        </div>
    )
    }
}

export default EmailForm

