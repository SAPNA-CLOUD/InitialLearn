import React from 'react';
import './intro.css';
import Image from "../../assets/profile.jpg";

const Intro = () => {
  return (
    <section className='intro'>
      <div className='introContent'>
      <span className='hello'>Hello,</span>
      <span className='introText'>I'm
      <span className='introName'> Sapna Kumari
      </span><br/>
      Front-End React Deveoper </span>
      <p className='introPara'>I am a skilled and passionate web designer with experience in crating visually appealing and<br/>
      user-friendly websites. I have a strong understanding of design and a ken eye for detail.<br/>
      I like puhing myself and taking up new challenges.</p>
      </div>
      <img src = {Image} alt ='Profile' className='bg'/>
    
    </section>
  );
}

export default Intro;
