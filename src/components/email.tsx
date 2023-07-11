import Link from 'next/link';
import React from 'react';
import { motion } from 'framer-motion';

function Email() {
  return (
    <motion.div
      className='email'
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{
        duration: 0.3,
        ease: 'easeInOut',
        delay: 0.6,
      }}
    >
      <Link href={'mailto:tripurarisingh159@gmail.com'} className='email-link'>
        tripurarisingh159@gmail.com
      </Link>
    </motion.div>
  );
}

export default Email;
