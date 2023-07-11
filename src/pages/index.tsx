import Email from '@/components/email';
import Loader from '@/components/loader';
import SocialIcons from '@/components/socialIcons';
import About from '@/sections/about';
import Contact from '@/sections/contact';
import Experience from '@/sections/experience';
import Hero from '@/sections/hero';
import Navbar from '@/sections/navbar';
import Projects from '@/sections/projects';
import Head from 'next/head';
import Link from 'next/link';
import React, { useState } from 'react';

function Index() {
  const [isLoading, setIsLoading] = useState(true);
  const [showContent, setShowContent] = useState(false);

  const handleLoaderLoaded = () => {
    setIsLoading(false);
    setTimeout(() => setShowContent(true), 450);
  };

  return (
    <div className='app'>
      <Head>
        <title>Tripurari Kumar</title>
        <Link rel='shortcut-icon' href={'/'} />
      </Head>
      {/* {showContent && ( */}
      <>
        <Navbar />
        <SocialIcons />
        <Email />
        <main>
          <Hero />
          <About />
          <Experience />
          <Projects />
          <Contact />
        </main>
      </>
      {/* )} */}
      {/* <Loader isLoading={isLoading} setIsLoading={handleLoaderLoaded} /> */}
    </div>
  );
}

export default Index;
