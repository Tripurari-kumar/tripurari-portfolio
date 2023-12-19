import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { motion } from 'framer-motion';

function About() {
  return (
    <motion.div
      id='about'
      className='about'
      initial={'hidden'}
      whileInView={'visible'}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      variants={{
        visible: {
          opacity: 1,
          y: -50,
        },
        hidden: {
          opacity: 1,
          y: 0,
        },
      }}
    >
      <div className='title'>
        <h2>About Me</h2>
      </div>
      <div className='about-grid'>
        <div className='about-grid-info'>
          <p className='about-grid-info-text'>
            Hello! My name is Tripurari, I am a passionate software engineer
            with a strong focus on web development. Web development is not just
            a job for me; it is my passion. I am constantly eager to expand my
            knowledge and stay up-to-date with the latest trends and
            technologies in the field.
          </p>
          <p className='about-grid-info-text'>
            I actively seek opportunities to enhance my skills and embrace
            challenges with enthusiasm. My dedication to delivering high-quality
            code, combined with my collaborative nature and communication
            skills, allows me to contribute effectively as a team.
          </p>
          <p className='about-grid-info-text'>
            Fast-forward to today, I specialize in designing and developing
            high-quality solutions that delight our clients and exceed their
            expectations at{' '}
            <Link
              href={'https://www.mindstix.com/'}
              target='_blank'
              className='link'
            >
              Mindstix Software Labs.
            </Link>
          </p>
          <p className='about-grid-info-text'>
            In summary, I am a driven software engineer with expertise in
            ReactJS, Node.js, JavaScript, HTML, CSS, Sass, and MongoDB. My
            passion for web development fuels my commitment to creating
            exceptional web applications that are visually appealing,
            performant, and user-friendly. I am excited to leverage my skills
            and experience to contribute to innovative projects and collaborate
            with like-minded professionals in the industry.
          </p>
          <p className='about-grid-info-text'>
            Here are a few technologies I’ve been working with recently:
          </p>
          <ul className='about-grid-info-list'>
            <li className='about-grid-info-list-item'>JavaScript</li>
            <li className='about-grid-info-list-item'>ReactJs</li>
            <li className='about-grid-info-list-item'>Typescript</li>
            <li className='about-grid-info-list-item'>Redux Toolkit</li>
            <li className='about-grid-info-list-item'>Next.js</li>
            <li className='about-grid-info-list-item'>Node.js</li>
            <li className='about-grid-info-list-item'>HTML5</li>
            <li className='about-grid-info-list-item'>CSS3</li>
            <li className='about-grid-info-list-item'>SASS</li>
            <li className='about-grid-info-list-item'>Webpack</li>
            <li className='about-grid-info-list-item'>Material UI</li>
            <li className='about-grid-info-list-item'>REST/GRAPHQL</li>
            <li className='about-grid-info-list-item'>OKTA</li>
            <li className='about-grid-info-list-item'>MongoDb</li>
            <li className='about-grid-info-list-item'>AZURE</li>
            <li className='about-grid-info-list-item'>Sockets</li>
            <li className='about-grid-info-list-item'>DSA</li>
            <li className='about-grid-info-list-item'>OOPS</li>
          </ul>
        </div>
        <div className='about-grid-photo'>
          <div className='overlay'></div>
          <div className='overlay-border'></div>
          <div className='about-grid-photo-container'>
            <Image src={'/profile.jpg'} alt={'profile'} fill />
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default About;
