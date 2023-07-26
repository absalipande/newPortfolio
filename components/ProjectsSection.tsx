import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import SlideUp from './SlideUp';
import { BsGithub, BsArrowUpRightSquare } from 'react-icons/bs';

const projects = [
  {
    name: 'Online Portfolio',
    description:
      'This is an online portfolio created solely using just HTML and CSS. It is my first project completed during the bootcamp.',
    image: '/web-portfolio.jpg',
    github: 'https://github.com/absalipande/web-dev-portfolio',
    link: 'https://absalipande.github.io/web-dev-portfolio/',
  },
  {
    name: 'Mazey Crazy',
    description:
      'Get ready to test your puzzle-solving skills in a thrilling JavaScript maze game that features two challenging maps and a surprising twist upon completion.',
    image: '/mazey-crazy.jpg',
    github: 'https://github.com/absalipande/maze-game-js',
    link: 'https://absalipande.github.io/maze-game-js/',
  },
  {
    name: 'PokeDex',
    description:
      'Just a simple PokeDex application made with HTML, CSS, and JavaScript.',
    image: '/pokemon.png',
    github: 'https://github.com/absalipande/newPokedex',
    link: 'https://new-pokedex-chi.vercel.app/',
  },
  {
    name: 'Observers Notebook',
    description: 'This is a Note-taking Application made using React.js.',
    image: '/observers-notebook.jpg',
    github: '',
    link: 'https://observersnotebook.netlify.app/',
  },
  {
    name: 'User Management System',
    description:
      'Introducing a full-stack MERN application that securely stores user details in a database.',
    image: '/mern-stack.png',
    github: 'https://github.com/absalipande/frontend',
    link: 'https://user-management-system-coral.vercel.app/',
  },
  {
    name: 'Eatstagram',
    description:
      'Eatstagram is a social media app that focuses on sharing and discovering food-related content through photos and videos.',
    image: '/eatstagram.png',
    github: '',
    link: 'https://proj6-fe.onrender.com/',
  },
  {
    name: 'Summar(AI)ze',
    description:
      'Summar(AI)ze is a powerful web application that utilizes OpenAIs GPT-4 model to provide concise summaries of articles',
    image: '/summaraize-web.png',
    github: 'https://github.com/absalipande/summaraize',
    link: 'https://summaraize.vercel.app/',
  },
  {
    name: 'sql-ai',
    description:
      'This is a web application that enables users to convert English language sentences into SQL queries using OpenAIs GPT-3.5 architecture and text completion API.',
    image: '/sql-api.png',
    github: 'https://github.com/absalipande/sqlAi',
    link: 'https://sql-ai-frontend.vercel.app/',
  },
  {
    name: 'Illuminate',
    description:
      'Illuminate is an AI-powered SaaS that empowers users to effortlessly create diverse and captivating content. Unlock your creativity with the ability to generate conversations, code, images, music, and videos - all within a single innovative solution.',
    image: '/illuminate.jpg',
    github: 'https://github.com/absalipande/illuminate',
    link: 'https://illuminate-six.vercel.app/',
  },
  // {
  //   name: 'Chatty',
  //   description:
  //     'Chatty is a powerful and intuitive messenger application that offers a seamless real-time messaging experience.',
  //   image: '/chatty.png',
  //   github: 'https://github.com/absalipande/chatty',
  //   link: 'https://chatty-gray.vercel.app/',
  // },
  // {
  //   name: 'Twitter Clone',
  //   description:
  //     'Twitter clone with TypeScript, Next.js, MongoDB, Prisma, NextAuth, and Tailwind',
  //   image: '/twitter.png',
  //   github: 'https://github.com/absalipande/twitter-clone-proj',
  //   link: 'https://twitter-clone-proj.vercel.app/',
  // },
  // {
  //   name: 'Netflix Clone',
  //   description:
  //     'Netflix clone with TypeScript, Next.js, MongoDB, Prisma, NextAuth, and Tailwind',
  //   image: '/netflix.png',
  //   github: 'https://github.com/absalipande/netflix-clone',
  //   link: 'https://streaming-site-theta.vercel.app/',
  // },
  // {
  //   name: 'Airbnb Clone',
  //   description:
  //     'Airbnb clone with TypeScript, Next.js, MongoDB, Prisma, NextAuth, and Tailwind',
  //   image: '/airbnb.png',
  //   github: 'https://github.com/absalipande/airbnb-clone',
  //   link: 'https://booking-site-clone.vercel.app/',
  // },
];

const ProjectsSection = () => {
  return (
    <section id='projects'>
      <h1 className='my-10 text-center font-bold text-4xl'>
        Projects
        <hr className='w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded' />
      </h1>

      <div className='flex flex-col space-y-28'>
        {projects.map((project, index) => (
          <div key={index}>
            <SlideUp offset='-300px 0px -300px 0px'>
              <div className='flex flex-col animate-slideUpCubiBezier animation-delay-2 md:flex-row md:space-x-12'>
                <div className='md:w-1/2'>
                  <Link href={project.link}>
                    <Image
                      src={project.image}
                      alt=''
                      width={1000}
                      height={1000}
                      className='rounded-xl shadow-xl hover:opacity-70'
                    />
                  </Link>
                </div>
                <div className='mt-8 md:w-1/2'>
                  <h1 className='text-4xl font-bold mb-6'>{project.name}</h1>
                  <p className='text-xl leading-7 mb-4 text-neutral-600 dark:text-neutral-400'>
                    {project.description}
                  </p>
                  <div className='flex flex-row align-bottom space-x-4'>
                    <Link href={project.github} target='_blank'>
                      <BsGithub
                        size={30}
                        className='hover:-translate-y-1 transition-transform cursor-pointer'
                      />
                    </Link>
                    <Link href={project.link} target='_blank'>
                      <BsArrowUpRightSquare
                        size={30}
                        className='hover:-translate-y-1 transition-transform cursor-pointer'
                      />
                    </Link>
                  </div>
                </div>
              </div>
            </SlideUp>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;
