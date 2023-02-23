import React, { useEffect, useState } from 'react';
import { MenuData } from './MenuData';
import '../styles/MenuCard.css'
import VoteBtn from './VoteBtn';

const MenuCard = () => {
    const [score, setScore] = useState(0);
    const [scoreText, setScoreText] = useState("MIN");
    const updateCardScores = (gain) => {
      if (score + gain > 10) {
        alert("Cannot vote more!");
      } else if (score + gain < 0) {
        alert("Cannot unvote!");
      } else {
        setScore(score + gain);
      }
    };
    useEffect(() => {
      if (score === 10) {
        setScoreText("MAX");
      } else if (score === 0) {
        setScoreText("MIN");
      } else {
        setScoreText(`${score}`);
      }
    }, [score]);

  return (
    <div className="card-container">
        {MenuData.map((item, index) => {
            return (
                <div key={index} className="card">
                    <div className="main-content">
                        <div className="info">
                            <h3>{item.type}</h3>
                            <h4>{item.name}</h4>
                            <p>{item.title}</p>
                        </div>
                        <img className="menu-img" src={item.img_src} alt={item.alt}/>
                    </div>
                    <VoteBtn childCallBack={updateCardScores} scoreText={scoreText}/>
                </div>
            )
        })}
    </div>
  )
}

export default MenuCard
