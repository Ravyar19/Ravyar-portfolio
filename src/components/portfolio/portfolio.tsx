import { useScroll, useSpring, motion, useTransform } from 'framer-motion';
import React, { useRef } from 'react';

const items = [
  {
    id: 1,
    title: 'React Commerce',
    description: 'A simple e-commerce app built with React and Redux.',
    image:
      'https://images.pexels.com/photos/34577/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  },
  {
    id: 2,
    title: 'React Blog',
    description: 'A simple blog app built with React and Redux.',
    image:
      'https://images.pexels.com/photos/34577/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  },
  {
    id: 3,
    title: 'React Chat',
    description: 'A simple chat app built with React and Redux.',
    image:
      'https://images.pexels.com/photos/34577/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  },
];

const Single = ({ item }) => {
  const ref = useRef();
  const { scrollYProgress } = useScroll({
    target: ref,
  });

  const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);
  return (
    <section>
      <div className='flex items-center justify-center w-full h-full overflow-hidden'>
        <div className='max-w-[1366px] mx-auto flex items-center justify-center gap-[50px]'>
          <div className='flex-[1] h-[50%]' ref={ref}>
            <img
              src={item.image}
              alt=''
              className='w-full h-full object-cover'
            />
          </div>
          <motion.div
            className='flex-[1] flex flex-col gap-[30px]'
            style={{ y }}
          >
            <h2 className='text-[72px]'>{item.title}</h2>
            <p className='text-gray-400 text-[20px]'>{item.description}</p>
            <button className='  bg-orange-400 border-none p-2 w-[200px] font-bold text-xl '>
              See Demo
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const portfolio = () => {
  const ref = useRef();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['end end', 'start start'],
  });

  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

  return (
    <div className='relative' ref={ref}>
      <div className='sticky top-0 left-0 p-[50px] text-center text-orange-400 text-[36px] '>
        <h1>Fetured Works</h1>
        <motion.div
          className='h-[10px] bg-white'
          style={{ scaleX }}
        ></motion.div>
      </div>
      {items.map((item) => (
        <Single key={item.id} item={item} />
      ))}
    </div>
  );
};

export default portfolio;
