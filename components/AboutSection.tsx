import React from 'react';

const skills = [
  { skill: 'HTML & CSS' },
  { skill: 'JavaScript' },
  { skill: 'TypeScript' },
  { skill: 'C#' },
  { skill: 'MongoDB' },
  { skill: 'ExpressJS' },
  { skill: 'ReactJS' },
  { skill: 'NodeJS' },
  { skill: 'NextJS' },
  { skill: 'Agile Methodology' },
  { skill: 'TailwindCSS' },
];

const AboutSection = () => {
  return (
    <section id='about'>
      <div className='my-12 pb-12 md:pt-16 md:pb-48'>
        <h1 className='text-center font-bold text-4xl'>
          About Me
          <hr className='w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded'></hr>
        </h1>

        <div className='flex flex-col space-y-10 items-stretch justify-center align-top md:space-x-10 md:space-y-0 md:p-4 md:flex-row md:text-left'>
          <div className='md:w-1/2 '>
            <h1 className='text-center text-2xl font-bold mb-6 md:text-left'>
              Get to know me!
            </h1>
            <p>
              Hi, my name is
              <span className='font-semibold text-teal-600'> Amiel</span>, and I
              am a <span className='font-bold'>determined</span>,
              <span className='font-bold'> motivated</span>, and
              <span className='font-bold'> ambitious</span> individual aspiring
              to become a skilled software engineer. I am a self-starter,
              committed to working hard, and achieving my goals.
            </p>
            <br />
            <p>
              I have a variety of hobbies and interests that keep me occupied.
              When I'm not programming, you can find me playing first-person
              shooter games, watching films and series, continuously upskilling
              myself, or simply relaxing and unwinding. I always seek new
              experiences and love to keep myself engaged and learn new things.
            </p>
            <br />
            <p>
              I believe in{' '}
              <span className='font-semibold text-teal-600'>
                continuous learning and personal growth
              </span>
              , and I am constantly seeking ways to challenge myself and expand
              my knowledge in the field of technology. As a passionate and
              driven individual, I continually push myself to go beyond what is
              expected and explore new possibilities. I am eager to see where my
              career in software engineering takes me and am open to embracing
              new opportunities to enhance my skills and expertise further.
            </p>
          </div>
          <div className='text-center md:w-1/2 md:text-left'>
            <h1 className='text-2xl font-bold mb-6'>My Skills</h1>
            <div className='flex flex-wrap flex-row justify-center md:justify-start'>
              {skills.map((item, index) => {
                return (
                  <p
                    key={index}
                    className='bg-gray-200 px-4 py-2 mr-2 mt-2 text-gray-500 rounded font-semibold'
                  >
                    {item.skill}
                  </p>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
