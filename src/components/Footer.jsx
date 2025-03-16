import React from 'react'
import FloatingParticle from './FloatingParticle'
import { BookOpenIcon, CommandLineIcon, GlobeAltIcon } from '@heroicons/react/24/outline'
import { GithubIcon, MessagesSquare, Twitter } from 'lucide-react'
const Footer = () => {
  return (
    <div className='realtive bg-gradient-to-b from-gray-900 to-gray-900/95 backdrop-blur-2xl border-t border-t-gray-800'>
        {/* Floating particles */}
        <FloatingParticle/>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16'>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8'>
                {/* Brand section */}
                <div className='space-y-6 text-center sm:text-left'>
                    <div className='flex justify-center sm:justify-start items-center space-x-2'>
                        <BookOpenIcon className='h-8 w-8 text-cyan-400'/>
                        <span className='text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400
                        bg-clip-text text-transparent'>
                            Library
                        </span>

                    </div>
                    <p className='text-gray-400 text-sm'>
                        Your gateway to infinite worlds. Discover,read, and escape into stories that matter

                    </p>
                </div>
                {/* QuickLinks */}
                <div className='space-y-4 text-center sm:text-left'>
                    <h3 className='text-lg font-semibold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent'>
                        Explore
                    </h3>
                    <ul className='space-y-3'>
                        {['Trending','New Releases','Genres','Author'].map((item)=>(
                            <li key={item}>
                                <a href="#" className='text-gray-400 hover:text-cyan-300 text-sm transition-colors flex items-center justify-center sm:justify-start group'>
                                    <span className='w-2 h-2 bg-cyan-400 rounded-full mr-2 opacity-0 
                                    group-hover:opcity-100 transition-opacity'/>
                                    {item}
                                </a>
                            </li>
                        ))}
                    </ul>

                </div>
                {/* tech stack */}
                <div className='space-y-4 text-center sm:text-left'>
                    <h3 className='text-lg font-semibold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent'>
                        Powered by
                    </h3>
                    <div className='flex flex-wrap gap-3 justify-center sm:justify-start'>
                        {['React','Tailwind','Vite','GoogleAPI'].map((tech)=>(
                            <span className='px-3 py-1.5 cursor-pointer rounded-full bg-gray-800/50 text-gray-300 text-sm
                            backdrop-blur-sm hover:bg-cyan-400/10 hover:text-cyen-300 transition-all'
                            key={tech}>
                                {tech}
                            </span>
                        ))}
                    </div>
                    <div className='mt-4 space-y-2'>
                        <div className='flex items-center justify-center sm:justify-start space-x-2 text-gray-400'>
                            <CommandLineIcon className='h-5 w-5'></CommandLineIcon>
                            <span className='text-sm'>Developer Friendly API</span>
                        </div>
                        <div className='flex items-center justify-center sm:justify-start space-x-2 text-gray-400'>
                            <GlobeAltIcon className='h-5 w-5'></GlobeAltIcon>
                            <span className='text-sm'>Global book Database</span>
                        </div>
                    </div>

                </div>

                {/* Social Links */}
                <div className='space-y-4 text-center sm:text-left'>
                    <h3 className='text-lg font-semibold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent'>
                        Socials
                    </h3>
                        <div className='flex justify-center sm:justify-start space-x-4'>
                            
                        {[
                            ['GitHub','hover:text-purple-300',GithubIcon],
                            ['Twitter','hover:text-purple-300',Twitter],
                            ['Discord','hover:text-purple-300',MessagesSquare]
                        
                        ].map(([platform,className,Icon])=>(
                            <a href='#' className={`text-gray-400 ${className} transition-colors hover:scale-110`}>
                                <span className='sr-only'>
                                    {platform}
                                </span>
                                <Icon className='h-6 w-6 md:w-8 md:h-8' stroke='currentColor'/>
                            </a>
                        ))}
                        </div>

                </div>

            </div>

            {/* Copyright */}
            <div className='border-t border-gray-800 mt-12 pt-8 text-center'>
                <p className='text-gray-500 text-sm'>
                    &copy; {new Date().getFullYear()} BookShow. All stories belongs to respective author. 
                </p>
              
            </div>
            <div className=' mt-2 flex flex-wrap justify-center space-x-4 text-gray-500 text-sm'>
                <a href='#' className='hover:text-cyan-300 transition-colors'>Contact hemanth13k@gmail.com</a>

            </div>
        </div>
    </div>
  )
}

export default Footer