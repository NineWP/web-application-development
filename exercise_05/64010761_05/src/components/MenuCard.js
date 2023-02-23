import React from 'react';
import { MenuData } from './MenuData';
import '../styles/MenuCard.css'

const MenuCard = () => {
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
                    <footer>
                        <button className='vote'>Click to Vote</button>
                        <span className='display-count'>MIN</span>
                        <button className='unvote'>Click to Unvote</button>
                    </footer>
                </div>
            )
        })}
    </div>
  )
}

export default MenuCard
