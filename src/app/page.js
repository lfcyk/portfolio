'use client';
import dynamic from 'next/dynamic'
import Image from 'next/image'
import { useRef, useEffect, useState } from "react";
import useScrollSnap from "react-use-scroll-snap";

import Greeting from "../components/greeting"
import Education from "../components/education"
import Experience from "../components/experience"
import Awards from "../components/awards"

import totoroPic from '@/images/totoro.png'
import Projects from '@/components/projects'
import Skills from '@/components/skills'
import Contact from '@/components/contact/page';

const NavBar = dynamic(() => import('../components/navbar'), { ssr: false })

export default function Home({initJp}) {
	const ref = useRef();	
	const [darkMode, setDarkMode] = useState(true);
	const [japaneseMode, setJapaneseMode] = useState(initJp || false);
	const [currentPage, setCurrentPage] = useState(0);

	const language = japaneseMode? 'japanese' : 'english';
	
	const changeTheme = () => {
		setDarkMode(!darkMode);
	}

	function changeLanguage() {
		setJapaneseMode(!japaneseMode);
	}

	const getscroll = () => {
		const scroll = Math.abs((ref.current.getBoundingClientRect().top - ref.current.offsetTop));
		const page = Math.round(scroll/window.innerHeight);
		setCurrentPage(page);
	};

	const scrollTo = (elementId) => {
		// document.getElementById(elementId).scrollIntoView();
		document.getElementById(elementId).scrollIntoView({behavior: 'smooth'});
	}
	return (
		<div className='flex flex-col bg-base-200' data-theme={darkMode? "night" : "emerald"}>
			<NavBar changeTheme={changeTheme} changeLanguage={changeLanguage} darkMode={darkMode} japaneseMode={japaneseMode} language={language} currentPage={currentPage} scrollTo={scrollTo}/>
			<div className='flex flex-col md:flex-row w-screen h-screen overflow-auto md:snap-y md:snap-mandatory md:overflow-y-scroll relative' 
				
				onScroll={getscroll}
				>
				<Greeting language={language}/>
				<div className='h-screen w-[100vh] sticky top-0 hidden xl:block'>
					<Image
							src={totoroPic} 
							fill={true}
							sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
							alt={`totoro`} 
							style={{objectFit: "cover"}}
						/>
				</div>				
				<div className='flex flex-col max-w-[600px] bg-base-200 ' ref={ref}>
					<div id='experience' className='md:h-screen  max-md:scroll-mt-[30px] md:pt-[64px]  flex flex-col justify-center  px-7 max-lg:py-10  snap-center'>
						<Experience language={language}/>
					</div>
					<div className=' snap-center max-md:scroll-mt-[30px]' id='education'>
						<div className='md:h-screen  md:pt-[64px]  flex flex-col justify-center px-7 max-lg:py-10 '>
							<Education language={language}/>
							<Awards language={language}/>
						</div>
					</div>
					<div id='projects' className=' snap-center max-md:scroll-mt-[30px]'>
						<div className='md:h-screen  md:pt-[64px]  flex flex-col justify-center max-lg:py-10 '>
							<Projects language={language}/>
						</div>
					</div>
					<div id='skills' className=' snap-center max-md:scroll-mt-[30px] '>
						<div className='md:h-screen md:pt-[64px]  flex flex-col justify-center max-lg:py-10 '>
							<Skills language={language} isDarkMode={darkMode}/>
						</div>
					</div>
					<div id='contact' className=' snap-center  max-md:scroll-mt-[30px]'>
						<div className='md:h-screen md:pt-[64px]  flex flex-col justify-center max-lg:py-10 items-center'>
							<Contact language={language}/>
						</div>
					</div>
					
					
				</div>
			</div>
		</div>
	)
}	