import React, { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

function Loader({ isLoading, setIsLoading }: any) {
  useEffect(() => {
    setTimeout(() => {
      setIsLoading();
    }, 1900);
  }, [setIsLoading]);
  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          className='loader'
          exit={{ scale: 0 }}
          key='motiondivleave'
          transition={{
            duration: 0.45,
            ease: 'easeInOut',
          }}
        >
          <motion.svg
            id='logo'
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 100 100'
          >
            <title>Logo</title>
            <g>
              <g id='K' transform='translate(35.000000, 35.000000)'>
                <motion.path
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{
                    duration: 1,
                    ease: 'easeInOut',
                    delay: 1,
                  }}
                  exit={{
                    scale: 2,
                  }}
                  fill='currentColor'
                  d='M 16.6406 26.1289 L 13.0117 26.1289 C 12.7266 26.1289 12.4961 25.8906 12.4961 25.6016 L 12.4961 6.59766 L 6.27734 6.59766 C 5.98828 6.59766 5.75781 6.36328 5.75781 6.07031 L 5.75781 3.42969 C 5.75781 3.14063 5.98828 2.90234 6.27734 2.90234 L 23.375 2.90234 C 23.6602 2.90234 23.8945 3.14063 23.8945 3.42969 L 23.8945 6.07031 C 23.8945 6.36328 23.6602 6.59766 23.375 6.59766 L 17.1563 6.59766 L 17.1563 25.6016 C 17.1563 25.8906 16.9258 26.1289 16.6406 26.1289 Z M 16.6406 26.1289'
                />
              </g>
              <motion.path
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{
                  duration: 1,
                  ease: 'easeInOut',
                }}
                exit={{
                  scale: 2,
                }}
                stroke='currentColor'
                strokeWidth='5'
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M 50, 5
          L 11, 27
          L 11, 72
          L 50, 95
          L 89, 73
          L 89, 28 z'
              />
            </g>
          </motion.svg>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default Loader;
