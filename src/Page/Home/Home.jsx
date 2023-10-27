import React from 'react';
import { Link, Element } from 'react-scroll';
import { FaArrowUp } from 'react-icons/fa';
import Banner from '../Banner/Banner';
import About from '../About/About';
import Skills from '../Skills/Skills';
import Projects from '../Projects/Projects';
import Contacts from '../Contacts/Contacts';
import Services from '../Services/Services';

const Home = () => {
  // const [theme, setTheme] = React.useState('default');


  // const toggleTheme = () => {
  //   setTheme((prevTheme) => (prevTheme === 'default' ? 'dark' : 'default'));
  // };

  const allNavTabs = (
    <>
      <li>
        <Link to="home" smooth={true} duration={500} offset={-70}>
        <a className='hover:text-white'>Home</a>
        </Link>
      </li>
      <li>
        <Link to="about" smooth={true} duration={500} offset={-70}>
        <a className='hover:text-white'>Services</a>
         
        </Link>
      </li>
      <li>
        <Link to="skills" smooth={true} duration={500} offset={-70}>
        <a className='hover:text-white'> Skills</a>
         
        </Link>
      </li>
      <li>
        <Link to="projects" smooth={true} duration={500} offset={-70}>
        <a className='hover:text-white'>Projects</a>
          
        </Link>
      </li>
      <li>
        <Link to="services" smooth={true} duration={500} offset={-70}>
        <a className='hover:text-white'>About</a>
          
        </Link>
      </li>
      <li>
        <Link to="contact" smooth={true} duration={500} offset={-70}>
        <a className='hover:text-white'>Contact</a>
          
        </Link>
      </li>
    </>
  );

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };



  return (
    <div className='overflow-hidden'>
      <div 
        className='navbar font-bold text-white mb-20'
      >
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
              </svg>
            </label>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow rounded-box w-52">
              {allNavTabs}
            </ul>
          </div>
          <a className="btn btn-ghost normal-case text-xl">Raha Musfiq Nabila</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            {allNavTabs}
          </ul>
        </div>
      </div> 

      <Element name="home" className="element">
        <Banner></Banner>
      </Element>

      <Element name="about" className="element">
        <About></About>
      </Element>

      <Element name="skills" className="element">
        <Skills></Skills>
      </Element>

       <Element name="projects" className="element">
        <Projects></Projects>
      </Element>

       <Element name="services" className="element">
        <Services></Services>
      </Element>

      <Element name="contact" className="element">
        <Contacts></Contacts>
      </Element>


      <div className="md:ml-[1290px] ml-2 mt-10" style={{ position: 'fixed', top: '500px', width: '100%', zIndex: '1' }}> <br /> <br />
        {/* Your portfolio content */}
        <button onClick={scrollToTop}> <FaArrowUp className='w-10 h-5 text-yellow-700'></FaArrowUp> </button>
      </div> <br /> <br />


    </div>
  );
};

export default Home;

