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
        'Worked on GoogleMaps SDK to integrate Map functionality into a web application such as custom markers, clustering functionality to efficiently group nearby markers, geolocation services to track and display the user’s current location and bouncy animations enhancing the visual appeal and user interaction of the application.',
        'Utilized RTK Query for efficient and optimized data fetching from REST APIs, improving application performance and reducing unnecessary network requests.',
        'Implemented authentication using MSAL and Okta, ensuring secure access control and user authentication.',
      ],
    },
    {
      name: 'Lennar Homes - Green Folder Standardisation',
      role: 'Software Developer',
      start: 'July 2022',
      end: 'Oct 2022',
      shortDescription: [
        'Spearheaded integration of REST and GraphQL APIs with the application user interface, ensuring seamless communication between backend services and dynamic form operations.',
        'Optimized UI performance to achieve lightning-fast page load times, enhancing user experience and engagement with the Lennar Land application.',
        'Played a pivotal role in conducting team code reviews, upholding code quality standards, and ensuring adherence to best practices within the development team.',
        'Mentored junior developers, providing guidance on coding standards, best practices, and integration techniques, which contributed to a more cohesive and skilled development team',
      ],
    },
    {
      name: 'Amway Taiwan - NextGen E-Commerce',
      role: 'Software Developer',
      start: 'Aug 2021',
      end: 'July 2022',
      shortDescription: [
        'Developed featured components for key sections: HomePage, Product Details Page, Cart, Checkout Page, and integrated Payment Gateway.',
        'Utilized Next.js for Server-Side Rendering, enhancing performance and user experience.',
        'Actively participated in team discussions to enhance application functionality and design.',
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
