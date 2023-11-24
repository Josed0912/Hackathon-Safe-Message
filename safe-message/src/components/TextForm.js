import React, {Component} from 'react';
import './styles.css';
import { checkSpamLikelyHood } from '../email-spam-parsing/emailScoreRetrieve';
//import { authorize, listLabels } from '../../mini-backend/gmail-methods';

class TextForm extends Component {

    constructor(props){
        super(props)
        this.state = {
        text: ''
        }
    }

    handleSubmit = async (event) => {
        event.preventDefault();

        if(this.state.text === '')
        {
            alert("Empty Text")
        }
        else{
            alert(await checkSpamLikelyHood({content: this.state.text}));
        }
    }

    handleTextChange = (event) =>
    {
        const text = event.target.value;

        const isValid = text !== ""

        this.setState({text, isValid});
    }

    render() {
        return (
            
            <form onSubmit = {this.handleSubmit}>
                <label for="text">Text</label>
                <textarea id="text" value = {this.state.text} onChange={this.handleTextChange}></textarea>
                <br></br>
                <input type="submit" value = "Scan"></input>
            </form>

            
        )
    }

}

export default TextForm