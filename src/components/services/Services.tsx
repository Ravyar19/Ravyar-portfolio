import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const variants = {
  initial: {
    x: -500,
    y: 100,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
};

const Services = () => {
  const ref = useRef();

  const isInView = useInView(ref, { margin: '-100px' });
  return (
    <motion.div
      variants={variants}
      initial='initial'
      whileInView='animate'
      className='services h-full flex flex-col justify-between '
    >
      <motion.div className='flex-[1] self-end flex items-center gap-[20px]'>
        <p className='font-thiner text-sm text-gray-300 text-right'>
          I focus on helping your brand grow <br /> and move forward
        </p>
        <hr className='w-[500px] ' />
      </motion.div>
      <motion.div className='flex-[2] flex flex-col items-center  '>
        <div className='flex gap-[50px] items-center  '>
          <img
            className='w-[300px] h-[100px] rounded-full object-cover'
            src='/src/assets/people.webp'
            alt=''
          />
          <h1 className='text-[96px] font-thin'>
            <b>Unique</b> Ideas
          </h1>
        </div>
        <div className='flex gap-[50px] items-center'>
          <h1 className='text-[96px] font-thin'>
            <b>For Your</b> Business.
          </h1>
          <button className='w-[300px] h-[100px] border-none bg-orange-600 rounded-full text-[24px]'>
            WHAT I DO?
          </button>
        </div>
      </motion.div>
      <motion.div className='flex-[2] flex max-w-[1366px] mx-auto mb-4 mt-4   '>
        <motion.div
          whileHover={{
            backgroundColor: 'lightgray',
            color: 'black',
          }}
          className='p-[50px] border-[0.5px]  flex flex-col justify-between space-y-5	'
        >
          <h2>Branding</h2>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odit eum
            similique dolores quod cupiditate excepturi, recusandae voluptates
            provident neque illo error veniam. Esse error fugit, rerum nulla
            illo tempora odio. Incidunt molestiae omnis, voluptate autem
            provident repudiandae molestias. Deserunt doloremque minima
          </p>
          <button className='p-[10px] bg-orange-600 border-none mt-4'>
            Go
          </button>
        </motion.div>
        <motion.div
          whileHover={{
            backgroundColor: 'lightgray',
            color: 'black',
          }}
          className='p-[50px] border-[0.5px]  flex flex-col justify-between'
        >
          <h2>Branding</h2>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odit eum
            similique dolores quod cupiditate excepturi, recusandae voluptates
            provident neque illo error veniam. Esse error fugit, rerum nulla
            illo tempora odio. Incidunt molestiae omnis, voluptate autem
            provident repudiandae molestias. Deserunt doloremque minima
          </p>
          <button className='p-[10px] bg-orange-600 border-none mt-4'>
            Go
          </button>
        </motion.div>
        <motion.div
          whileHover={{
            backgroundColor: 'lightgray',
            color: 'black',
          }}
          className='p-[50px] border-[0.5px] flex flex-col justify-between '
        >
          <h2>Branding</h2>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odit eum
            similique dolores quod cupiditate excepturi, recusandae voluptates
            provident neque illo error veniam. Esse error fugit, rerum nulla
            illo tempora odio. Incidunt molestiae omnis, voluptate autem
            provident repudiandae molestias. Deserunt doloremque minima
          </p>
          <button className='p-[10px] bg-orange-600 border-none mt-4'>
            Go
          </button>
        </motion.div>
        <motion.div
          whileHover={{
            backgroundColor: 'lightgray',
            color: 'black',
          }}
          className='p-[50px] border-[0.5px] flex flex-col justify-between '
        >
          <h2>Branding</h2>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odit eum
            similique dolores quod cupiditate excepturi, recusandae voluptates
            provident neque illo error veniam. Esse error fugit, rerum nulla
            illo tempora odio. Incidunt molestiae omnis, voluptate autem
            provident repudiandae molestias. Deserunt doloremque minima
          </p>
          <button className='p-[10px] bg-orange-600 border-none mt-4'>
            Go
          </button>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Services;
