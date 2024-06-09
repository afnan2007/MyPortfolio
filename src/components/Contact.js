
import React, { useRef } from 'react';

import {motion} from 'framer-motion'

import {fadeIn} from '../variants'

import emailjs from '@emailjs/browser';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const Contact = () => {


  const notify = () => toast("Form submitted!");

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_n9mo64i', 'template_ytd0gxt', form.current, {
        publicKey: 'MG9qcrW1Y10p-z1Sh',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );

    e.target.reset();
    };

  return (
  <section className='py-16 lg:section' id='contact'>
    <div className="container mx-auto">
      <div className="flex flex-col lg:flex-row">
        {}
        <motion.div 
        variants={fadeIn('right', 0.3)}
        initial="hidden"
        whileInView={"show"}
        viewport={{once:false, amount: 0.3}}
        className='flex-1 flex justify-start items-center'>
          <div>
            <h4 className='text-x1 uppercase text-accent font-medium mb-2 tracking-wide'>Get in touch</h4>
            <h2 className='text-[45px] lg:text-[90px] leading-none mb-12'>Let's work <br/> together!</h2>
          </div>
      </motion.div>
      {}
      <motion.form 

      ref={form} onSubmit={sendEmail}
      variants={fadeIn('left', 0.3)}
      initial="hidden"
      whileInView={"show"}
      viewport={{once:false, amount: 0.3}}
      className='flex-1 border roundeed-2x1 flex flex-col gap-y-10 pb-24 p-6 items-start'>
        <input className='bg-transparent border-b py-3 outline-none w-full placeholder:text-white focus:border-accent transition-all' type="text" placeholder='Your name'  name="from_name"/>
        <input className='bg-transparent border-b py-3 outline-none w-full placeholder:text-white focus:border-accent transition-all' type="text" placeholder='Your email' name="from_email"/>
        <input className='bg-transparent border-b py-3 outline-none w-full placeholder:text-white focus:border-accent transition-all' type="text" placeholder='Your message' name="message"/>
        {/*<textarea className='bg-transparent border-b py-12 outline-none w-full placeholder:text-white focus:border-accent transition-all resize-none mb-12' placeholder:text-white focus:border-accent transition-all resize-none mb-12 placeholder='Your message'></textarea> */}
        
        <div>
        <button className='btn btn-lg'  onClick={notify}>
        <input type="submit" Value="Send Info">
        </input>
        </button>
        <ToastContainer/>
        </div>

        <div className="flex flex-col lg:flex-row gap-x-12"> 
        <p>Email: afnanahmed4847@gmail.com</p>
        <p></p>
        <p>Phone #: 973-462-6070</p>
        </div>
       
      </motion.form>
    
      </div>
    </div>
  
  </section>
  )
};

export default Contact;
