import React from 'react';

const Footer = () => (
  <footer className="container mx-auto py-16 px-3 mt-48 mb-8 text-gray-800">
    <div className="flex -mx-3">
      <div className="flex-1 px-3">
        <h2 className="text-lg font-semibold">About Us</h2>
        <p className="mt-5">
          Doppeltweet is being developed by{' '}
          <a href="https://www.twitter.com/thomascmost" target="_blank" rel="noopener noreferrer">
            Thomas Constantine Moore
          </a>
          . All tweets written by a human unless marked otherwise.
        </p>
      </div>
      <div className="flex-1 px-3">
        {/* <h2 className="text-lg font-semibold">Important Links</h2>
        <ul className="mt-4 leading-loose">
          <li>
            <a href="https://codebushi.com">Terms &amp; Conditions</a>
          </li>
          <li>
            <a href="https://codebushi.com">Privacy Policy</a>
          </li>
        </ul> */}
      </div>
      <div className="flex-1 px-3">
        <h2 className="text-lg font-semibold">Social Media</h2>
        <ul className="mt-4 leading-loose">
          <li>
            <a href="https://twitter.com/TryDoppeltweet">Twitter</a>
          </li>
          <li>
            <a href="https://github.com/thomasmost/doppeltweet_web">GitHub</a>
          </li>
        </ul>
      </div>
    </div>
  </footer>
);

export default Footer;
