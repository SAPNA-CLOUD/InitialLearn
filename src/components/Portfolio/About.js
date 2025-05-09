import React from 'react';
import './about.css';
import Simon_Game from "../../assets/Simon_Game.jpg";


const About = () => {
    return (
      <section id='portfolio'>
      <h1 className='portfolioHeading'>My Portfolio</h1>
      <span className='portfolioDesc'>I take pride in paying attention to the smallest details and making sure that my work is pixel perfect. I am excited to bring my skills and experience to help businesses achieve their goals and create a strong online presence.
      </span><br/>
      <h2>My Project</h2>
      <div className='project'>
        
        <div className='pleft'>
        <img src={Simon_Game} alt="Simon_Game">
        </img> 
        </div>
        <div className='pright'>
        <a href='https://sapna-cloud.github.io/Simon-Game-/' className='simon'><h3>Simon Game</h3></a> <br/>
        <p>The device creates a series of tones and lights and requires a user to repeat the sequence.  If the user succeeds, the series becomes progressively longer and more complex. Once the user fails or the time limit runs out, the game is over. </p>
        </div>
        
        <div className='pleft'>
        <img src={Simon_Game} alt="E-Commerce Website">
        </img> 
        </div>
        <div className='pright'>
        <a href='https://ecommercesapna.vercel.app/' className='simon'><h3>Simon Game</h3></a> <br/>
        <p>This website is made to purchase clothes for men, women and kids. </p>
        </div>

        <div className='pleft'>
        <img src={Simon_Game} alt="Mobile Website">
        </img> 
        </div>
        <div className='pright'>
        <a href='https://argusacademy.com/sapna/' className='simon'><h3>Simon Game</h3></a> <br/>
        <p>Mobile Website is used to sell and purchase old mobile phones. </p>
        </div>
        
        
      </div>
    <button className='portfolioBtn'>See More</button>
    </section>
    );
}

export default About;
