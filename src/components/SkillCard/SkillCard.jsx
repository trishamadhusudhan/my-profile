import React from 'react'
import'./SkillCard.css'
function SkillCard({name, level, icon}) {
    const levelPercent = {Beginner: 33, Intermediate: 66, Advanced: 90}
    const pct = levelPercent [level] || 50;
  return (
    <div className='skill-card'>
      {icon && <span className='skill-icon'>{icon}</span>}
      <h4 className='skill-name'>{name}</h4>
      <p className='skill-level'>{level}</p>
      <div className='skill-bar'>
        <div className='skill-fill'style={{width: `${pct}%`}}/>
      </div>
    </div>
  )
}

export default SkillCard
