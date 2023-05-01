import React from 'react'
import Wrapper from '../assets/wrappers/StatItem';

export default function StatsItem({ count, title, icon, color, bcg }) {
  return (
    <Wrapper color={color} bcg={bcg}>
      <header>
        <span className="count">{count}</span>
        <div className="icon">{icon}</div>
      </header>
      <h5 className='title'>{title}</h5>
    </Wrapper>
  )
}
