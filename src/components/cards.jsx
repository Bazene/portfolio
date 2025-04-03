import React, { useState } from "react";

export default function CardServices({Logo, size, cardTile, cardBody}) {
    const [expanded, setExpanded] = useState(false);

    return (
        <div className='w-full md:w-4/12 shadow-xl rounded-lg p-5 my-3 md:my-10 flex flex-col gap-3'>
            <Logo size={size} className="dark:text-white"/>
            <h1 className='font-medium text-lg dark:text-white'>{cardTile}</h1>
            <p className='text-gray-400'>
                {expanded ? cardBody : cardBody.substring(0, 100) + '...'}
            </p>
            
            <button 
                className='text-indigo-600 font-semibold text-sm text-left'
                onClick={() => setExpanded(!expanded)}
            >
                {expanded ? 'Read less' : 'Read more'}
            </button>
        </div>
    )
};

export function CardProjects({Logo, size, cardBody, cardTile}) {
    const [expanded, setExpanded] = useState(false);

    return (
        <div className='w-full md:w-4/12 shadow-xl rounded-lg p-5 my-3 md:my-10 flex flex-col gap-3'>
            <Logo size={size} className="dark:text-white"/>
            <h1 className='font-medium text-lg dark:text-white'>{cardTile}</h1>
            <p className='text-gray-400'>
                {expanded ? cardBody : cardBody.substring(0, 100) + '...'}
            </p>
            
            <button 
                className='text-indigo-600 font-semibold text-sm text-left'
                onClick={() => setExpanded(!expanded)}
            >
                {expanded ? 'Read less' : 'Read more'}
            </button>
        </div>
    );
};

export function CardTechnologie({technologie_name, tech_percentate}){
    return(
        <>
            <h2 className = 'text-gray-400 font-medium'>{technologie_name}</h2>
            <div className = 'w-full bg-gray-200 h-1.5 rounded-md'>
                <div className = {`${tech_percentate} bg-indigo-600 h-1.5 rounded-md`}></div>
            </div>
        </>
    )
}
