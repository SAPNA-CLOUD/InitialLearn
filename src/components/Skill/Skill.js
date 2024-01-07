import React from 'react';
import './skill.css';
import UIDesign from '../../assets/ui-design.png';

const Skill = () => {
  return (
    <section id="skills">
    <span className='skillTitle'>About Me</span>
    <div className='skillBars'>
      <div className='skillBar'>
      <img src ={UIDesign} alt = 'UI Design'className='skillImg'/>
      <div className='skillBarText'>
      <h2>A Passionate Frond-end developer</h2>
      <p>I am a skilled and passionate web designer with experience in crating visually appealing and user-friendly websites. I have a strong understanding of design and a ken eye for detail.
      As a junior Front-End Developer. I possess an impressive arsenal of skills in HTML, CSS, Javascript, React. I excel in designing and maintaining responsive websites that offer a smooth use experience. My expertise lies in crafting dynamic, engaging interfaces through writing clean and optimized code and utilizing cutting-edge development tools and techniques. I am also a team player who thrives in collaborating with cross functonal teams to produce outstanding web applications.</p>
      </div>
      </div>
    
    </div>
    </section>
  )
}

export default Skill;
