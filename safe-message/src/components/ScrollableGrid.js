import React from 'react';
import "./styles.css"
import { evaluateSpamScore } from '../email-spam-parsing/emailSpamScore';

const FilteredItem = ({ content, sender, subject, score }) => {
    
const scoreClass = `score-${score}`
const itemStyle = {
    borderRadius: '10px', // Adjust the value to change the border radius
  };
    
return (
    <div className={"grid-item"} style={itemStyle}>
        <div className="item-column">
            <p>Subject: {subject}</p>
            <p>Content: {content}</p>
        </div>
        <div className="item-column">
            <p>Sender: {sender}</p>
        </div>
        <div className="item-column last-column">
            <p className={`${scoreClass}`}>Score: {score}</p>
            <p>{evaluateSpamScore(score)}</p>
        </div>
    </div>
  )};

function ScrollableGrid(props)
{
    const data = props.list.filter(item => 'content' in item && 'sender' in item && 'subject' in item && 'score' in item);

    return (
        <div className="scrollable-grid">
            <div className="grid-container">
                {data.map((item, index) => (
                    <FilteredItem key={index} {...item}></FilteredItem>
                ))}
            </div>
        </div>
    )
}

export default ScrollableGrid;