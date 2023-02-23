import React from 'react';
import { MenuData } from './MenuData';
import '../styles/MenuCard.css'

const MenuCard = () => {
  return (
    <div className="card-container">
        {MenuData.map((item, index) => {
            return (
                <div key={index} className="card">
                    <div className="info">
                        <h3>{item.type}</h3>
                        <h4>{item.name}</h4>
                        <p>{item.title}</p>
                    </div>
                    <img className="menu-img" src={item.img_src} alt={item.alt}/>
                </div>
            )
        })}
    </div>
  )
}

export default MenuCard
