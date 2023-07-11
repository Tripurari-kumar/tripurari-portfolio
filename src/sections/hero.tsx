import Button from '@/components/button';
import Link from 'next/link';
import React from 'react';
import { motion } from 'framer-motion';

function Hero() {
  return (
    <div className='hero'>
      <motion.h1
        className='hero-title'
        initial={{ opacity: 0, y: 5 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.3,
          ease: 'easeInOut',
          delay: 0.6,
        }}
      >
        Hi my name is
      </motion.h1>
      <motion.h2
        className='hero-title-large'
        initial={{ opacity: 0, y: 5 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.3,
          ease: 'easeInOut',
          delay: 0.75,
        }}
      >
        Tripurari Kumar
      </motion.h2>
      <motion.h3
        className='hero-title-large hero-tile-sub'
        initial={{ opacity: 0, y: 5 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.3,
          ease: 'easeInOut',
          delay: 1.05,
        }}
      >
        I craft things for Web!
      </motion.h3>
      <motion.p
        className='hero-text'
        initial={{ opacity: 0, y: 5 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.3,
          ease: 'easeInOut',
          delay: 1.35,
        }}
      >
        I&apos;m a software engineer with expertise in creating top-notch
        digital experiences. My current focus is on developing products that are
        accessible and centered around user needs, as part of the team at&nbsp;
        <Link
          href={'https://www.mindstix.com/'}
          target='_blank'
          className='link'
        >
          Mindstix Software Labs.
        </Link>
      </motion.p>
    </div>
  );
}

export default Hero;
