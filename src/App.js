import './App.css';
import logo from './assets/einstein.jpeg'
import React, { useState } from 'react';

function App() {
  const [menuVisible, setMenuVisible] = useState(false);

  const toogleMenu = () => {
    setMenuVisible(!menuVisible)
  }

  return (
    // intro section
    <div className='h-1/2 lg:h-screen bg-grandiant-to-t from-indigo-200'>

      {/* Nav bar */}
      <nav className='w-full top-0 fixed bg-white-400'>
        <div className='container mx-auto py-5 flex items-center justify-between'>
          <div className='flex items-center gap-2'>
            <img className='w-10 h-10 rounded-full' src={logo} alt="my logo"/>
            <span className='text-2xl font-bold text-indigo-900'>Portwind.</span>
          </div>

          <div>
            <ul className='hidden md:flex space-x-10 text-gray-600 font-bold text-sm uppercase'>
              <li className='hover:text-gray-500'> <a href='#'>homepage</a> </li>
              <li className='hover:text-gray-500'> <a href='#'>about me</a> </li>
              <li className='hover:text-gray-500'> <a href='#'>services</a> </li>
              <li className='hover:text-gray-500'> <a href='#'>works</a> </li>
              <li className='hover:text-gray-500'> <a href='#'>contact</a> </li>
            </ul>
          </div> 

          <div>
            <img src={logo} alt='moon logo' className='hidden md:block w-5 cursor-pointer'/>
          </div>

          <div onClick = {toogleMenu} className = {`${menuVisible ? 'bg-white':'bg-white'} space-y-1 md:hidden cursor-pointer z-20`}>
            <div className='w-6 h-0.5 bg-black'></div>
            <div className='w-6 h-0.5 bg-black'></div>
            <div className='w-6 h-0.5 bg-black'></div>
          </div>

          <ul className= {`${menuVisible ? 'block':'hidden'} bg-indigo-900 absolute left-0 top-0 w-full p-10 rounded-b-3xl space-y-10 text-white text-center`}>
            <li> <a href='#'>homepage</a> </li>
            <li> <a href='#'>about me</a> </li>
            <li> <a href='#'>services</a> </li>
            <li> <a href='#'>works</a> </li>
            <li> <a href='#'>contact</a> </li>
          </ul>
        </div>
      </nav>

      {/* Intro content */}
      <div></div>
    </div>
  );
}

export default App;