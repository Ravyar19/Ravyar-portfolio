import facebook from './../../assets/facebook.png';
import instagram from './../../assets/instagram.png';
import youtube from './../../assets/youtube.png';
import dribbble from './../../assets/dribbble.png';
import { motion } from 'framer-motion';
import Sidebar from './sidebar/Sidebar';

const Navbar = () => {
  return (
    <div className='h-[100px] '>
      {/* sidebar */}
      <Sidebar />

      <div className='max-w-[1366px] mx-auto flex items-center justify-between h-full'>
        <motion.span
          initial={{
            opacity: 0,
            scale: 0.5,
          }}
          animate={{
            opacity: 1,
            scale: 1,
          }}
          transition={{
            duration: 0.5,
          }}
          className=' font-bold text-2xl  '
        >
          Ravyar Aram
        </motion.span>
        <motion.div
          initial={{
            opacity: 0,
            scale: 0.5,
          }}
          animate={{
            opacity: 1,
            scale: 1,
          }}
          transition={{
            duration: 0.5,
          }}
          className='flex gap-[20px]'
        >
          <a href=''>
            <img className='social-icons' src={facebook} alt='' />
          </a>
          <a href=''>
            <img className='social-icons' src={instagram} alt='' />
          </a>
          <a href=''>
            <img className='social-icons' src={youtube} alt='' />
          </a>
          <a href=''>
            <img className='social-icons' src={dribbble} alt='' />
          </a>
        </motion.div>
      </div>
    </div>
  );
};

export default Navbar;
