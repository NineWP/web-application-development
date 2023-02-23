import React from 'react'
import '../styles/VoteBtn.css'

const VoteBtn = ({ childCallBack, scoreText }) => {
    const onVoteUp = () => {
        childCallBack(1);
    };
    const onVoteDown = () => {
        childCallBack(-1);
    };
    console.log({scoreText})

    return (
        <footer>
            <button className='vote-button' onClick={onVoteUp}>Click to Vote</button>
            <span className='display-count'>{scoreText}</span>
            <button className='vote-button' onClick={onVoteDown}>Click to Unvote</button>
        </footer>
    )
}

export default VoteBtn

