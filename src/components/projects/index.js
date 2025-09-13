'use client';

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"
import { Separator } from "@/components/ui/separator"

import { LuGithub } from "react-icons/lu";
import { LuExternalLink } from "react-icons/lu";
import { RiSlideshowLine } from "react-icons/ri";
import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";
import { MdOutlineSwipe } from "react-icons/md";


import calcThumbnail from '@/images/calculator-thumbnail.png'
import webloggingThumb from '@/images/weblogging-thumbnail.png'
import etchThumb from '@/images/etch-a-sketch-thumbnail.png'
import weatherappThumb from '@/images/weatherapp-thumbnail.png'
import kanasprintThumb from '@/images/kana-sprint.gif'
import hayfThumb from '@/images/hayf-thumbnail.png'
import wectTgThumb from '@/images/wect-tg-thumbnail.png'
import izmidioThumb from '@/images/izmi-dio-thumbnail.gif'
import portfolThumb from '@/images/portfolio-thumbnail.gif'

const topProjects = [
  {
    'name': 'Kana Sprint',
    'thumbnail': kanasprintThumb,
    'stack': 'Nextjs, MongoDB, GSAP',
    'links': [
      {
        'icon': <LuGithub/>,
        'link':'https://github.com/lfcyk/kana-sprint/',
      },
      {
        'icon': <LuExternalLink/>,
        'link':'https://kana-sprint.vercel.app/',
      },
    ],
  },
  {
    'name': 'portfolio',
    'thumbnail': portfolThumb,
    'stack': 'Nextjs',
    'links': [
      {
        'icon': <LuGithub/>,
        'link':'https://github.com/lfcyk/portfolio/tree/nextjs',
      },
      {
        'icon': <LuExternalLink/>,
        'link':'/',
      },
    ],
  },
  {
    'name': 'Izmi & Dio Wedding Invitation',
    'thumbnail': izmidioThumb,
    'stack': 'Nextjs, MongoDB, Framer Motion',
    'links': [
      {
        'icon': <LuGithub/>,
        'link':'https://github.com/lfcyk/izmi-dio-wedding/',
      },
      {
        'icon': <LuExternalLink/>,
        'link':'https://izmi-dio.vercel.app/',
      },
    ],
  },
  {
    'name': 'Weather App',
    'thumbnail': weatherappThumb,
    'stack': 'Reactjs, Tailwind',
    'links': [
      {
        'icon': <LuGithub/>,
        'link':'https://github.com/lfcyk/weather-app/',
      },
      {
        'icon': <LuExternalLink/>,
        'link':'https://lfcyk.github.io/weather-app/',
      },
    ],
  },
];

const projects = [
  {
    'name': 'Weblogging',
    'thumbnail': webloggingThumb,
    'stack': 'HTML, CSS, ReactJS',
    'links': [
      {
        'icon': <LuGithub/>,
        'link':'https://github.com/lfcyk/weblogging/',
      },
      {
        'icon': <LuExternalLink/>,
        'link':'https://weblogging.netlify.app/',
      },
    ],
  },
  {
    'name': 'Etch-a-Sketch',
    'thumbnail': etchThumb,
    'stack': 'HTML, CSS, Javascript',
    'links': [
      {
        'icon': <LuGithub/>,
        'link':'https://github.com/lfcyk/Etch-a-Sketch/',
      },
      {
        'icon': <LuExternalLink/>,
        'link':'https://lfcyk.github.io/Etch-a-Sketch/',
      },
    ],
  },
  {
    'name': 'Calculator',
    'thumbnail': calcThumbnail,
    'stack': 'HTML, CSS, Javascript',
    'links': [
      {
        'icon': <LuGithub/>,
        'link':'https://github.com/lfcyk/calculator/',
      },
      {
        'icon': <LuExternalLink/>,
        'link':'https://lfcyk.github.io/calculator/',
      },
    ],
  },
]

