import React, { useContext } from 'react'
import '../pos_header/header.css'
import { Link } from 'react-router-dom';
import {Cloud,CellSignalFull,NotePencil,CreditCard,List,Gear,ArrowsDownUp} from "phosphor-react";

import { SignOut } from 'phosphor-react'
import { uescontext } from '../context/userContext'
const Header = () => {
  const { userlogin, handleLogout } = useContext(uescontext)
  return (
 
    <div className='header'>
            <span className='userlogedin'>
           {
        userlogin ?
           <>{userlogin.user.fullname}
          <div onClick={handleLogout}>
            <SignOut size={30} color="#fffafa" />
          </div>
          </>
          : null
      }
            </span>
            <div className='icon-header'>
                <Link><Cloud size={32} weight="bold"  color='#ffff' /></Link>
                <Link><CellSignalFull size={32} weight="bold" color='#ffff' /></Link>
                <Link><NotePencil size={32} weight="bold" color='#ffff'  /></Link>
                <Link><CreditCard size={32} weight="bold" color='#ffff' /></Link>
                <Link><List size={32} weight="bold" color='#ffff'/></Link>
                <Link><Gear size={32}  weight="bold" color='#ffff' /></Link>
                <div className="name">
                <span>posmi</span>
                </div>
                <Link><ArrowsDownUp size={32}weight="bold" color='#ffff' /></Link>
            </div>
        </div>
  )
}

export default Header