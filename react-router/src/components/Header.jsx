import React from 'react'
import { NavLink } from 'react-router-dom'

function Header() {
  return (
    <>
      <div className='header'>
        <ul className='flex p-3 bg-red-400 '>
            <li className='p-3 text-white '>
                <NavLink
                    to='/'
                    className={({isActive})=>`${ isActive ?  'bg-blue-700' : 'bg-transparent'}`}
                >
                    Home
                </NavLink>
        
            </li>
            <li className='p-3 text-white '>
                <NavLink
                to='/about'
                className={({isActive})=>`${ isActive ? 'bg-blue-700' : 'bg-transparent'}`}
                >
                    About
                </NavLink>
        
            </li>
            <li className='p-3 text-white '>
                <NavLink
                to='/github'
                className={({isActive})=>`${ isActive ? 'bg-blue-700' : 'bg-transparent'}`}
                >
                    Github
                </NavLink>
        
            </li>
        </ul>
      </div>
    </>
  )
}

export default Header
