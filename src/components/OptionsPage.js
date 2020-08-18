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
            <div className="top-text-container">
                <p className="top-text">what describes you most?</p>
            </div>
            <div className="central-container">
                <div className="yellow-box">
                    <p className="top-yellow">I've already decided on a <br /> few classNamees</p>
                    <div className="yellow-one-top-rectangle">
                        classNamees: Math 32A, Math 33A
                    </div>
                    <p className="joebruin">joebruin, physics major</p>
                    <div className="yellow-one-bottom-rectangle">
                        - Ling 1 <br />
                        - Math 32A <br />
                        - Math 33A
                    </div>
                    <p className="bottom-yellow">Enter your classNamees and we'll find <br /> schedules with the same combination</p>
                </div>

                <div className="yellow-box">
                    <p className="top-yellow">I have no idea what I <br /> should be taking</p>
                    <div className="yellow-two-big-rectangle">
                        CS 180, Algorithms &nbsp; &#8212; &nbsp; 95% <br />
                        CS 180, Algorithms &nbsp; &#8212; &nbsp; 89% <br />
                        CS 180, Algorithms &nbsp; &#8212; &nbsp; 56% <br />
                        CS 146, Machine L....  &#8212; &nbsp; 42%
                    </div>
                    <div className="yellow-two-small-rectangle">
                        Year: &nbsp;&nbsp; 2nd <br />
                        Major: Computer Science
                    </div>
                    <p className="bottom-yellow">Select your year and major and <br /> we'll show you the most popular classNamees</p>
                </div>

                <div className="yellow-box">
                    <p className="top-yellow">I'm looking for fun and <br /> interesting classNamees</p>
                    <div className="party">
                        <img width="230vw" src='./images/partying.svg' align="stretch" alt="People having fun" />
                    </div>
                    <p className="bottom-yellow">Browse classNamees rated the most <br /> interesting by your fellow students!</p>
                </div>
            </div>
            {/* middle section ends here */}
            <MyFooter />
        </div>
    );
}

export default OptionsPage