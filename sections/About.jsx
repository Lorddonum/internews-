'use client';

import {motion} from 'framer-motion';
import {TypingText} from '../components';

import styles from '../styles';
import {fadeIn,staggerContainer} from '../utils/motion';


const About = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <div className="gradient-02 z-0"/>
      <motion.div 
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{once:false,amount:0.25}}
        className={`${styles.innerWidth} mx-auto ${styles.flexCenter} flex-col`}
        >
          <TypingText title="| About Internews"
          textStyles="text-center"/>
          <motion.p
            variants={fadeIn('up','tween',0.4,1)}
            className="mt-[8px] font-normal sm:text-[32px] text-[20px]
            text-center text-secondary-white"
          >    
              Welcome to <span className="font-extrabold text-white">Internews</span>, your premier destination for all things futuristic gaming.Dive into a realm where cutting-edge technology, mind-bending narratives, and awe-inspiring virtual worlds collide.Our passionate team of writers, gamers, and tech enthusiasts is committed to providing engaging, in-depth content that takes you on an extraordinary journey beyond reality. Discover thrilling cyberpunk escapades, immersive virtual reality experiences, and epic sci-fi sagas through meticulously crafted articles, insightful reviews, and exclusive interviews. Embrace the future as we explore advanced AI, mind-boggling simulations, and groundbreaking innovations that redefine the gaming industry. Internews is your guide to a world where dreams and technology intertwine, unlocking a universe of gaming possibilities like never before.
          </motion.p>
          <motion.img
            variants={fadeIn('up','tween',0.3,1)}
            src="/arrow-down.svg"
            alt="arrow down"
            className="w-[18px] h-[28px] object-contain mt-[28px]"
          />
      </motion.div>
  </section>
);

export default About;
