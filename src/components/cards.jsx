import React from "react";

export default function CardServices({Logo, size, cardTile, cardBody}) {
    return (
        <div className='w-full md:w-4/12 shadow-xl rounded-lg p-5 my-3 md:my-10 flex flex-col gap-3'>
            <Logo size={size} className="dark:text-white"/>
            <h1 className='font-medium text-lg dark:text-white'>{cardTile}</h1>
            <p className='text-gray-400'>{cardBody}</p>
            <a className='text-indigo-600 font-semibold text-sm' href=''>Read more</a>
        </div>
    )
};

export function CardProjects({Logo, size, cardBody, cardTile}) {
    return (
        <div className='w-full md:w-4/12 shadow-xl rounded-lg p-5 my-3 md:my-10 flex flex-col gap-3'>
            <Logo size={size} className="dark:text-white"/>
            <h1 className='font-medium text-lg dark:text-white'>{cardTile}</h1>
            <p className='text-gray-400'>{cardBody}</p>
            <a className='text-indigo-600 font-semibold text-sm' href=''>Read more</a>
        </div>
    );
};
