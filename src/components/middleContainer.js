import React from 'react'

function MiddleContainer() {
    return (
        <div className="middle-container">
        <div className="image">
          <img width = "445vw" src='./images/schedule.svg' align="stretch" alt="Schedule clipart" />
        </div>
        <div className="middle-text">
          <p className="head">don't know what to take <br /> next quarter? <br /> </p>
          <p className="second">Schedule Buddy is a database of student schedules <br /> that can help you <span style={{backgroundColor: "rgba(68, 133, 231, 0.3)"}}>plan your college experience.</span>
          </p>
          <div className="get-started-button">
            <span className="temp"><p>get started</p></span>
    
        </div>
          <p className="bottom-text">filter by major, search a specific className, or <br /> browse our list of GEs</p>
        </div>
        </div>
    
  )
}

export default MiddleContainer