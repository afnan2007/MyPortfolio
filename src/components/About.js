import React from 'react';

import CountUp from 'react-countup'

import {useInView} from 'react-intersection-observer'

import {motion} from 'framer-motion'

import {fadeIn} from '../variants'

import {BiHomeAlt, BiUser} from 'react-icons/bi';


import { Link } from 'react-scroll';

const About = () => {
  const [ref, inView] = useInView({
    threshold: 0.5,
  })
  return <section className='section' id='about'>
    <div className="container mx-auto">
      <div className='flex flex-col gap-y-10 lg:flex-row lg:items-center lg:gap-x-20 lg:gap-y-0 h-screen'>
      {}
      <motion.div 
      variants={fadeIn('right', 0.3)}
      initial="hidden"
      whileInView={"show"}
      viewport={{once:false, amount: 0.3}}
      className='flex-1 bg-about bg-contain bg-no-repeat h-[640px] mix-blend-lighten bg-top'></motion.div>
      {}
      <motion.div 
        variants={fadeIn('left', 0.5)}
        initial="hidden"
        whileInView={"show"}
        viewport={{once:false, amount: 0.3}}
        className='flex-1'>
        <h2 className='h2 text-accent'>About me.</h2>
        <h3 className='h3 mb-4'>Part-time Student & Part-time Coder</h3>
        <p className='mb-6'>
        Studying at MCST for 3 years now, I've gained lots of knowledge about the fundamentals of computer science. At my school, I have worked with multiple languages ranging from HTML, CSS, and JS to Java, C++, and Python. I am also a coding instructor at Code Ninjas in which I guide younger kids in their computer science journey by leading camps and assisting them in their personalized curriculum. In my free time and in school, I coded a multitude of projects in machine learning, React Native, and Godot games. 
        </p>
      {}
      <div className='flex gap-x-6 lg:gap-x-10 mb-12'>
      <div>
        <div className='text-[30px] font-tertiary text-gradient mb-2'>
          {<CountUp start={0} end={3} duration={10}/>}
        </div>
        <div className='font-primary text-sm tracking-[2px]'>
          Years of <br/> Experience
        </div>
      </div>
      <div>
        <div className='text-[30px] font-tertiary text-gradient mb-2'>
          {<CountUp start={0} end={20} duration={10}/>}
          +
        </div>
        <div className='font-primary text-sm tracking-[2px]'>
          Projects <br/> Completed
        </div>
      </div>
      </div>
      <div className='flex gap-x-8 items-center'>
      <Link 
        to='contact' 
        activeClass='active'
        smooth={true}
        spy={true}>
           <button className='btn btn-lg'>Contact me
      </button>
      </Link>
      <Link 
        to='home' 
        activeClass='active'
        smooth={true}
        spy={true}
        offset={-200}
        className='text-gradient btn-link'>
           My Portfolio
        </Link>
      </div>
      
      </motion.div>

      </div>
    </div>
    </section>;
};

export default About;
