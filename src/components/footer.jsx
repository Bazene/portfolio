import React from "react";
import logo from '../assets/serge.png'
import { CiLinkedin } from "react-icons/ci";
import { LuFacebook } from "react-icons/lu";
import { FaXTwitter } from "react-icons/fa6";


export function Footer() {
    return (
        <div className='w-full bg-gray-800'>
            <div className='container mx-auto py-5 flex items-center justify-between'>
                <div className='flex items-center gap-2'>
                    <img className='w-10 h-10 rounded-full' src={logo} alt="my logo"/>
                    <span className='text-2xl font-bold text-white'>Porfolio</span>
                </div>

                <span className='hidden md:block font-medium text-white'>@ Serge 2025</span>

                <div className='flex gap-2'>
                    <div className="cursor-pointer text-white"><CiLinkedin size={25} /></div>
                    <div className="cursor-pointer text-white"><LuFacebook size={25} /></div>
                    <div className="cursor-pointer text-white"><FaXTwitter size={25} /></div>
                </div>
            </div>
        </div>
    );
};

