import Link from 'next/link';
import React from 'react';
import {
  FiGithub,
  FiLinkedin,
  FiTwitter,
  FiFacebook,
  FiInstagram,
} from 'react-icons/fi';
import { motion } from 'framer-motion';

function SocialIcons() {
  const socialLinks = [
    {
      name: 'Github',
      icon: <FiGithub />,
      link: 'https://github.com/Tripurari-kumar',
    },
    {
      name: 'Linkdin',
      icon: <FiLinkedin />,
      link: 'https://www.linkedin.com/in/tripurari-kumar-271457191',
    },
    {
      name: 'Twitter',
      icon: <FiTwitter />,
      link: 'https://twitter.com/tripurari34',
    },
    {
      name: 'FaceBook',
      icon: <FiFacebook />,
      link: 'https://www.facebook.com/profile.php?id=100008815894377',
    },
    {
      name: 'Instagram',
      icon: <FiInstagram />,
      link: 'https://instagram.com/tripurari._.singh_?igshid=OGQ5ZDc2ODk2ZA==',
    },
  ];
  return (
    <motion.div
      className='social-icons'
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{
        duration: 0.3,
        ease: 'easeInOut',
        delay: 0.6,
      }}
    >
      <ul className='social-icons-list'>
        {socialLinks?.map(({ name, icon, link }) => (
          <li key={name} title={name} className='social-icons-list-item'>
            <Link
              href={link}
              className='social-icons-list-item-link'
              target='_blank'
            >
              {icon}
            </Link>
          </li>
        ))}
      </ul>
    </motion.div>
  );
}

export default SocialIcons;
