import React from 'react';

//images
import Image from '../assets/profile.png';


//icons

import {FaGithub} from 'react-icons/fa';

import {TypeAnimation} from 'react-type-animation'

import {motion} from 'framer-motion'

import {fadeIn} from '../variants'

import { Link } from 'react-scroll';

const Banner = () => {
  return (
   <section className='min-h-[85vh] lg:min-h-[78vh] flex items-center' id='home'>
      <div className='container mx-auto'>
        <div className='flex flex-col gap-y-10 lg:flex-row lg:items-center lg:gap-x-12' >
        {}
        <div className='flex-1 text-center font-secondary lg:text-left'>
          <motion.h1 
          variants={fadeIn('up', 0.3)} 
          initial='hidden' 
          whileInView={'show'} 
          viewport={{once: false, amount: 0.7}} 
          className='text-[55px] font-bold leading-[0.8] lg:text-[90px]'>
          AFNAN <span>AHMED</span>
          </motion.h1>
          <motion.div 
            variants={fadeIn('up', 0.4)} 
            initial='hidden' 
            whileInView={'show'} 
            viewport={{once: false, amount: 0.7}} 
            className='mb-6  text-[36px] lg:text-[60px] font-secondary font-semibold uppercase leading-[1]'>
            <span className='text-white mr-4'>I am a</span>
            <TypeAnimation sequence={[
              'Student',
              2000,
              'Developer',
              2000,
              'Thinker',
              2000,
            ]}
            speed={50}
            className='text-accent'
            wrapper='span'
            repeat={Infinity}
            />
          </motion.div>
            <motion.p 
            variants={fadeIn('up', 0.5)} 
            initial='hidden' 
            whileInView={'show'} 
            viewport={{once: false, amount: 0.7}} 

            className='mb-8 max-w-lg mx-auto lg:mx-0'>
            Hi! I am currently a student at the Morris County Vocational School of Technology in the Computer Information Sciences Academy! Some of my hobbies are playing basketball, watching movies, and creating coding projects. My passion for computer science started when I was in middle school, watching my brother create interesting and cool coding products. From that point to now, I have created multiple projects and am gaining more knowledge everyday to improve myself as a software developer. 
            </motion.p>
            <motion.div 
            variants={fadeIn('up', 0.6)} 
            initial='hidden' 
            whileInView={'show'} 
            viewport={{once: false, amount: 0.7}} 
            className='flex max-w-max gap-x-6 items-center mb-12 mx-auto lg:mx-0'>
             <Link 
                to='contact' 
                activeClass='active'
                smooth={true}
                spy={true}>
                  <button className='btn btn-lg'>Contact me
              </button>
            </Link>
              <a href='#' className='text-gradient btn-link'>My Portfolio</a>
            </motion.div>
            {}
             <motion.div 
             variants={fadeIn('up', 0.7)} 
             initial='hidden' 
             whileInView={'show'} 
             viewport={{once: false, amount: 0.7}} 
             className='flex text-[20px] gap-x-6 max-w-max mx-auto lg:mx-0'>
              <a href='https://github.com/afnan2007'>
                <FaGithub/>
              </a>
             </motion.div>
        </div>
        {}
        <motion.div 
        variants={fadeIn('down', 0.5)} 
        initial='hidden' 
        whileInView={'show'} 
        className='hidden lg:flex flex-1 max-w-[320-px] lg:max-w-[482px] mx-auto'>
          <img src={Image} alt=''/>
        </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
