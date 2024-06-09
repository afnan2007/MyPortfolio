import React from 'react';

import {TypeAnimation} from 'react-type-animation'

import {motion} from 'framer-motion'

import {fadeIn} from '../variants'

import { Link } from 'react-scroll';

const Header = () => {
  return <header className='py-8'> 
    <div className='container mx-auto'>
    <motion.div 
     variants={fadeIn('up', 0.3)} 
     initial='hidden' 
     whileInView={'show'} 
     viewport={{once: false, amount: 0.7}} 
    className='flex justify-between items-center'> 
    <TypeAnimation sequence={['Afnan Ahmed', 2000, 'My Portfolio', 2000]}
            speed={50}
            className='text-accent'
            wrapper='span'
            repeat={Infinity}
            />

        <Link 
        to='contact' 
        activeClass='active'
        smooth={true}
        spy={true}>
            <button className='btn btn-sm'>Hire me</button>
        </Link>
      </motion.div>
    </div>
  </header>
};

export default Header;
