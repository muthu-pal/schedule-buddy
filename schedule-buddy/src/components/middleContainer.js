import React from 'react'

function MiddleContainer() {
    return (
        <div class="middle-container">
        <div class="image">
          <img width = "445vw" src='./images/schedule.svg' align="stretch" alt="Schedule clipart" />
        </div>
        <div class="middle-text">
          <p class="head">don't know what to take <br /> next quarter? <br /> </p>
          <p class="second">Schedule Buddy is a database of student schedules <br /> that can help you <span style={{backgroundColor: "rgba(68, 133, 231, 0.3)"}}>plan your college experience.</span>
          </p>
          <div class="get-started-button">
            <span class="temp"><p>get started</p></span>
    
        </div>
          <p class="bottom-text">filter by major, search a specific class, or <br /> browse our list of GEs</p>
        </div>
        </div>
    
  )
}

export default MiddleContainer