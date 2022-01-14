import React from 'react';
import './Footer.css';
import Jives from './icon.png';

const Footer = () => (
  <footer className="footer container">
    <div className="footer__left">
      <span>
        Built on the{' '}
        <a
          href="https://www.uscis.gov/sites/default/files/document/questions-and-answers/100q.pdf"
          rel="noopener noreferrer"
        >
          2022 Civics test documentation
        </a>
        . This page is in no way affiliated with the United States goverment.
        Icons provided by Twitter/Twemoji.{' '}
        <a href="https://jives.dev/us-civics-test-practice">Restart Test?</a>
      </span>
    </div>

    <div className="footer__right">
      <span className="footer__watermark">
        <img src={Jives} alt="Jives" />
        <span>
          Built by <a href="https://jamesiv.es">Jives</a>
        </span>
      </span>
    </div>
  </footer>
);

export default Footer;
