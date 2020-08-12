import React from 'react';


import MyHeader from './myHeader.js';
import MyFooter from './myFooter.js';
import './myHeader.css'
import './myFooter.css'
import './OptionsPage.css'



const OptionsPage = () => {
    return (
        <div>
          
          
            <MyHeader />
            {/* middle section starts here */}
                    <div class="top-text-container">
                    <p class="top-text">what describes you most?</p>
                </div>
                <div class="central-container">
                    <div class="yellow-box">
                    <p class="top-yellow">I've already decided on a <br /> few classes</p>
                    <div class="yellow-one-top-rectangle">
                        Classes: Math 32A, Math 33A
                    </div>
                    <p class="joebruin">joebruin, physics major</p>
                    <div class="yellow-one-bottom-rectangle">
                        - Ling 1 <br />
                        - Math 32A <br />
                        - Math 33A
                    </div>
                    <p class="bottom-yellow">Enter your classes and we'll find <br /> schedules with the same combination</p>
                    </div>


                    <div class="yellow-box">
                    <p class="top-yellow">I have no idea what I <br /> should be taking</p>
                    <div class="yellow-two-big-rectangle">
                        CS 180, Algorithms &nbsp; &#8212; &nbsp; 95% <br />
                        CS 180, Algorithms &nbsp; &#8212; &nbsp; 89% <br />
                        CS 180, Algorithms &nbsp; &#8212; &nbsp; 56% <br />
                        CS 146, Machine L....  &#8212; &nbsp; 42%
                    </div>
                    <div class="yellow-two-small-rectangle">
                        Year: &nbsp;&nbsp; 2nd <br />
                        Major: Computer Science
                    </div>
                    <p class="bottom-yellow">Select your year and major and <br /> we'll show you the most popular classes</p>
                    </div>


                    <div class="yellow-box">
                    <p class="top-yellow">I'm looking for fun and <br /> interesting classes</p>
                    <div class="party">
                        <img width = "230vw" src='./images/partying.svg' align="stretch" alt="Picture of a Schedule" />
                    </div>
                    <p class="bottom-yellow">Browse classes rated the most <br /> interesting by your fellow students!</p>
                    </div>
                </div>
                {/* middle section ends here */}
            
            <MyFooter />
          
    
    
    
    
    
    
        </div>
      );
}

export default OptionsPage