import React from 'react';
import giffi1 from '../../assets/website-development.webp'
import giffi2 from '../../assets/giphy.gif'
import giffi3 from '../../assets/giphy1.gif'
import giffi4 from '../../assets/161278962920049071971149580094.gif'

const About = () => {
    return (
        <div className=' my-40'>
           <p className='text-4xl text-center mb-10'>My Specializations</p>


            <div className='grid md:grid-cols-2  gap-5 md:mx-20 mx-5'>

                <div  className='flex justify-center gap-5 border-2 rounded-2xl p-5 bg-white bg-opacity-10'>
                    <div>
                    <p className='text-xl font-bold text-center mb-5'>Full Stack Web Development</p>
                    <p>Armed with a robust foundation in the MERN stack (MongoDB, Express.js, React, Node.js), I specialize in full-stack web development. My expertise spans from creating engaging user interfaces to crafting robust backend systems. I'm passionate about delivering seamless and dynamic web experiences.</p>
                    </div>

                    
                    <img className='w-40' src={giffi1} alt="" />
                </div>

                <div  className='flex justify-center gap-5 border-2 rounded-2xl p-5 bg-white bg-opacity-10'>
                    <div>
                    <p className='text-xl font-bold text-center mb-5'>Responsive Design</p>
                    <p>As a MERN developer, I'm dedicated to creating web experiences that adapt seamlessly across devices and screen sizes. Responsive design is not just a feature, it's a philosophy that I embed into every project I undertake.</p>
                    </div>

                    
                    <img className='w-40' src={giffi2} alt="" />
                </div>

                <div  className='flex justify-center gap-5 border-2 rounded-2xl p-5 bg-white bg-opacity-10'>
                    <div>
                    <p className='text-xl font-bold text-center mb-5'>Web Security</p>
                    <p>As a MERN developer, I prioritize the security of web applications as an integral part of the development process. Web security isn't an afterthought for me, it's a fundamental principle that guides every line of code I write.</p>
                    </div>

                    
                    <img className='w-40' src={giffi3} alt="" />
                </div>

                <div  className='flex justify-center gap-5 border-2 rounded-2xl p-5 bg-white bg-opacity-10'>
                    <div>
                    <p className='text-xl font-bold text-center mb-5'>Front-End Web Development</p>
                    <p>Front-end development involves using HTML, CSS, and JavaScript to create the user interface and experience of a website or application. It includes designing and implementing the visual elements, layout, and interactivity that users interact with directly. Front-end developers may also utilize frameworks and libraries to streamline development and ensure responsiveness across various devices.</p>
                    </div>

                    
                    <img className='w-24' src={giffi4} alt="" />
                </div>

            </div>

        </div>
    );
};

export default About;