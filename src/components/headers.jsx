import React, { useContext, useState } from "react";
import { ThemeContext } from "../context";
import logo from '../assets/serge.png'
import { IoMenuSharp } from "react-icons/io5";


export default function Header() {
    const { theme, changeTheme } = useContext(ThemeContext);
    const [menuVisible, setMenuVisible] = useState(false);
    
    const toogleMenu = () => {
        setMenuVisible(!menuVisible)
    }

    return (
        <div className='w-full fixed p-5 flex items-center justify-between bg-white z-10 dark:bg-slate-900 '>
            <div className='flex items-center gap-2'>
                <img className='w-10 h-10 rounded-full' src={logo} alt="my logo"/>
                <span className='text-2xl font-bold text-indigo-900 dark:text-white'>Portfolio</span>
            </div>

            <div>
                <ul className='hidden md:flex space-x-10 text-gray-600 dark:text-gray-100 font-bold text-sm uppercase'>
                    <li className='hover:text-gray-500'> <a href='#homepage'>homepage</a> </li>
                    <li className='hover:text-gray-500'> <a href='#about'>about me</a> </li>
                    <li className='hover:text-gray-500'> <a href='#services'>services</a> </li>
                    <li className='hover:text-gray-500'> <a href='#works'>works</a> </li>
                    <li className='hover:text-gray-500'> <a href='#contact'>contact</a> </li>
                    <li className='hover:text-gray-500'> <a href='#'>my programm</a> </li>
                    <li className='hover:text-gray-500'> <a href='#'>my cv</a> </li>
                </ul>
            </div> 

            <div onClick={() => changeTheme()} className='cursor-pointer'>
                {theme === 'light' ? '☀️' : '🌙'}
            </div>

            <div onClick={toogleMenu} className = "md:hidden cursor-pointer z-20 items-center">
                <IoMenuSharp size={25} className={`${menuVisible ? 'text-white':'text-black'} dark:text-white`}/>
            </div>

            <ul className= {`${menuVisible ? 'block':'hidden'} bg-indigo-900 absolute left-0 top-0 w-full p-10 rounded-b-3xl space-y-10 text-white text-center`}>
                <li> <a onClick={toogleMenu} href='#homepage'>homepage</a> </li>
                <li> <a onClick={toogleMenu} href='#about'>about me</a> </li>
                <li> <a onClick={toogleMenu} href='#services'>services</a> </li>
                <li> <a onClick={toogleMenu} href='#works'>works</a> </li>
                <li> <a onClick={toogleMenu} href='#contact'>contact</a> </li>
                <li> <a onClick={toogleMenu} href='#'>my program</a> </li>
                <li> <a onClick={toogleMenu} href='#'>my cv</a> </li>
            </ul>
        </div>
    );
};

export function HeaderSection ({headTitle, headSubTitle, headBody})  {

    return (
        <div className='flex flex-col gap-3 items-center'>
            <h1 className = 'text-indigo-600 font-bold'>{headTitle}</h1>
            <h2 className = 'text-3xl dark:text-white'>{headSubTitle}</h2>
            <p className='w-1/2 text-center text-gray-400'>{headBody}</p>
        </div>
    );
};

