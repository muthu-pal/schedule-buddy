import React from 'react'
import DropdownNav from './DropdownNav.js'

function MyHeader() {
  return (
    <div>
      <div className="dropdown-nav">
      <DropdownNav />
    </div>
      <div className="header">
      <p>Schedule Buddy</p>
    </div>
    <div className="upload-button">
      <p>upload</p>
    </div>
    <div className="search-button">
      <p className="search">search</p>
    </div>
    </div>
  )
}

export default MyHeader