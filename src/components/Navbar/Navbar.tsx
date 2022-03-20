import { useState } from 'react'
import { GiHamburgerMenu } from 'react-icons/gi'
import { MdOutlineRestaurantMenu } from 'react-icons/md'
import './Navbar.css'
import { images } from '../../constants'

export default function Navbar() {
  const [toggleMenu, setToggleMenu] = useState(false)
  return (
    <nav className='app__navbar'>
      <div className='app__navbar-logo'>
        <img src={images.gericht} alt='app__logo' />
      </div>
      <ul className='app__navbar-links'>
        <li className='p__opensans'><a href='#home'></a>home</li>
        <li className='p__opensans'><a href='#about'></a>about</li>
        <li className='p__opensans'><a href='#menu'></a>menu</li>
        <li className='p__opensans'><a href='#awards'></a>awards</li>
        <li className='p__opensans'><a href='#contact'></a>contact</li>
      </ul>
      <div className='app__navbar-login'>
        <a href='#login' className='p__opensans'>Log IN / Register</a>
        <div />
        <a href='/' className='p__opensans'>Book Table</a>
      </div>
      <div className='app__navbar-smallscreen'>
        <GiHamburgerMenu color='#fff' fontSize={27} onClick={() => setToggleMenu(true)} />
        {toggleMenu && <div className='app__navbar-smallscreen_overlay flex__center slide-bottom'>
          <MdOutlineRestaurantMenu fontSize={27} className='overlay__close' onClick={() => setToggleMenu(false)} />
          <ul className='app__navbar-smallscreen_links'>
            <li className='p__opensans'><a href='#home'></a>home</li>
            <li className='p__opensans'><a href='#about'></a>about</li>
            <li className='p__opensans'><a href='#menu'></a>menu</li>
            <li className='p__opensans'><a href='#awards'></a>awards</li>
            <li className='p__opensans'><a href='#contact'></a>contact</li>
          </ul>
        </div>}
      </div>
    </nav>
  )
}