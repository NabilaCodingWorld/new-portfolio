import React, { useEffect, useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { FaLocationArrow, FaMailBulk, FaPhone } from 'react-icons/fa';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Contact = () => {

    const form = useRef();
    const [formData, setFormData] = useState({
        to_name: '',
        from_name: '',
        message: '',
    });
    const [message, setMessage] = useState(null);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm('service_sbkbx1l', 'template_0unpguy', form.current, 'kZ-0wIXZ_sZUqSWeV')
            .then((result) => {
                console.log(result.text);
                setMessage('Message sent successfully.');
                setFormData({
                    to_name: '',
                    from_name: '',
                    message: '',
                });
            })
            .catch((error) => {
                console.error(error.text);
                setMessage('An error occurred while sending the message.');
            });
    };


    useEffect(() => {
        AOS.init({
            offset: 200,
            easing: 'ease-in-sine',
            duration: 600
        });
    }, []);

    return (
        <div>
            <div className='text-center mt-40'>
                <p className='text-4xl mb-3 text-white'>Contact <span className='text'>Me</span> </p> <br />

            </div>

            <div  data-aos="fade-right" data-aos-offset="200" data-aos-duration="1000" className='grid md:grid-cols-2 gap-10 justify-center items-center mt-10'>
                <div>
                    <div className='flex justify-center items-center gap-5'>
                        <FaPhone className='h-6 w-6 '></FaPhone>

                        <div className='mb-5'>
                            <p className='text-2xl font-bold'>Contact Me</p>
                            <p>+8801815979584</p>
                        </div>
                    </div>

                    <div className='flex justify-center items-center gap-5 md:ml-20 ml-10'>
                        <FaMailBulk className='h-6 w-6 '></FaMailBulk>

                        <div className='mb-5'>
                            <p className='text-2xl font-bold'>Email</p>
                            <p>rahamusfiqnabila@gmail.com</p>
                        </div>
                    </div>


                    <div className='flex justify-center items-center gap-5'>
                        <FaLocationArrow className='h-6 w-6 '></FaLocationArrow >

                        <div className='mb-5'>
                            <p className='text-2xl font-bold'>Location</p>
                            <p>Rangpur, Bangladesh</p>
                        </div>
                    </div>
                </div>

            

                <form  data-aos="fade-left" data-aos-offset="200" data-aos-duration="1000" ref={form} onSubmit={sendEmail}>
                    <div className="md:max-w-md md:w-[1000px] bg-white bg-opacity-10 md:p-10 p-3  text-black mx-auto rounded-xl">
                        <label className="block font-bold mb-2 text-white text-xl" htmlFor="to_name">
                            Name
                        </label>
                        <input
                            className="appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
                            id="to_name"
                            type="text"
                            name="to_name"
                            placeholder="Enter your name"
                            value={formData.to_name}
                            onChange={handleChange}

                        />

                        <label className="block font-bold mt-4 text-white text-xl" htmlFor="from_name">
                            Email
                        </label>
                        <input
                            className="appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
                            id="from_name"
                            type="email"
                            name="from_name"
                            placeholder="Enter your email"
                            value={formData.from_name}
                            onChange={handleChange}

                        />

                        <label className="block font-bold mt-4 text-white text-xl" htmlFor="message">
                            Message
                        </label>
                        <textarea
                            className="appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
                            id="message"
                            name="message"
                            placeholder="Enter your message"
                            rows="5"
                            value={formData.message}
                            onChange={handleChange}

                        />

                        <input
                            type="submit"
                            value="Send"
                            className='w-full btn btn-warning my-2'
                        />
                    </div>
                </form>
            </div>

            {message && <p className="text-white text-center text-xl mt-4">{message}</p>}

            <br /> <br />

        </div>
    );
};

export default Contact;