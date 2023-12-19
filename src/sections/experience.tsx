import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

function Experience() {
  const [selected, setSelected] = useState(0);

  useEffect(() => {
    const transformSelected = () => {
      const underline = document.querySelector<HTMLElement>('.underline');
      underline!.style.top = `${selected * 3.5}rem`;
    };
    transformSelected();
  }, [selected]);

  const experiences = [
    {
      name: 'Lennar Homes - Green Folder Experience',
      role: 'Software Developer',
      start: 'Nov 2022',
      end: 'Present',
      shortDescription: [
        'Developed a real estate management Application of Lennar, a Leading real state home construction company in US.',
        'Utilized Google Maps SDK for web app: integrated maps with custom markers, clustering for efficiency, and lively animations for an enhanced visual experience.',
        'Enabled seamless creation, tracking, and management of deals and opportunities in specific US divisions.',
        'Did Migration from Redux Toolkit to Redux ToolKit Query for efficient and optimized data fetching from REST APIs , improving application performance and reducing unnecessary network requests.',
        'Implemented authentication using MicroSoft Authentication Library (MSAL) and OKTA , ensuring secure access control and user authentication.',
        'Implemented Code splitting and lazy loading techniques to optimize the initial page load, achieving a 20 % reduction in landing page load time.',
        'Coordinated in feature prioritization, triaging bugs, and played a key role in debugging and resolving identified issues',
        'Utilized Jest for unit test cases and increased code coverage from completely scratch to 86 % and maintained it consistently above the recommended 85 %, ensuring a robust and reliable codebase.',
      ],
    },
    {
      name: 'Lennar Homes - Green Folder Standardisation',
      role: 'Software Developer',
      start: 'July 2022',
      end: 'Oct 2022',
      shortDescription: [
        'Integrated REST and GraphQL APIs into UI for dynamic form operations in Lennar Homes.',
        'Upgraded UI performance by optimizing Critical Rendering Path , resulting in faster page loads and 25 % reduction in loading time.',
        'Led team code reviews to maintain code quality and adherence to standards.',
        'Developed Reusable components and meticulously documented the code for enhancing accessibility and integration across the entire project.',
      ],
    },
    {
      name: 'Amway Taiwan - NextGen E-Commerce',
      role: 'Software Developer',
      start: 'Aug 2021',
      end: 'July 2022',
      shortDescription: [
        'Collaborated as a dedicated developer within a dynamic team to develop a fully responsive e-commerce platform tailored for Amway Taiwan, catering to the preferences and needs of Taiwanese consumers in health, beauty, and home care products.',
        'Developed featured-rich components completely from scratch for key sections such as HomePage, Product Details Page, Cart and Checkout Page',
        'Played a key role in Seamless Payment Gateway integration for secure and convenient transactions.',
        'Utilized NextJs for Server Side Rendering for enhancing performance and user experience.',
        'Implemented and collaborated on a Microfrontend architecture, leveraging CodeArtifact, to enhance modularity and scalability',
        'Designed a NodeJs based BFF (Backend For Frontend) architecture to optimize communication and ensure synchronization between the Frontend and Backend of an application.',
        'Completely revamped the user interface, resulting in total of 3.14 million monthly visits, proving my expertise in enhancing user experiences.',
      ],
    },
  ];
  return (
    <motion.div
      id='experience'
      className='experience'
      initial={'hidden'}
      viewport={{ once: true }}
      whileInView={'visible'}
      transition={{ duration: 0.3 }}
      variants={{
        visible: { opacity: 1, y: -50 },
        initial: { opacity: 0, y: 0 },
      }}
    >
      <div className='title'>
        <h2>
          A Comprehensive Overview of my Contributions to Various Projects at
          <Link
            href={'https://www.mindstix.com/'}
            target='_blank'
            className='link'
          >
            @ Mindstix
          </Link>
        </h2>
      </div>
      <div className='container'>
        <ul className='exp-slider'>
          <div className='underline'></div>
          {experiences.map((experience, index) => {
            return (
              <li
                key={index}
                className={`exp-slider-item ${
                  index === selected && 'exp-slider-item-selected'
                }`}
                onClick={() => {
                  setSelected(index);
                }}
              >
                <span>{experience?.name}</span>
              </li>
            );
          })}
        </ul>
        <div className='exp-details'>
          <div className='exp-details-position'>
            <h3>
              <span>{experiences?.[selected]?.role}</span>
              <span className='exp-details-position-company'>
                &nbsp;&nbsp;
                {experiences?.[selected]?.name}
              </span>
            </h3>
            <p className='exp-details-range'>
              {experiences?.[selected]?.start} -{experiences?.[selected]?.end}
            </p>
            <ul className='exp-details-list'>
              {experiences?.[selected]?.shortDescription?.map(
                (description, index) => (
                  <li key={index} className='exp-details-list-item'>
                    {description}
                  </li>
                )
              )}
            </ul>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default Experience;
