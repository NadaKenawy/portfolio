import React from 'react';
import { Link } from 'react-router-dom';

const AllProjects = () => {
    const projects = [
        {
            id: 1,
            src: '/images/projectsImages/bookly.jpg',
            code: 'https://github.com/esraa-abdo3/furniture'
        },
        {
            id: 2,
            src: '/images/projectsImages/chat.JPG', // تعديل هنا
            code: 'https://github.com/esraa-abdo3/'
        },
        {
            id: 3,
            src: '/images/projectsImages/news.JPG', // تعديل هنا
            code: 'https://github.com/esraa-abdo3/skin-care'
        },
        {
            id: 4,
            src: '/images/projectsImages/weather.JPG', // تعديل هنا
            code: 'https://github.com/esraa-abdo3/homestore'
        },
    ];

    const handleClickDemo = (demoUrl) => {
        const newWindow = window.open(demoUrl, '_blank');
        newWindow.opener = null;
        newWindow.rel = 'noopener noreferrer';
    };

    const handleClickCode = (codeUrl) => {
        const newWindow = window.open(codeUrl, '_blank');
        newWindow.opener = null;
        newWindow.rel = 'noopener noreferrer';
    };
    return (
        <section name="Projects" className='relative w-full text-white md:min-h-screen mt-24 mb-20'>
            <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
                <div className='pb-8'>
                    <h2 className='text-4xl font-bold inline border-b-4 border-primary-color/40 sm:text-5xl'>Projects</h2>
                    <p className='py-6'>Check out my best web applications here.</p>
                </div>
    
                <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8'>
                    {
                        projects.map(({ id, src, code }) => (
                            <div key={id} className='shadow-md shadow-gray-600 rounded-lg max-w-md mx-auto'>
                                <img loading='lazy' src={src} alt="project card" className='rounded-md duration-200 hover:scale-105' />
                                <div className='flex items-center justify-center'>
                                    <button onClick={() => handleClickCode(code)} className='w-1/2 px-6 py-2 m-4 duration-200 hover:scale-125'>Code</button>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
    
            <div className='flex justify-center mt-20 mb-20'>
                <Link to='/' className='text-black font-semibold text-[16px] w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-t from-green-400 to-primary-color cursor-pointer mx-auto md:mx-0 self-end mt-8 hover:scale-110 duration-300'>
                    <span className=''><i className='bx bx-home-heart mr-2'></i></span>
                    Go back
                </Link>
            </div>
        </section>
    );
    
    
}

export default AllProjects;
