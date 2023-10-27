import React, { useEffect, useState } from 'react';
import './Projects.css'
import project1 from '../../assets/Slide1.jpg'
import project2 from '../../assets/Presentation1.jpg'
import project3 from '../../assets/thesis.jpg'
import project4 from '../../assets/restaurent.png'
import AOS from 'aos';
import 'aos/dist/aos.css';


import Modal from 'react-modal';


const Projects = () => {

    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    useEffect(() => {
        AOS.init({
            offset: 200,
            easing: 'ease-in-sine',
            duration: 600
        });
    }, []);


    return (
        <div className=' overflow-hidden md:mx-20 mx-5'>

            <p className='text-4xl text-center mb-10'>Featured <span className='text'>Projects</span> </p>

            <div className='grid md:grid-cols-2 gap-10'>


                {/* Poetry of introvert */}
                <div data-aos="fade-right" data-aos-offset="200" data-aos-duration="1000" >
                    <div className='main_container'>
                        <img src={project1} className='image' alt="" />

                        <div className='overlay'>
                            <div className='lyric'>

                                <div className='my-10'>
                                    <p className='text'>HTML, TAILWIND, DAISY UI, MONGODB, NODE JS, EXPRESS JS, REACT JS</p>
                                </div>


                                <div className='mt-5 md:text-xl text-blue-700'>
                                    <a className='mr-5' target="_blank" href="https://traveljournal-8d826.web.app/"> Live Link </a>

                                    <a target="_blank" className='mr-5' href="https://github.com/NabilaCodingWorld/travel-journal">GitHub Client </a>

                                    <a target="_blank" className='mr-5' href="https://github.com/NabilaCodingWorld/travel-journal-server">GitHub Server </a>

                                    <button onClick={openModal}>About Details</button>
                                </div>

                            </div>
                        </div>

                    </div>

                    {/* Modal */}
                    <Modal
                        isOpen={isModalOpen}
                        onRequestClose={closeModal}
                        contentLabel="About Details Modal"


                        style={{
                            overlay: {
                                backgroundColor: 'rgba(0, 0, 0, 0.5)',
                            },
                            content: {
                                width: '80%',
                                height: '500px', // Adjust the width as needed
                                margin: 'auto',
                                padding: '50px',
                                border: 'none', // Remove border
                                borderRadius: '8px',
                                boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
                            },
                        }}

                    >
                        <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2" onClick={closeModal}>✕</button>

                        <h3 className="font-bold text-center md:text-3xl mb-5"> More Details </h3>

                        <div>
                            <p>Travel Journal – 09/18/2023 to 09/24/2023</p>
                            <p className='text-xl font-bold my-5'>This is a Travel Booking Website: </p>
                            <div> • In this project, users can learn about tours in the country,
                                who the tour guide is, get descriptions of the places they
                                will visit. <br />
                                • Users can also book tours and make payments through the
                                website, as we offer a payment option. <br />
                                • We operate three admin panels: one for regular users to
                                view and manage their selected tours, one for tour guides
                                to add tours, and one main admin panel overseeing the
                                entire website.
                            </div>
                        </div>


                    </Modal>

                </div>

                {/* Thesis Paper Shareing */}
                <div data-aos="fade-left" data-aos-offset="200" data-aos-duration="1000" >
                    <div className='main_container'>
                        <img src={project3} className='image' alt="" />

                        <div className='overlay'>
                            <div className='lyric'>

                                <div className='my-10'>
                                    <p className='text'>HTML, TAILWIND, DAISY UI, MONGODB, NODE JS, EXPRESS JS, REACT JS</p>
                                </div>


                                <div className='mt-5 md:text-xl text-blue-700'>
                                    <a className='mr-5' target="_blank" href="https://thesis-paper-sharing-project.web.app/"> Live Link </a>

                                    <a target="_blank" className='mr-5' href="https://github.com/NabilaCodingWorld/thesis-paper-sharing-project">GitHub Client </a>

                                    <a target="_blank" className='mr-5' href="https://github.com/NabilaCodingWorld/thesis-paper-sharing-project-server">GitHub Server </a>

                                    <button onClick={openModal}>About Details</button>
                                </div>

                            </div>
                        </div>

                    </div>

                    {/* Modal */}
                    <Modal
                        isOpen={isModalOpen}
                        onRequestClose={closeModal}
                        contentLabel="About Details Modal"


                        style={{
                            overlay: {
                                backgroundColor: 'rgba(0, 0, 0, 0.5)',
                            },
                            content: {
                                width: '80%',
                                height: '500px', // Adjust the width as needed
                                margin: 'auto',
                                padding: '50px',
                                border: 'none', // Remove border
                                borderRadius: '8px',
                                boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
                            },
                        }}

                    >
                        <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2" onClick={closeModal}>✕</button>

                        <h3 className="font-bold text-center md:text-3xl mb-5"> More Details </h3>

                        <div>
                            <p>Share-Thesis-Paper - 10/03/2023 to 10/05/2023</p>
                            <p className='text-xl font-bold my-5'>This is a File Sharing Website </p>
                            <div> • This is a Thesis Paper Sharing website where users can
                                share their thesis papers, and others can view and
                                download them. <br />
                                • Users can also discover thesis ideas through this website. <br />
                                • To share their papers, users must log in, and there is an
                                admin panel for management.
                            </div>
                        </div>


                    </Modal>

                </div>

                {/* Travel Journal */}
                <div data-aos="fade-right" data-aos-offset="200" data-aos-duration="1000" >
                    <div className='main_container'>
                        <img src={project2} className='image' alt="" />

                        <div className='overlay'>
                            <div className='lyric'>

                                <div className='my-10'>
                                    <p className='text'>HTML, TAILWIND, DAISY UI, MONGODB, NODE JS, EXPRESS JS, REACT JS</p>
                                </div>


                                <div className='mt-5 md:text-xl text-blue-700'>
                                    <a className='mr-5' target="_blank" href="https://poetry-of-introversion-d1ccb.web.app/"> Live Link </a>

                                    <a target="_blank" className='mr-5' href="https://github.com/NabilaCodingWorld/poetry-of-introversion">GitHub Client </a>

                                    <a target="_blank" className='mr-5' href="https://github.com/NabilaCodingWorld/poetry-of-introversion-server">GitHub Server </a>

                                    <button onClick={openModal}>About Details</button>
                                </div>

                            </div>
                        </div>

                    </div>

                    {/* Modal */}
                    <Modal
                        isOpen={isModalOpen}
                        onRequestClose={closeModal}
                        contentLabel="About Details Modal"


                        style={{
                            overlay: {
                                backgroundColor: 'rgba(0, 0, 0, 0.5)',
                            },
                            content: {
                                width: '80%',
                                height: '500px', // Adjust the width as needed
                                margin: 'auto',
                                padding: '50px',
                                border: 'none', // Remove border
                                borderRadius: '8px',
                                boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
                            },
                        }}

                    >
                        <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2" onClick={closeModal}>✕</button>

                        <h3 className="font-bold text-center md:text-3xl mb-5"> More Details </h3>

                        <div>
                            <p>Poetry-Of-Introversion - 09/25/2023 to 10/2/2023</p>
                            <p className='text-xl font-bold my-5'>This is a Personal Blog Website </p>
                            <div> • This is my personal website where I share my daily routine
                                and explain all of my work. <br />
                                • I also provide reviews for the best movies and novels I
                                watch and read. <br />
                                • Additionally, there is an admin panel where I manage and
                                publish all of my written content.
                            </div>
                        </div>


                    </Modal>

                </div>


                
                {/* Restaurent  Website */}
                <div data-aos="fade-left" data-aos-offset="200" data-aos-duration="1000" >
                    <div className='main_container'>
                        <img src={project4} className='image ' alt="" />

                        <div className='overlay'>
                            <div className='lyric'>

                                <div className='my-10'>
                                    <p className='text'>HTML, TAILWIND, DAISY UI, MONGODB, NODE JS, EXPRESS JS, REACT JS</p>
                                </div>


                                <div className='mt-5 md:text-xl text-blue-700'>
                                    <a className='mr-5' target="_blank" href="https://restaurent-food.web.app/"> Live Link </a>

                                    <a target="_blank" className='mr-5' href="https://github.com/NabilaCodingWorld/restaurent-food-client">GitHub Client </a>

                                    <a target="_blank" className='mr-5' href="https://github.com/NabilaCodingWorld/restaurent-food-server">GitHub Server </a>

                                    <button onClick={openModal}>About Details</button>
                                </div>

                            </div>
                        </div>

                    </div>

                    {/* Modal */}
                    <Modal
                        isOpen={isModalOpen}
                        onRequestClose={closeModal}
                        contentLabel="About Details Modal"


                        style={{
                            overlay: {
                                backgroundColor: 'rgba(0, 0, 0, 0.5)',
                            },
                            content: {
                                width: '80%',
                                height: '500px', // Adjust the width as needed
                                margin: 'auto',
                                padding: '50px',
                                border: 'none', // Remove border
                                borderRadius: '8px',
                                boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
                            },
                        }}

                    >
                        <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2" onClick={closeModal}>✕</button>

                        <h3 className="font-bold text-center md:text-3xl mb-5"> More Details </h3>

                        <div>
                            <p>Foodie - 10/13/2023 to 10/18/2023</p>
                            <p className='text-xl font-bold my-5'>This is a Restaurent Website </p>
                            <div> • Place a strong emphasis on presenting your menu in an appealing and informative way. Include high-quality images of your dishes, detailed descriptions, and pricing. Consider categorizing your menu items (appetizers, entrees, desserts) to make it easy for visitors to explore your offerings. You can also create downloadable PDF menus for users who prefer a printed version. <br />

                                • Make it simple for visitors to find your restaurant's contact information, including your phone number, address, and email. Clearly state your hours of operation and any special days when you might be closed. Provide a reservation system for diners who want to book a table in advance. This can help streamline the reservation process and improve the customer experience. <br />

                                •  Organize your recipes into categories, such as appetizers, main courses, desserts, and beverages. This makes it easier for visitors to browse and find the type of recipes they're interested in.
                            </div>
                        </div>


                    </Modal>

                </div>

            </div>
        </div>
    );
};

export default Projects;
