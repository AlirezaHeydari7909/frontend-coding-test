import React from 'react'
import { useState } from 'react';
export default function Header(props) {
  const {time} = props;
  
  const [isOpen, setOpen] = useState(false)
  const humberBtn = () => {
    setOpen(isOpen => !isOpen)
  }
  return (
    <div>
        <div id="menu-burger" className={isOpen ? 'open' : ''} onClick={humberBtn}>
          <div className="inner-burger"></div>
        </div>
        <div id="navbar" className={isOpen ? 'open' : ''}>
            <div id="home" className='navChild'>Home</div>
            <div id="login" className='navChild'>Login</div>
            <div id="contact" className='navChild'>Contact</div>
            <div id="about" className='navChild'>About</div>
        </div>
        <div className="second">
            <p className="num" >{time}</p>
        </div>
    </div>
  )
}
