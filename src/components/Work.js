import React from 'react';

import {} from 'framer-motion'

import {fadeIn} from '../variants'

import {motion} from 'framer-motion'

import Img1 from '../assets/img1.png';
import Img2 from '../assets/Img2.png';
import Img3 from '../assets/Img3.png';
const Work = () => {
  return (
  <section className='section' id='work'>
    <div className="container mx-auto">
        <div className='flex flex-col lg:flex-row gap-x-10'>
          <motion.div 
          variants={fadeIn('right', 0.3)}
          initial="hidden"
          whileInView={"show"}
          viewport={{once:false, amount: 0.3}}
          className='flex-1 flex flex-col  gap-y-12  mb-10 lg:mb-0'>
            {}
            <div>
              <h2 className='h2 leading-tight text-accent'>My Latest Work.</h2>
              <p className='max-w-sm mb-12'>
              My work reflects my interest in the diverse aspects of computer science and reflects my ability to learn and adapt. Some of my latest works include an NBA match predictor, a 2D Godot game, and an NJ tourist app!
              </p>
              <a href='https://github.com/afnan2007'> <button className='btn btn-sm'>View all projects</button></a>
            </div>
            {} 

            <a href='https://github.com/afnan2007/NBAPredictor'>
              <div className='group relative overflow-hidden border-2 border-white/50 rounded-xl'>
              {}
              <div  className='group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300'></div>
              {}
              <img  className='group-hover:scale-125 transition-all duration-500' src={Img1} alt=''/>
              {}
              <div className='absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50'>
                <span className='text-gradient'>AI/ML & Python</span>
              </div>
              {}
              <div className='absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50'>
                <span className='text-3xl text-white'>NBA Match Predictor</span>
              </div>
            </div>
            </a>
            
            
      
          </motion.div>
          <motion.div 
          variants={fadeIn('left', 0.3)}
          initial="hidden"
          whileInView={"show"}
          viewport={{once:false, amount: 0.3}}
          className='flex-1 flex flex-col gap-y-12'>
            {}

              <a href="https://drive.google.com/drive/folders/1dtTbB-Wyd-k_0PDqYloOji_nFeZhtMr2?usp=drive_link">
              <div className='group relative overflow-hidden border-2 border-white/50 rounded-xl'>
              {}
              <div  className='group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300'></div>
              {}
              <img  className='group-hover:scale-125 transition-all duration-500' src={Img2} alt=''/>
              {}
              <div className='absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50'>
                <span className='text-gradient'>Godot</span>
              </div>
              {}
              <div className='absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50'>
                <span className='text-3xl text-white'>2D Godot Game</span>
              </div>
            </div>
            </a>
            {}
            <a href="https://github.com/afnan2007/NJTSA-Coding">
            <div className='group relative overflow-hidden border-2 border-white/50 rounded-xl'>
              {}
              <div  className='group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300'></div>
              {}
              <img  className='group-hover:scale-125 transition-all duration-500' src={Img3} alt=''/>
              {}
              <div className='absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50'>
                <span className='text-gradient'>React Native</span>
              </div>
              {}
              <div className='absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50'>
                <span className='text-3xl text-white'>NJ Tourist App</span>
              </div>
              </div>
              </a>
          </motion.div>
        </div>
    </div>
  </section>);
};

export default Work;
