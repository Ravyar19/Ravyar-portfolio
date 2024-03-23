import { motion } from 'framer-motion';
import HeroImg from '../../../assets/hero.svg';
import Scroll from '../../../assets/scroll.png';

const textVariants = {
  initial: {
    x: -500,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
  scrollButton: {
    opacity: 0,
    y: 10,
    transition: {
      duration: 2,
      repeat: Infinity,
    },
  },
};
const sliderVariants = {
  initial: {
    x: 0,
  },
  animate: {
    x: '-220%',
    transition: {
      repeat: Infinity,
      repeatType: 'mirror',
      duration: 20,
    },
  },
};

const Hero = () => {
  return (
    <div className='h-[calc(100vh-100px)]  hero relative'>
      <div className='max-w-[1366px]  h-full mx-auto'>
        <motion.div
          initial='initial'
          animate='animate'
          variants={textVariants}
          className='h-full flex flex-col justify-center gap-[40px]'
        >
          <motion.h1
            variants={textVariants}
            className='text-4xl text-purple-600 tracking-[10px]	  '
          >
            Ravyar Aram
          </motion.h1>
          <motion.h1
            variants={textVariants}
            className='text-[88px] max-w-[740px] '
          >
            Web developer and Jira Administator
          </motion.h1>
          <motion.div variants={textVariants} className='flex gap-10'>
            <motion.button
              variants={textVariants}
              className='p-[15px] border-[1px] rounded-xl'
            >
              See the latest works
            </motion.button>
            <motion.button
              variants={textVariants}
              className='p-[15px] border-[1px] rounded-xl'
            >
              Contact Me
            </motion.button>
          </motion.div>
          <img
            src={Scroll}
            alt=''
            className='w-[50px] animate-bounce cursor-pointer'
          />
        </motion.div>
        <motion.div
          variants={sliderVariants}
          initial='initial'
          animate='animate'
          className='absolute bottom-[-120px] text-[50vh] w-[50%] whitespace-nowrap text-[#ffffff09]	  '
        >
          Web Developer Designer Jira Admin
        </motion.div>
        <div className='h-full absolute top-[200px] right-[100px] '>
          <img src={HeroImg} alt='' className='overflow-hidden w-5/6' />
        </div>
      </div>
    </div>
  );
};

export default Hero;