export default function Projects({language}) {
  return (
    <div className='flex flex-col'>
        <h2 className="text-2xl px-7 mb-5">
          {
            language=='japanese'
            ?'個人プロジェクト'
            :'selected projects'
          }
        </h2>
        <div className="mb-5 px-7">
          <Separator/>
        </div>
        <div className="text-center opacity-70 flex lg:hidden justify-center flex-row items-center gap-3">
          <MdOutlineSwipe/>
          swipe to see other projects
          <MdOutlineSwipe/>
        </div>
        <div className="flex flex-col lg:px-10 max-w-[450px] md:max-lg:w-[350px] max-sm:max-w-[100vw] justify-center justify-self-center self-center ">
          <Carousel>
            <CarouselContent>
              {
                topProjects.map((project) => {
                  return (
                    <CarouselItem className="max-h-[60vh] items-center  flex flex-col" key={project.name}>
                      <div className="p-1 h-full w-fit px-5">
                        <Card className=' h-full w-fit border-2 border-white'>
                          <CardContent className="flex flex-col h-full items-center justify-center p-6  bg-base-100 w-fit ">
                            <div className="flex flex-col h-full items-center justify-center">
                              <Image 
                                src={project.thumbnail}
                                width={300}
                                alt={`${project.name}-thumbnail`}
                              />
                              <Separator className='mb-4 mt-8'/>
                              <h1 className="text-base-content text-2xl mb-2 text-center">{project.name}</h1>
                              <p className="text-base-content text-center">{project.stack}</p>
                            </div>
                            <div className="flex flex-row w-full text-base-content  text-3xl justify-center gap-8">
                              {
                                project.links.map((link) => {
                                  return (
                                    <a href={link.link} key={link.link} className="btn-ghost group transition duration-300 hover:text-primary p-2">
                                      {link.icon}
                                      <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-primary mt-2"></span>
                                    </a>
                                  )
                                })
                              }
                            </div>
                          </CardContent>
                        </Card>
                      </div>
                    </CarouselItem>
                  );
                })
              }
              <CarouselItem className="max-h-[60vh] items-center  flex flex-col">
                <div className="p-1 h-full w-fit px-5">
                  <Card className=' h-full w-fit border-2 border-white'>
                    <CardContent className="flex flex-col h-full items-center justify-center p-6  bg-base-100 w-fit ">
                      <div className="flex flex-col h-full items-center justify-center">
                        <Image 
                          src={wectTgThumb}
                          width={300}
                          alt={`wect-thumbnail`}
                        />
                        <Separator className='mb-4 mt-8'/>
                        <h1 className="text-base-content text-2xl mb-2 text-center">W-Eye-Cross-Talk <br/> Training Gate</h1>
                        <p className="text-base-content text-center">Kotlin, Android Studio, Jetpack Compose</p>
                      </div>
                      <div className="flex flex-row w-full  text-3xl justify-center gap-8 text-base-content">
                        <a href="files/wect-tg-slide.pdf" target="blank" locale={"false"} className="btn-ghost group transition duration-300 hover:text-primary p-2">
                          <RiSlideshowLine/>
                          <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-primary mt-2"></span>
                        </a>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
              <CarouselItem className="max-h-[60vh] items-center  flex flex-col">
                <div className="p-1 h-full w-fit px-5">
                  <Card className=' h-full w-fit border-2 border-white'>
                    <CardContent className="flex flex-col h-full items-center justify-center p-6  bg-base-100 w-fit ">
                      <div className="flex flex-col h-full items-center justify-center">
                        <Image 
                          src={hayfThumb}
                          width={300}
                          alt={`hayf-thumbnail`}
                        />
                        <Separator className='mb-4 mt-8'/>
                        <h1 className="text-base-content text-2xl mb-2 text-center">How Are You Flower?</h1>
                        <p className="text-base-content text-center">Python, Raspberry Pi, Tkinter</p>
                      </div>
                      <div className="flex flex-row w-full  text-3xl justify-center gap-8 text-base-content ">
                        <a href="/files/hayf-slide.pdf" target="blank" locale={"false"} className="btn-ghost group transition duration-300 hover:text-primary p-2">
                          <RiSlideshowLine/>
                          <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-primary mt-2"></span>
                        </a>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
              {
                projects.map((project) => {
                  return (
                    <CarouselItem className="max-h-[60vh] items-center  flex flex-col" key={project.name}>
                      <div className="p-1 h-full w-fit ">
                        <Card className=' h-full w-fit border-2 border-white'>
                          <CardContent className="flex flex-col h-full items-center justify-center p-6  bg-base-100 w-fit ">
                            <div className="flex flex-col h-full items-center justify-center">
                              <Image 
                                src={project.thumbnail}
                                width={300}
                                alt={`${project.name}-thumbnail`}
                              />
                              <Separator className='mb-4 mt-8'/>
                              <h1 className="text-base-content text-2xl mb-2 text-center">{project.name}</h1>
                              <p className="text-base-content text-center">{project.stack}</p>
                            </div>
                            <div className="flex flex-row w-full   text-3xl justify-center gap-8">
                              {
                                project.links.map((link) => {
                                  return (
                                    <a href={link.link} key={link.link} className="btn-ghost group transition duration-300 hover:text-primary p-2 text-base-content">
                                      {link.icon}
                                      <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-primary mt-2"></span>
                                    </a>
                                  )
                                })
                              }
                            </div>
                          </CardContent>
                        </Card>
                      </div>
                    </CarouselItem>
                  );
                })
              }
            </CarouselContent>
            <CarouselPrevious className='hidden lg:flex'/>
            <CarouselNext className='hidden lg:flex'/>
          </Carousel>
        </div>
    </div>
  )
}
