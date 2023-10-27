import React, { useEffect } from 'react';
import giffi from '../../assets/giphy.gif'
import AOS from 'aos';
import 'aos/dist/aos.css';

const Services = () => {

    useEffect(() => {
        AOS.init({
            offset: 200,
            easing: 'ease-in-sine',
            duration: 600
        });
    }, []);

    return (
        <div>
            <p className='text-4xl text-center mt-40 mb-10'>About <span className='text'>Me</span> </p>

            <div className='grid md:grid-cols-2 gap-10 md:mx-20 mx-5 mb-10 justify-center items-center'>
                <div data-aos="fade-right" data-aos-offset="200" data-aos-duration="1000" className='border-2 md:p-10 p-2 rounded-2xl' >
                    <p className='text-xl mb-3'>Name: Raha Musfiq Nabila </p>
                    <p className='text-xl mb-3'>Qualificatin: B.Sc in C.S.E from Bangladesg Army University</p>
                    <p className='text-xl mb-3'>Age: 26</p>
                    <p className='text-xl mb-3'>Phone: +8801815979584</p>
                    <p className='text-xl mb-3'>Address: Rangpur, Bangladesh</p>
                    <p className='text-xl mb-3'>Language: Bangla, Hindi, English </p>
                    <p className='text-xl mb-3'>Email: rahamusfiqnabila@gmail.com</p>

                </div>
                <img  data-aos="fade-left" data-aos-offset="200" data-aos-duration="1000" src={giffi} alt="" />
            </div>
        </div>
    );
};

export default Services;