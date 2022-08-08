import React from 'react'
import "./topbar.scss"
import MailIcon from '@mui/icons-material/Mail';
import PersonIcon from '@mui/icons-material/Person';


export default function Topbar() {
  return (
    <div className='topbar'>
      <div className="wrapper">
        <div className="left">
          <a href="#intro" className='logo'>Batuhan Okur</a>
          <div className="itemContainer">
            <PersonIcon className='icon'/>
            <span>+905398861516</span>
          </div>
          <div className="itemContainer">
            <MailIcon className='icon'/>
            <span>batuhanokur2200@gmail.com</span>
          </div>
        </div>
        <div className="right">
          
        </div>
      </div>
    </div>
  )
}
