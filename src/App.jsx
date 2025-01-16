import './App.css';
import logo from './assets/serge.png'
import React, { useState, useContext } from 'react';
import { ThemeContext } from './context';


function App() {
  const [menuVisible, setMenuVisible] = useState(false);
  const { theme, changeTheme } = useContext(ThemeContext);

  const toogleMenu = () => {
    setMenuVisible(!menuVisible)
  }

  return (
    // intro section
    <div>
      <div id="homepage" className='h-1/2 lg:h-screen bg-gradient-to-t from-indigo-200 dark:from-slate-800 dark:to-slate-900 relative overflow-hidden'>
        {/* Nav bar */}
        <nav className='w-full top-0 fixed bg-white z-10 dark:bg-slate-900'>
          <div className='container mx-auto py-5 flex items-center justify-between'>
            <div className='flex items-center gap-2'>
              <img className='w-10 h-10 rounded-full' src={logo} alt="my logo"/>
              <span className='text-2xl font-bold text-indigo-900 dark:text-white'>Portwind.</span>
            </div>

            <div>
              <ul className='hidden md:flex space-x-10 text-gray-600 dark:text-gray-100 font-bold text-sm uppercase'>
                <li className='hover:text-gray-500'> <a href='#homepage'>homepage</a> </li>
                <li className='hover:text-gray-500'> <a href='#about'>about me</a> </li>
                <li className='hover:text-gray-500'> <a href='#services'>services</a> </li>
                <li className='hover:text-gray-500'> <a href='#works'>works</a> </li>
                <li className='hover:text-gray-500'> <a href='#contact'>contact</a> </li>
              </ul>
            </div> 

            <div onClick={() => changeTheme()} className='cursor-pointer'>
              {theme === 'light' ? '☀️' : '🌙'}
            </div>

            <div onClick={toogleMenu} className = {`${menuVisible ? 'bg-white':'bg-white'} space-y-1 md:hidden cursor-pointer z-20`}>
              <div className='w-6 h-0.5 bg-black'></div>
              <div className='w-6 h-0.5 bg-black'></div>
              <div className='w-6 h-0.5 bg-black'></div>
            </div>

            <ul className= {`${menuVisible ? 'block':'hidden'} bg-indigo-900 absolute left-0 top-0 w-full p-10 rounded-b-3xl space-y-10 text-white text-center`}>
              <li> <a onClick={toogleMenu} href='#homepage'>homepage</a> </li>
              <li> <a onClick={toogleMenu} href='#about'>about me</a> </li>
              <li> <a onClick={toogleMenu} href='#services'>services</a> </li>
              <li> <a onClick={toogleMenu} href='#works'>works</a> </li>
              <li> <a onClick={toogleMenu} href='#contact'>contact</a> </li>
            </ul>
          </div>
        </nav>

        {/* Intro content */}
        {/* Image */}
        <div>
          <img src={logo} alt="me" className='absolute bottom-0 right-0 lg:left-0 mx-auto h-5/6 object-cover' />
        </div>
 
        {/* Circle */}
        <div className='hidden lg:block absolute -bottom-1/4 right-0 left-0 mx-auto w-big h-big bg-indigo-900 rounded-full -z-10'>
        </div>

        {/* Animated text */} 
        <div className='absolute top-1/3 left-5 text-xl sm:left-10 sm:text-4xl md:lelt-1/4 md:text-6xl lg:left-5 xl:left-48 xl:text-7xl font-bold'>
          <span className='text-gray-600'>Frelance</span>
          <p className='text-red-500'>Developer</p>
        </div>

        {/* texts */}
        <div className='hidden lg:flex flex-col gap-5 rounded-md shadow-lg absolute top-0 bottom-0 right-10 m-auto bg-white dark:bg-slate-900 dark:shadow-slate-800 p-6 h-fit w-1/3'>
          <hi className="text-4xl font-bold text-indigo-900">Hi, I'm Serge</hi>
          <p className='text-gray-400'>
            With over 2 years of experience on web design  and developpement using React. I'm
            a computer engineer, loving AI and Maths. Do you have any issue on the previous ?
          </p>
          <a className="bg-indigo-600 text-white text-xl px-3 py-2 rounded-md font-semibold w-fit" href="#contact">Hire Me</a>
        </div>
      </div>

      {/* About me section */}
      <div id="about" className = 'dark:bg-slate-900 px-10 '>
        <div className = 'container mx-auto py-40 flex flex-col-reverse lg:flex-row items-center gap-20'>
          {/* left sight */}
          <div className = 'relative w-1/3'>
            <img className = 'h-1/4 absolute top-0 left-0' src = {logo} alt = "Dots images"/>
            <div className = 'h-full rounded-full overflow-hidden'>
              <img src = {logo} alt = 'my portrait'/>
            </div>
          </div>

          {/* right sight */}
          <div className = 'my-auto flex flex-col gap-3'>
            <h1 className = 'text-indigo-600 font-bold'>ABOUT ME</h1>
            <h1 className = 'text-3xl font-medium dark:text-white'>Better design</h1>
            <h1 className = 'text-3xl font-medium dark:text-white'>Better experience</h1>
            <p className = 'text-gray-400'>
              I design and build digital products. I'm also a multi-discoplinary maker with over 1 year of experience in wide range of design disciplines.
            </p>
            <h2 className = 'text-gray-400 font-medium'>HTML</h2>
            <div className = 'w-full bg-gray-200 h-1.5 rounded-md'>
              <div className = 'w-full bg-indigo-600 h-1.5 rounded-md'></div>
            </div>
            <h2 className = 'text-gray-400 font-medium'>Javascript</h2>
            <div className = 'w-full bg-gray-200 h-1.5 rounded-md'>
              <div className = 'w-4/6 bg-indigo-600 h-1.5 rounded-md'></div>
            </div>
            <h2 className = 'text-gray-400 font-medium'>React</h2>
            <div className = 'w-full bg-gray-200 h-1.5 rounded-md'>
              <div className = 'w-5/6 bg-indigo-600 h-1.5 rounded-md'></div>
            </div>
          </div>
        </div>
      </div>

      {/* Services */}
      <div id="services" className='dark:bg-slate-900 py-20'>
        <div className='container mx-auto'>
          {/* Top */}
          <div className='flex flex-col gap-3 items-center'>
            <h1 className = 'text-indigo-600 font-bold'>SERVICES</h1>
            <h1 className = 'text-3xl dark:text-white'>What do I offer ?</h1>
            <p className='w-1/2 text-center text-gray-400'>
              My approach to website design is to create a website that strengthens
              your company's brand while ensuring ease of use and simplicity for your audiance.
            </p>
          </div>

          {/* Bottom */}
          <div className='p-5 sm:p-0 flex flex-wrap justify-between'>
            {/* card */}
            <div className='w-full md:w-4/12 shadow-xl rounded-lg p-5 my-3 md:my-10 flex flex-col gap-3'>
              <img src={logo} alt="me" className='w-10' />
              <h1 className='font-medium text-lg dark:text-white'>UX / UI Design</h1>
              <p className='text-gray-400'>I specialize in creating interactive website for individuals ans small businesses.</p>
              <a className='text-indigo-600 font-semibold text-sm' href=''>Read more</a>
            </div>

            {/* card */}
            <div className='w-full md:w-4/12 shadow-xl rounded-lg p-5 my-3 md:my-10 flex flex-col gap-3'>
              <img src={logo} alt="me" className='w-10' />
              <h1 className='font-medium text-lg dark:text-white'>UX / UI Design</h1>
              <p className='text-gray-400'>I specialize in creating interactive website for individuals ans small businesses.</p>
              <a className='text-indigo-600 font-semibold text-sm' href=''>Read more</a>
            </div>

            {/* card */}
            <div className='w-full md:w-4/12 shadow-xl rounded-lg p-5 my-3 md:my-10 flex flex-col gap-3'>
              <img src={logo} alt="me" className='w-10' />
              <h1 className='font-medium text-lg dark:text-white'>UX / UI Design</h1>
              <p className='text-gray-400'>I specialize in creating interactive website for individuals ans small businesses.</p>
              <a className='text-indigo-600 font-semibold text-sm' href=''>Read more</a>
            </div>

            {/* card */}
            <div className='w-full md:w-4/12 shadow-xl rounded-lg p-5 my-3 md:my-10 flex flex-col gap-3'>
              <img src={logo} alt="me" className='w-10' />
              <h1 className='font-medium text-lg dark:text-white'>UX / UI Design</h1>
              <p className='text-gray-400'>I specialize in creating interactive website for individuals ans small businesses.</p>
              <a className='text-indigo-600 font-semibold text-sm' href=''>Read more</a>
            </div>

            {/* card */}
            <div className='w-full md:w-4/12 shadow-xl rounded-lg p-5 my-3 md:my-10 flex flex-col gap-3'>
              <img src={logo} alt="me" className='w-10' />
              <h1 className='font-medium text-lg dark:text-white'>UX / UI Design</h1>
              <p className='text-gray-400'>I specialize in creating interactive website for individuals ans small businesses.</p>
              <a className='text-indigo-600 font-semibold text-sm' href=''>Read more</a>
            </div>

            {/* card */}
            <div className='w-full md:w-4/12 shadow-xl rounded-lg p-5 my-3 md:my-10 flex flex-col gap-3'>
              <img src={logo} alt="me" className='w-10' />
              <h1 className='font-medium text-lg dark:text-white'>UX / UI Design</h1>
              <p className='text-gray-400'>I specialize in creating interactive website for individuals ans small businesses.</p>
              <a className='text-indigo-600 font-semibold text-sm' href=''>Read more</a>
            </div>
          </div>
        </div>
      </div>

      {/* Portfolio and project */}
      <div id="works" className='dark:bg-slate-900 py-20'>
        {/* Top */}
        <div className='flex flex-col gap-3 items-center'>
              <h1 className = 'text-indigo-600 font-bold'>PORTFOLIO</h1>
              <h1 className = 'text-3xl dark:text-white'>Works and Projects</h1>
              <p className='w-1/2 text-center text-gray-400'>
                I help designers, small agencies and businesses bring their ideas to life.
                Powered by Figma, VS Code and coffee, I turn your requirements into a well-designed websites.
              </p>
        </div>  

        {/* Bottom */}
        <div className='p-5 sm:p-0 flex flex-wrap justify-between'>
          {/* card */}
          <div className='w-full md:w-5/12 lg:w-1/5 shadow-xl rounded-lg my-3 md:my-10 m-1'>
            <img src={logo} alt="me" />
          </div>

          {/* card */}
          <div className='w-full md:w-5/12 lg:w-1/5 shadow-xl rounded-lg my-3 md:my-10 m-1'>
            <img src={logo} alt="me" />
          </div>

          {/* card */}
          <div className='w-full md:w-5/12 lg:w-1/5 shadow-xl rounded-lg my-3 md:my-10 m-1'>
            <img src={logo} alt="me" />
          </div>

          {/* card */}
          <div className='w-full md:w-5/12 lg:w-1/5 shadow-xl rounded-lg my-3 md:my-10 m-1'>
            <img src={logo} alt="me" />
          </div>

          {/* card */}
          <div className='w-full md:w-5/12 lg:w-1/5 shadow-xl rounded-lg my-3 md:my-10 m-1'>
            <img src={logo} alt="me" />
          </div>

          {/* card */}
          <div className='w-full md:w-5/12 lg:w-1/5 shadow-xl rounded-lg my-3 md:my-10 m-1'>
            <img src={logo} alt="me" />
          </div>

          {/* card */}
          <div className='w-full md:w-5/12 lg:w-1/5 shadow-xl rounded-lg my-3 md:my-10 m-1'>
            <img src={logo} alt="me" />
          </div>

          {/* card */}
          <div className='w-full md:w-5/12 lg:w-1/5 shadow-xl rounded-lg my-3 md:my-10 m-1'>
            <img src={logo} alt="me" />
          </div>
        </div>
      </div>

      {/* Contact */}
      <div id="contact" className='dark:bg-slate-900 py-20'>
        <div className='container mx-auto'>
          {/* Top */}
          <div className='flex flex-col gap-3 items-center'>
                <h1 className = 'text-indigo-600 font-bold'>CONTACT</h1>
                <h1 className = 'text-3xl dark:text-white'>Have a Question?</h1>
                <p className='w-1/2 text-center text-gray-400'>
                  Do you have an idea? Let's discuss it and see what we can do together.
                </p>
          </div>  

          {/* Bottom */}
          <form className='mt-5 p-8 flex flex-col gap-5 items-center'>
            <input className='p-2 w-full md:w-1/2 ring-1 ring-indigo-300 rounded-sm dark:bg-slate-800 dak:ring-0 dark:text-white' type="text" placeholder='Name Surname'/>
            <input className='p-2 w-full md:w-1/2 ring-1 ring-indigo-300 rounded-sm dark:bg-slate-800 dak:ring-0 dark:text-white' type="email" placeholder='Email'/>
            <textarea className='p-2 w-full md:w-1/2 ring-1 ring-indigo-300 rounded-sm dark:bg-slate-800 dak:ring-0 dark:text-white' cols="30" rows="10" placeholder='Message...'></textarea>
            <buttom className="w-1/2 bg-indigo-600 text-white font-medium px-3 py-2 rounded-md cursor-pointer text-center">Submit</buttom>
          </form>
        </div>
      </div> 

      {/* Footer */}
      <div className='w-full bg-gray-800'>
        <div className='container mx-auto py-5 flex items-center justify-between'>
          <div className='flex items-center gap-2'>
            <img className='w-10 h-10 rounded-full' src={logo} alt="my logo"/>
            <span className='text-2xl font-bold text-white'>Portwind.</span>
          </div>

          <span className='hidden md:block font-medium text-white'>@ Serge 2025</span>

          <div className='flex gap-2'>
            <img src={logo} alt='linkdin' className='w-4 cursor-pointer'/>
            <img src={logo} alt='mail' className='w-4 cursor-pointer'/>
            <img src={logo} alt='facebook' className='w-4 cursor-pointer'/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
