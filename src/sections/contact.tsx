import Button from '@/components/button';
import React from 'react';
import { motion } from 'framer-motion';

function Contact() {
  return (
    <motion.div
      id='contact'
      className='contact'
      initial='hidden'
      viewport={{ once: true }}
      whileInView={'visible'}
      transition={{ duration: 0.6 }}
      variants={{
        visible: { opacity: 1, y: -50 },
        hidden: { opacity: 0, y: 0 },
      }}
    >
      <h2 className='contact-title'>What&apos;s Next</h2>
      <h2 className='contact-sub-title'>Get in Touch</h2>
      <p className='contact-text'>
        Feel free to reach out to me via email, phone, or LinkedIn. I am excited
        to explore new opportunities, collaborate with like-minded
        professionals, and contribute to the success of innovative projects.
      </p>
      <div className='contact-cta'>
        <Button link={'mailto:tripurarisingh159@gmail.com'} text='Say Hello' />
      </div>
    </motion.div>
  );
}

export default Contact;
