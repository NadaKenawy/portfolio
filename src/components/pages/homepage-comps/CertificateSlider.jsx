import React from 'react';
import { Link as ScrollLink } from 'react-scroll';

const CertificateSlider = () => {

    return (
        <section name='Education' className='relative w-full h-auto md:h-screen text-white'>
            <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
                
                {/* Header */}
                <div className='mb-6'>
                    <h2 className='text-4xl font-bold inline border-b-4 border-primary-color/40 sm:text-5xl pb-1'>
                        Education & Experiences
                    </h2>
                    <p className='py-4 text-gray-300'>
                        Check out some of my educational background and training experiences.
                    </p>
                </div>

                {/* Education / Experiences List */}
                <div className='space-y-6'>
                    
                    <div>
                        <h3 className='text-2xl font-semibold'>Faculty of Computers and Information, Suez Canal University</h3>
                        <p className='text-lg text-gray-300'>Bachelor's degree in Computer Science – July 2025 (Excellent Grade with Honors)</p>
                    </div>

                    <div>
                        <h3 className='text-2xl font-semibold'>Digital Egypt Builders Initiative - Mobile Application Track</h3>
                        <p className='text-lg text-gray-300'>2024 – Advanced training focusing on Flutter, Firebase, API handling, and Bloc state management</p>
                    </div>

                    <div>
                        <h3 className='text-2xl font-semibold'>Flutter Advanced Course: Bloc and MVVM Pattern – Udemy</h3>
                        <p className='text-lg text-gray-300'>2024 – Training in Bloc state management, MVVM pattern, Cubits, and clean architecture</p>
                    </div>

                    <div>
                        <h3 className='text-2xl font-semibold'>Complete Flutter & Dart Development Course – Udemy</h3>
                        <p className='text-lg text-gray-300'>2024 – Comprehensive Flutter & Dart training from beginner to advanced, focusing on clean code and UI building</p>
                    </div>

                    <div>
                        <h3 className='text-2xl font-semibold'>ITI Ismailia - UI/UX Track</h3>
                        <p className='text-lg text-gray-300'>2024 – Training in UI/UX design with Figma to create user-friendly and visually appealing applications</p>
                    </div>
                </div>

            </div>

            {/* Scroll Down Arrow */}
            <ScrollLink to="Contact" smooth duration={500} className='absolute bottom-2 -left-full md:left-1/2 md:-translate-x-1/2 cursor-pointer hover:text-primary-color'>
                <i className='bx bx-chevron-down text-7xl text-gray-400 animate-bounce hover:text-primary-color'></i>
            </ScrollLink>
        </section>
    );
};

export default CertificateSlider;
