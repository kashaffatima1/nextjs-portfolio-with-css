import React from 'react';
import Image from 'next/image';
import '../Component/Herosection.css';

const Herosection: React.FC = () => {
  return (
    <section>
      <div className="herosection-container">
        <div className="herosection-text">
          <h1 className="herosection-title">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
              Hello, I&apos;m
            </span>
            Kashaf Fatima
          </h1>
          <p className="herosection-desc">
            Specializing in creating stunning websites and user interfaces
          </p>
          <div>
            <button className="herosection-btn">Hire Me</button>
            <button className="herosection-btn herosection-btn-secondary">Download CV</button>
          </div>
        </div>
        <div className="herosection-img">
          <div className="herosection-img-wrapper">
            <Image
              src="/images/herosectionpic.jfif"
              alt="hero image"
              width={300}
              height={300}
              className="rounded-full shadow-lg object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Herosection;
