import './App.css';
import logo from './assets/serge.png'
import React from 'react';
import { HeaderSection } from './components/headers';
import CardServices, { CardProjects,  CardTechnologie} from './components/cards'; // A default component don't need destrucration
import { SiAmazonwebservices } from "react-icons/si";
import { TfiWorld } from "react-icons/tfi";
import { SiOdoo } from "react-icons/si";
import { FcElectronics } from "react-icons/fc";
import { GiArtificialIntelligence } from "react-icons/gi";
import { IoThunderstormOutline } from "react-icons/io5";


function App() {

  return (
    <div>
      <div id="homepage" className='h-1/2 lg:h-screen bg-gradient-to-t from-indigo-200 dark:from-slate-800 dark:to-slate-900 relative overflow-hidden'>
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
            <div className = 'h-full rounded-full overflow-hidden'>
              <img src = {logo} alt = 'my portrait'/>
            </div>
          </div>

          {/* right sight */}
          <div className = 'my-auto flex flex-col gap-3'>
            <h1 className = 'text-indigo-600 font-bold'>ABOUT ME</h1>
            <h1 className = 'text-3xl font-medium dark:text-white'>Software Engineer</h1>
            <p className = 'text-gray-400'>
              I design and build digital products. I'm also a multi-discoplinary maker with over 1 year of experience in wide range of design disciplines.
            </p>
            <CardTechnologie technologie_name={'Python'} tech_percentate={'w-4/6'}/>
            <CardTechnologie technologie_name={'HTML/CSS'} tech_percentate={'w-5/6'}/>
            <CardTechnologie technologie_name={'Javascript'} tech_percentate={'w-3/6'}/>
            <CardTechnologie technologie_name={'React'} tech_percentate={'w-2/6'}/>
          </div>
        </div>
      </div>

      {/* Services */}
      <div id="services" className='dark:bg-slate-900 py-20'>
        <div className='container mx-auto'>
          <HeaderSection 
            headTitle="SERVICES" 
            headSubTitle="What do I offer ?" 
            headBody=" My approach to website design is to create a website that strengthens
              your company's brand while ensuring ease of use and simplicity for your audiance."
          />

          <div className='p-5 sm:p-0 flex flex-wrap justify-between'>
            <CardServices  Logo={TfiWorld} size={25} cardTile="FULL-STACK WEB" 
              cardBody="I specialize in creating interactive website for individuals ans small businesses."
            />

            <CardServices  Logo={GiArtificialIntelligence} size={25} cardTile="ARTIFICIAL INTELLIGENT" 
              cardBody="I specialize in creating interactive website for individuals ans small businesses."
            />

            <CardServices  Logo={FcElectronics} size={25} cardTile="ELECTRONICS" 
              cardBody="I specialize in creating interactive website for individuals ans small businesses."
            />

            <CardServices  Logo={IoThunderstormOutline} size={25} cardTile="INTERNET OF THINGS" 
              cardBody="I specialize in creating interactive website for individuals ans small businesses."
              />

            <CardServices  Logo={SiOdoo} size={30} cardTile="Odoo DEV" 
              cardBody="I specialize in creating interactive website for individuals ans small businesses."
              />
           
            <CardServices  Logo={SiAmazonwebservices} size={25} cardTile="AWS" 
              cardBody="I specialize in creating interactive website for individuals ans small businesses."
            />
          </div>
        </div>
      </div>

      {/* Portfolio and project */}
      <div id="works" className='dark:bg-slate-900 py-20'>
        <HeaderSection 
            headTitle="PORTFOLIO" 
            headSubTitle="Works and Projects" 
            headBody="
              I design complex systems using technologies such as Python, JavaScript, Postgress, SQL, etc...
            "
        />

        <div className='p-5 sm:p-0 flex flex-wrap justify-center'>
          <CardProjects Logo={SiAmazonwebservices} size={25} 
            cardTile="Connected Bracelet" 
            cardBody="
            This project involves designing and producing a connected bracelet enabling real-time monitoring of patients suffering from cardiovascular diseases.
            "
          />

          <CardProjects  Logo={SiAmazonwebservices} size={25} 
            cardTile="My portfolio" 
            cardBody="
            This project involeves building my portfolio and present what I'm doing as a Software engineer.
            "
          />
        </div>
      </div>

      {/* Contact */}
      <div id="contact" className='dark:bg-slate-900 py-20'>
        <div className='container mx-auto'>
          <HeaderSection 
            headTitle="CONTACT" 
            headSubTitle="Have a question?" 
            headBody="Do you have an idea? Let's discuss it and see what we can do together."
          />

          <form className='mt-5 p-8 flex flex-col gap-5 items-center'>
            <input className='p-2 w-full md:w-1/2 ring-1 ring-indigo-300 rounded-sm dark:bg-slate-800 dak:ring-0 dark:text-white' type="text" placeholder='Name Surname'/>
            <input className='p-2 w-full md:w-1/2 ring-1 ring-indigo-300 rounded-sm dark:bg-slate-800 dak:ring-0 dark:text-white' type="email" placeholder='Email'/>
            <textarea className='p-2 w-full md:w-1/2 ring-1 ring-indigo-300 rounded-sm dark:bg-slate-800 dak:ring-0 dark:text-white' cols="30" rows="10" placeholder='Message...'></textarea>
            <buttom className="w-1/2 bg-indigo-600 text-white font-medium px-3 py-2 rounded-md cursor-pointer text-center">Submit</buttom>
          </form>
        </div>
      </div> 
    </div>
  );
}

export default App;
