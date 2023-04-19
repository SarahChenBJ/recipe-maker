import React from 'react'

export const Nav = () => {
  return (
    <nav className='navbar'>
      <div className='navbar-container'>
        <a href=''>
          <img src='./src/assets/react.svg' alt=""/>
        </a>
        <div className='menu-container'>
          <ul className='menu-ul'>
            <li className='menu-li'>
              <a href=''>Home</a>
            </li>
            <li className='menu-li'>
              <a href=''>Recipe Cards</a>
            </li>
            <li className='menu-li'>
              <a href=''>Recipe Boxes</a>
            </li>
            <li className='menu-li'>
              <a href=''>Cooking Tips</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}
export default Nav