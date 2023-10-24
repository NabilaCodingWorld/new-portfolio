import React, { useEffect, useRef } from 'react';
import DB from '../../assets/IMG-20200208-WA0038.jpg';
import Typed from 'typed.js';
import { FaLinkedin, FaGithub, FaFacebook } from 'react-icons/fa';

const Banner = () => {

    const typedRef = useRef(null);

    useEffect(() => {
        const options = {
            strings: ['<i>Frontend Developer.</i> ', 'MERN Stack Web Developer.', 'Web Designer'],
            typeSpeed: 50,
        };


        const typed = new Typed(typedRef.current, options);

        return () => {
            typed.destroy();
        };
    }, []);

    return (
        <div className='md:mx-20 mx-5 grid md:grid-cols-2 gap-10 items-center justify-center'>
            <div className='border-2 text-center p-5 w-96 rounded-t-2xl'>
                <p className='text-2xl font-bold mb-5'>Raha Musfiq Nabila <br />

                    <span className='md:text-xl' ref={typedRef} />

                </p>

                <center> <img className='h-60' src={DB} alt="" /></center>

                <p className='text-xl font-bold my-5'>rahamusfiqnabia@gmail.com</p>
                <p className='font-bold'>Rangpur, Bangladesh</p>


                <div className='flex gap-5 justify-center my-8'>

                    <a href="https://www.linkedin.com/in/nabila63/"><FaLinkedin className='h-8 w-8 text-blue-500' /></a>

                    <a href="https://github.com/NabilaCodingWorld"><FaGithub className='h-8 w-8 text-green-500' /></a>

                    <FaFacebook className='h-8 w-8 text-indigo-500' />

                </div>

                <button className="btn btn-outline btn-warning">Download Resume</button>

            </div>

            <div className='md:text-xl'>
                <p className='mb-5'>I'm thrilled to share that I work as a front-end web developer! In my role, I have the opportunity to create and implement the visual aspects of websites or web applications. I work with HTML, CSS, and JavaScript to build user interfaces that are not only visually appealing but also provide a seamless user experience."

                    This revised version maintains the enthusiasm and clarifies the role and responsibilities of a front-end web developer.</p>

                <p>My name is Raha Musfiq Nabila . I'm from Rangpur, Bangladesh. I completed my B.Sc in Computer Science and Engineering from Bangladesh Army University of Science and Technology. </p>
            </div>
        </div>
    );
};

export default Banner;
