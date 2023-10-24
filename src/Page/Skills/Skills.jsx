import React from 'react';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';
import pic1 from '../../assets/download.png'
import pic2 from '../../assets/download.jfif'
import pic3 from '../../assets/download (1).png'
import pic4 from '../../assets/download (2).png'
import pic5 from '../../assets/download (3).png'
import pic6 from '../../assets/download (1).jfif'
import pic7 from '../../assets/download (2).jfif'
import pic8 from '../../assets/download (3).jfif'
import pic9 from '../../assets/download (4).png'
import pic10 from '../../assets/Rlogical-Blog-Images-thumbnail.webp'
import pic11 from '../../assets/png-clipart-firebase-cloud-messaging-google-developers-software-development-kit-google-angle-triangle-thumbnail.png'
import pic12 from '../../assets/download (4).jfif'

const Skills = () => {
    const [ref, inView] = useInView();
    const shouldAnimate = inView;

    return (
        <div className='my-40 '>
            <p className='text-center text-4xl mb-10'>My Skills</p>

            <div className='md:mx-20 mx-5 flex flex-wrap gap-10' ref={ref}>

                <div className='hover:text-yellow-400 duration-700 hover:translate-y-2'>
                    <div className='border-2 md:p-5 p-1 rounded-2xl'>
                        <img className='rounded-xl h-28 w-24' src={pic1} alt="" />

                        <div className='text-center mt-5 text-2xl'>
                            {shouldAnimate && (
                                <CountUp start={10} end={90} duration={2.75} />
                            )}%
                        </div>

                    </div>
                    <p className='text-xl mt-3 text-center'>HTML</p>
                </div>

                <div className='hover:text-yellow-400 duration-700 hover:translate-y-2'>
                    <div className='border-2 md:p-5 p-1 rounded-2xl'>
                        <img className='rounded-xl h-28 w-24' src={pic2} alt="" />

                        <div className='text-center mt-5 text-2xl'>
                            {shouldAnimate && (
                                <CountUp start={10} end={80} duration={2.75} />
                            )}%
                        </div>

                    </div>
                    <p className='text-xl mt-3 text-center'>CSS</p>
                </div>

                <div className='hover:text-yellow-400 duration-700 hover:translate-y-2'>
                    <div className='border-2 md:p-5 p-1 rounded-2xl'>
                        <img className='rounded-xl h-28 w-24' src={pic3} alt="" />

                        <div className='text-center mt-5 text-2xl'>
                            {shouldAnimate && (
                                <CountUp start={10} end={85} duration={2.75} />
                            )}%
                        </div>

                    </div>
                    <p className='text-xl mt-3 text-center'>Bootstrap</p>
                </div>

                <div className='hover:text-yellow-400 duration-700 hover:translate-y-2'>
                    <div className='border-2 md:p-5 p-1 rounded-2xl'>
                        <img className='rounded-xl h-28 w-24' src={pic4} alt="" />

                        <div className='text-center mt-5 text-2xl'>
                            {shouldAnimate && (
                                <CountUp start={10} end={95} duration={2.75} />
                            )}%
                        </div>

                    </div>
                    <p className='text-xl mt-3 text-center'>Tailwind</p>
                </div>

                <div className='hover:text-yellow-400 duration-700 hover:translate-y-2'>
                    <div className='border-2 md:p-5 p-1 rounded-2xl'>
                        <img className='rounded-xl h-28 w-24' src={pic5} alt="" />

                        <div className='text-center mt-5 text-2xl'>
                            {shouldAnimate && (
                                <CountUp start={10} end={84} duration={2.75} />
                            )}%
                        </div>

                    </div>
                    <p className='text-xl mt-3 text-center'>JavaScript</p>
                </div>

                <div className='hover:text-yellow-400 duration-700 hover:translate-y-2'>
                    <div className='border-2 md:p-5 p-1 rounded-2xl'>
                        <img className='rounded-xl h-28 w-24' src={pic6} alt="" />

                        <div className='text-center mt-5 text-2xl'>
                            {shouldAnimate && (
                                <CountUp start={10} end={96} duration={2.75} />
                            )}%
                        </div>

                    </div>
                    <p className='text-xl mt-3 text-center'>React</p>
                </div>

                <div className='hover:text-yellow-400 duration-700 hover:translate-y-2'>
                    <div className='border-2 md:p-5 p-1 rounded-2xl'>
                        <img className='rounded-xl h-28 w-24' src={pic7} alt="" />

                        <div className='text-center mt-5 text-2xl'>
                            {shouldAnimate && (
                                <CountUp start={10} end={81} duration={2.75} />
                            )}%
                        </div>

                    </div>
                    <p className='text-xl mt-3 text-center'>MongoDB</p>
                </div>

                <div className='hover:text-yellow-400 duration-700 hover:translate-y-2'>
                    <div className='border-2 md:p-5 p-1 rounded-2xl'>
                        <img className='rounded-xl h-28 w-24' src={pic8} alt="" />

                        <div className='text-center mt-5 text-2xl'>
                            {shouldAnimate && (
                                <CountUp start={10} end={70} duration={2.75} />
                            )}%
                        </div>

                    </div>
                    <p className='text-xl mt-3 text-center'>NodeJS</p>
                </div>

                <div className='hover:text-yellow-400 duration-700 hover:translate-y-2'>
                    <div className='border-2 md:p-5 p-1 rounded-2xl'>
                        <img className='rounded-xl h-28 w-24' src={pic9} alt="" />

                        <div className='text-center mt-5 text-2xl'>
                            {shouldAnimate && (
                                <CountUp start={10} end={60} duration={2.75} />
                            )}%
                        </div>

                    </div>
                    <p className='text-xl mt-3 text-center'>Express JS</p>
                </div>

                <div className='hover:text-yellow-400 duration-700 hover:translate-y-2'>
                    <div className='border-2 md:p-5 p-1 rounded-2xl'>
                        <img className='rounded-xl h-28 w-24' src={pic10} alt="" />

                        <div className='text-center mt-5 text-2xl'>
                            {shouldAnimate && (
                                <CountUp start={10} end={50} duration={2.75} />
                            )}%
                        </div>

                    </div>
                    <p className='text-xl mt-3 text-center'>Next Js</p>
                </div>

                <div className='hover:text-yellow-400 duration-700 hover:translate-y-2'>
                    <div className='border-2 md:p-5 p-1 rounded-2xl'>
                        <img className='rounded-xl h-28 w-24' src={pic11} alt="" />

                        <div className='text-center mt-5 text-2xl'>
                            {shouldAnimate && (
                                <CountUp start={10} end={70} duration={2.75} />
                            )}%
                        </div>

                    </div>
                    <p className='text-xl mt-3 text-center'>Firebase</p>
                </div>

                <div className='hover:text-yellow-400 duration-700 hover:translate-y-2'>
                    <div className='border-2 md:p-5 p-1 rounded-2xl'>
                        <img className='rounded-xl h-28 w-24' src={pic12} alt="" />

                        <div className='text-center mt-5 text-2xl'>
                            {shouldAnimate && (
                                <CountUp start={10} end={60} duration={2.75} />
                            )}%
                        </div>

                    </div>
                    <p className='text-xl mt-3 text-center'>GitHub</p>
                </div>

            </div>
        </div>
    );
};

export default Skills;
