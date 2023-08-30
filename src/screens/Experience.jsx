import React from 'react';
import TextReveal from '../components/reveal/TextAnimation';
const Experience = () => {
  return (
    <div className='bg-secondary'>
      <div className='flex flex-row gap-[.25rem] items-center mb-[1rem]'>
          <TextReveal fontSize='lg:text-[32px] handjet text-secondary  text-[24px]'>
            Projects </TextReveal>
          <div className='w-4 h-4 rounded-full border border-secondary bg-secondary'></div>
        </div>
        <div>

        </div>
    </div>
  );
}

export default Experience;
