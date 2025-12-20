import React from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';

const Contact = () => {

    const handleSubmit = (event) => {
        event.preventDefault();

        const formData = new FormData(event.target);

        // أرسل البيانات إلى Getform
        axios.post('https://getform.io/f/akkeyrda', formData)
            .then(() => {
                Swal.fire({
                    icon: 'success',
                    iconColor: '#0DFC4B',
                    title: 'Thank you for contacting me. It will be a pleasure to work with you!',
                    showConfirmButton: true,
                    background: '#191a19',
                    color: '#fff',
                    confirmButtonColor: '#117911',
                    backdrop: `rgba(54, 55, 54, 0.4)`
                });
                event.target.reset(); // إعادة ضبط الفورم بعد الإرسال
            })
            .catch(error => {
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Something went wrong! Please try again later.',
                    background: '#191a19',
                    color: '#fff',
                    confirmButtonColor: '#117911',
                });
                console.error(error);
            });
    };

    return (
        <section name='Contact' className='relative w-full h-auto p-8 text-white'>
            <div className='max-w-screen-lg mx-auto flex flex-col justify-center h-full'>

                {/* Header */}
                <div className='pb-8 text-center'>
                    <h2 className='text-4xl font-bold inline border-b-4 border-primary-color/40 sm:text-5xl'>
                        Contact
                    </h2>
                    <p className='py-4 text-gray-300'>Get in touch with me</p>
                </div>

                {/* Contact Info */}
                <div className='flex justify-center mb-8'>
                    <a 
                        href='mailto:nadakenawy298@gmail.com'
                        className='text-primary-color font-semibold text-lg hover:underline'
                    >
                        nadakenawy298@gmail.com
                    </a>
                </div>

                {/* Contact Form */}
                <div className='flex justify-center'>
                    <form 
                        onSubmit={handleSubmit}
                        className='flex flex-col w-full max-w-md space-y-4'
                    >
                        <input
                            type='text'
                            name='name'
                            placeholder='Your Name'
                            required
                            className='p-3 rounded-md bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-primary-color'
                        />
                        <input
                            type='email'
                            name='email'
                            placeholder='Your Email'
                            required
                            className='p-3 rounded-md bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-primary-color'
                        />
                        <textarea
                            name='message'
                            rows='6'
                            placeholder='Your Message'
                            required
                            className='p-3 rounded-md bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-primary-color resize-none'
                        ></textarea>
                        <button
                            type='submit'
                            className='bg-gradient-to-r from-primary-color to-green-400 text-black font-semibold py-3 rounded-md hover:scale-105 transition-transform duration-300'
                        >
                            Send Message
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Contact;
