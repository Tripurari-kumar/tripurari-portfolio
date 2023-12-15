import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { FiGithub, FiExternalLink } from 'react-icons/fi';
import { motion } from 'framer-motion';

function Projects() {
  const projectsData = [
    {
      image: '/project_01.png',
      projectName: 'WECHAT (Realtime Chat App)',
      projectLink: '',
      projectDescription:
        'This is a chat app made with React and Node.js that sends real-time messages and is highly scalable. It has key features like User Authentication, Profile Setup, Real-Time Communication and Logout Functionality. It uses advanced JavaScript concepts like debouncing and is optimized for React.',
      projectTech: [
        'React',
        'Sockets',
        'Node.js',
        'Express',
        'MongoDB',
        'REST',
        'Material UI',
      ],
      projectExternalLinks: {
        github: 'https://github.com/Tripurari-kumar/My-messenger',
        externalLink: '',
      },
    },
    {
      image: '/project_04.png',
      projectName: 'VIRTUAOMEET (Real Time Video Conferencing App)',
      projectLink: '',
      projectDescription: `Utilized WebRTC for establishing media streams, providing efficient video and audio communication.
          Designed and integrated a responsive player for rendering high-quality media streams during sessions.
        Established signaling mechanisms for WebRTC connection.
          Engineered a user-friendly lobby system and an easy-to-use interface for video calls.`,
      projectTech: ['NextJS', 'WebRTC', 'Sockets', 'TailWind CSS'],
      projectExternalLinks: {
        github: 'https://github.com/Tripurari-kumar/We-meet',
        externalLink: '',
      },
    },
    {
      image: '/project_02.png',
      projectName: 'My Porfolio',
      projectLink: '',
      projectDescription:
        'A Dynamic Next.js Application with Framer Motion Animations Discover the power of seamless web experiences and captivating animations with MyPortfolio, a cutting-edge web application meticulously crafted using Next.js and enhanced with the fluid motion of Framer Motion.',
      projectTech: [
        'NextJs',
        'React',
        'Typescript',
        'SCSS',
        'Framer Motion',
        'Vercel',
      ],
      projectExternalLinks: {
        github: 'https://github.com/Tripurari-kumar/tripurari-portfolio',
        externalLink: 'https://tripurari-portfolio.vercel.app',
      },
    },
    {
      image: '/project_03.png',
      projectName: 'Social Media Application',
      projectLink: '',
      projectDescription:
        'A feature-rich social media platform with authentication, personalized profiles, interactive liking and disliking functionality, and the ability to establish connections with friends within the application. Built using React, Node.js, MongoDB, and Redux Toolkit, the application boasts full responsiveness and a sleek interface designed with (MUI).',
      projectTech: [
        'React',
        'NodeJs',
        'MongoDB',
        'Redux Toolkit',
        'REST',
        'Material UI',
      ],
      projectExternalLinks: {
        github: 'https://github.com/Tripurari-kumar/social-verse',
        externalLink: '',
      },
    },
  ];
  return (
    <div className='projects' id='work'>
      <motion.div
        className='title'
        initial='hidden'
        whileInView='visible'
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        variants={{
          visible: { opacity: 1, y: -50 },
          hidden: { opacity: 0, y: 0 },
        }}
      >
        <h2>Some Things I’ve Built</h2>
      </motion.div>
      <div className='projects-container'>
        {projectsData.map(
          ({
            image,
            projectDescription,
            projectLink,
            projectExternalLinks,
            projectName,
            projectTech,
          }) => {
            return (
              <motion.div
                className='project'
                key={projectName}
                initial='hidden'
                whileInView='visible'
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                variants={{
                  visible: { opacity: 1, y: -50 },
                  hidden: { opacity: 0, y: 0 },
                }}
              >
                <div className='project-image'>
                  <div className='project-image-overlay'></div>
                  <div className='project-image-container'>
                    <Image src={image} fill alt={projectName} quality={100} />
                  </div>
                </div>
                <div className='project-info'>
                  <p className='project-info-overline'>Featured Project</p>
                  <h3 className='project-info-title'>{projectName}</h3>
                  <div className='project-info-description'>
                    <p>{projectDescription}</p>
                  </div>
                  <ul className='project-info-tech-list'>
                    {projectTech?.map((tech) => (
                      <li className='project-info-tech-list-item' key={tech}>
                        {tech}
                      </li>
                    ))}
                  </ul>
                  <ul className='project-info-links'>
                    <li className='project-info-links-item'>
                      <Link
                        href={projectExternalLinks?.github}
                        className='project-info-links-item-link'
                        target='_blank'
                      >
                        <FiGithub />
                      </Link>
                    </li>
                    {projectExternalLinks?.externalLink && (
                      <li className='project-info-links-item'>
                        <Link
                          href={projectExternalLinks?.externalLink}
                          className='project-info-links-item-link'
                        >
                          <FiExternalLink />
                        </Link>
                      </li>
                    )}
                  </ul>
                </div>
              </motion.div>
            );
          }
        )}
      </div>
    </div>
  );
}

export default Projects;
