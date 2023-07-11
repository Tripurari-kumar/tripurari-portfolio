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
              {/* <g xmlns='http://www.w3.org/2000/svg' id='c179_text'>
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
                  d='M25.198,6.273c-0.014,0.23-0.045,0.389-0.087,0.467c-0.045,0.084-0.176,0.145-0.392,0.183    c-0.469,0.104-0.781-0.074-0.935-0.533C23.239,4.7,22.59,3.578,21.84,3.016c-1.041-0.773-2.862-1.161-5.469-1.161    c-1.054,0-1.633,0.115-1.734,0.343c-0.036,0.075-0.057,0.184-0.057,0.324v18.999c0,0.812,0.188,1.383,0.571,1.709    c0.382,0.32,1.069,0.731,2.201,0.999c0.483,0.103,0.97,0.2,1.034,0.239c0.46,0,0.504,1.057-0.376,1.057    c-0.025,0.016-10.375-0.008-10.375-0.008s-0.723-0.439-0.074-1.023c0.271-0.121,0.767-0.343,0.767-0.343s1.83-0.614,2.211-1.009    c0.434-0.445,0.648-1.164,0.648-2.154V2.521c0-0.369-0.229-0.585-0.687-0.647c-0.049-0.015-0.425-0.02-1.122-0.02    c-2.415,0-4.191,0.418-5.338,1.259C3.176,3.735,2.411,4.877,1.737,6.545C1.52,7.065,1.22,7.234,0.84,7.058    C0.408,6.957,0.251,6.719,0.363,6.353c0.445-1.374,0.668-3.31,0.668-5.814c0-0.292,0.387-0.586,1.163-0.533L23.56,0.064    c0.709-0.104,1.096,0.012,1.16,0.343C25.076,2.096,25.234,4.052,25.198,6.273z'
                />
              </g> */}
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
