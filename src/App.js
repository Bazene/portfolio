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
    <div className='h-1/2 lg:h-screen bg-gradient-to-t from-indigo-200'>
      {/* Nav bar */}
      <nav className='w-full top-0 fixed bg-white-900 z-10'>
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
      {/* Image */}
      <div>
        <img src={logo} alt="me" className='absolute bottom-0 right-0 lg:left-0 mx-auto h-5/6 object-cover' />
      </div>

      {/* Circle */}
      <div className='hidden lg:block absolute -bottom-1/4 right-0 left-0 mx-auto w-big h-big bg-indigo-900 rounded-full
      -z-10'>
      </div>

      {/* Animated text */}
      <div className='absolute top-1/3 left-5 text-xl sm:left-10 sm:text-4xl md:lelt-1/4 md:text-6xl lg:left-5 xl:left-48 xl:text-7xl font-bold'>
        <span className='text-gray-600'>Frelance</span>
        <p className='text-red-500'>Developer</p>
      </div>

      {/* texts */}
      <div className='hidden lg:flex flex-col gap-5 rounded-md shadow-lg absolute top-0 bottom-0 right-10 m-auto bg-white p-6 h-fit w-1/3'>
        <hi className="text-4xl font-bold text-indigo-900">Hi, I'm Serge</hi>
        <p className='text-gray-400'>
          With over 1 years of experience on web design  and developpement. Lorem
          ipsum dolor sit amet consectetur adipisicing elit. N oumquam quo
          provident, facere minus temporibus venian nostrum reprehenderit nihil ? 
        </p>
        <a className="bg-indigo-600 text-white text-xl px-3 py-2 rounded-md font-semibold w-fit" href="#contact">Hire Me</a>
      </div>
    </div>
  );
}

export default App;