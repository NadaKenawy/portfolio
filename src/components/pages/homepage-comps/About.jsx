import React from 'react'
import { MdOutlineKeyboardArrowRight } from 'react-icons/md'
import { Link } from 'react-router-dom'
import { Link as ScrollLink } from 'react-scroll';

const About = () => {
    return (
        <section name="About" 
        className='relative w-full md:h-screen text-white h-unset'>

            <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full text-lg'>

                    <div className='pb-8'>
                        <h2 className='text-4xl sm:text-5xl font-bold inline border-b-4 border-primary-color/40'>About me</h2>
                    </div>

                    <p className="mb-4 py-6">
                    I’m a mobile developer experienced in building apps for small and medium-sized businesses. Whether you’re looking to create a new mobile app, enhance your app’s user experience, or launch on iOS and Android, I can help.
Skilled in Flutter, Dart, Firebase, REST APIs, and state management Bloc.
Full project management from idea to deployment.
I value regular communication, so let’s keep in touch throughout the development process.
                    </p>

                    <p>Thanks to my creativity, my attention to detail and my determination, I realized that I have a great talent for developing mobile applications.
                         I am fascinated by this great world of technologies and possibilities, and I am sure that I will be able to create incredible projects both professionally and personally with you.</p>

                   
                
            </div>

            <ScrollLink to="Projects" smooth duration={500} className='absolute bottom-2 -left-full md:left-1/2 md:-translate-x-1/2 cursor-pointer hover:text-primary-color'>
                <i className='bx bx-chevron-down text-7xl text-gray-400 animate-bounce font hover:text-primary-color'></i>
            </ScrollLink>
            
        </section>
        
    )
}

export default About
