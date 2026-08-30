'use client';
import dynamic from 'next/dynamic'
import Image from 'next/image'
import { useCallback, useEffect, useRef, useState } from "react";

import Greeting from "../components/greeting"
import Education from "../components/education"
import Experience from "../components/experience"
import Awards from "../components/awards"

import totoroPic from '@/images/totoro.png'
import skyPic from '@/images/sky.jpeg'
import spiritedAwayPic from '@/images/spiritedAway.jpg'
import theWindRisesPic from '@/images/theWindRises.jpg'
import nedStarkPic from '@/images/nedStark.jpg'
import Projects from '@/components/projects'
import Skills from '@/components/skills'
import Contact from '@/components/contact/page';

const NavBar = dynamic(() => import('../components/navbar'), { ssr: false })

export default function Home({initJp}) {
	const scrollContainerRef = useRef(null);
	const [darkMode, setDarkMode] = useState(true);
	const [japaneseMode, setJapaneseMode] = useState(initJp || false);
	const [currentPage, setCurrentPage] = useState(0);
	const [background, setBackground] = useState(0);

	const bgArray = [
		{
			src: totoroPic,
			alt: "Totoro"
		}, 
		{
			src: skyPic,
			alt: "sky"
		}, 
		{
			src: spiritedAwayPic,
			alt: "Spirited Away"
		}, 
		{
			src: theWindRisesPic,
			alt: "The Wind Rises"
		}, 
		{
			src: nedStarkPic,
			alt: "Eddard Stark"
		}, 
	];

	const language = japaneseMode? 'japanese' : 'english';
	
	const changeTheme = () => {
		setDarkMode(!darkMode);
	}

	function changeLanguage() {
		setJapaneseMode(!japaneseMode);
	}

	const updateVisibleSection = useCallback(() => {
		const container = scrollContainerRef.current;
		if (!container) return;

		if (window.innerWidth < 768 && container.scrollTop < window.innerHeight * 0.55) {
			setCurrentPage(-1);
			setBackground(0);
			return;
		}

		const sectionIds = ['experience', 'education', 'projects', 'skills', 'contact'];
		const containerRect = container.getBoundingClientRect();
		const viewportCenter = containerRect.top + container.clientHeight / 2;
		let closestIndex = 0;
		let closestDistance = Number.POSITIVE_INFINITY;

		sectionIds.forEach((sectionId, index) => {
			const section = document.getElementById(sectionId);
			if (!section) return;

			const sectionRect = section.getBoundingClientRect();
			const sectionCenter = sectionRect.top + sectionRect.height / 2;
			const distance = Math.abs(sectionCenter - viewportCenter);

			if (distance < closestDistance) {
				closestDistance = distance;
				closestIndex = index;
			}
		});

		setCurrentPage(closestIndex);
		setBackground(Math.min(closestIndex, 4));
	}, []);

	useEffect(() => {
		updateVisibleSection();
		window.addEventListener('resize', updateVisibleSection);

		return () => window.removeEventListener('resize', updateVisibleSection);
	}, [updateVisibleSection]);

	const scrollTo = (elementId) => {
		// document.getElementById(elementId).scrollIntoView();
		document.getElementById(elementId).scrollIntoView({behavior: 'smooth'});
	}
	return (
		<div className='flex flex-col bg-base-200' data-theme={darkMode? "night" : "emerald"}>
			<NavBar changeTheme={changeTheme} changeLanguage={changeLanguage} darkMode={darkMode} japaneseMode={japaneseMode} language={language} currentPage={currentPage} scrollTo={scrollTo}/>
			<div
				ref={scrollContainerRef}
				className='flex h-screen w-full flex-col overflow-x-hidden overflow-y-auto md:flex-row md:snap-y md:snap-mandatory md:overflow-y-scroll relative'
				onScroll={updateVisibleSection}
			>
				<Greeting language={language} currentPage={currentPage}/>
				<div className='h-screen w-[100vh] sticky top-0 hidden xl:block'>
					<Image
							src={bgArray[background].src} 
							fill={true}
							sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
							alt={bgArray[background].alt} 
							style={{objectFit: "cover"}}
						/>
				</div>				
				<div className='flex flex-col max-w-[600px] bg-base-200'>
					<div id='experience' className='min-h-screen shrink-0 max-md:scroll-mt-[64px] md:pt-[64px] flex flex-col justify-center px-7 py-12 snap-start'>
						<Experience language={language}/>
					</div>
					<div className='shrink-0 snap-start max-md:scroll-mt-[64px]' id='education'>
						<div className='min-h-screen md:pt-[64px] flex flex-col justify-center px-7 py-12'>
							<Education language={language}/>
							<Awards language={language}/>
						</div>
					</div>
					<div id='projects' className='shrink-0 snap-start max-md:scroll-mt-[64px]'>
						<div className='min-h-screen md:pt-[64px] flex flex-col justify-center py-12'>
							<Projects language={language}/>
						</div>
					</div>
					<div id='skills' className='shrink-0 snap-start max-md:scroll-mt-[64px]'>
						<div className='min-h-screen md:pt-[64px] flex flex-col justify-center py-12'>
							<Skills language={language} isDarkMode={darkMode}/>
						</div>
					</div>
					<div id='contact' className='shrink-0 snap-start max-md:scroll-mt-[64px]'>
						<div className='min-h-screen md:pt-[64px] flex flex-col justify-center py-12 items-center'>
							<Contact language={language}/>
						</div>
					</div>
					
					
				</div>
			</div>
		</div>
	)
}
