import React from 'react';
import './About.css';

import Footer from '../../Components/Footer/Footer';
const About = () => {
  return (
    <>
      <div className='about'>
        <div>
          <h1 style={{ margin: '2% 0%' }}>About Us</h1>
        </div>

        <div>
          <h3 style={{ margin: '10% 0%' }}>
            We at Dashtoon are curating the best stories across the globe and
            visualising them into comics and graphic novels. Discover dazzling
            universes, soaring beyond superheroes and clichés! A realm awaits.
            It’s as if Manga and HBO teamed up to craft spellbinding comics.
            Brace yourself for mind-blowing diversity! <br /> <br /> Experience
            the joy of endless binge-reading. We globalize manga and manhwa,
            making them fun and accessible. So, sit back, relax, and let our
            comics transport you to a universe of boundless discovery. <br />{' '}
            <br /> You're one click away from unearthing the next Naruto, One
            Piece, or Pokemon sensation! Join us on our quest to unleash the
            next groundbreaking Anime franchise upon the world!{' '}
          </h3>
        </div>
      </div>
      <div className='footer'>
        <Footer />
      </div>
    </>
  );
};

export default About;
