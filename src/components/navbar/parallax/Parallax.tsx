import { motion } from 'framer-motion';

const Parallax = ({ type }) => {
  return (
    <div
      style={{
        background:
          type === 'services'
            ? 'linear-gradient(180deg, #111132, #0c0c1d)'
            : 'linear-gradient(180deg, #111132, #505064)',
      }}
      className='w-full h-full relative flex items-center justify-center'
    >
      <motion.h1 className='text-[100px]'>
        {type === 'services' ? 'What I Do?' : 'What i did'}
      </motion.h1>
      <motion.div className='mountains'></motion.div>
      <motion.div className='planets'></motion.div>
      <motion.div className='stars'></motion.div>
    </div>
  );
};

export default Parallax;
