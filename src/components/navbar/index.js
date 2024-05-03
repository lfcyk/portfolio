'use client'

import { useState } from 'react';
import {ImMenu} from 'react-icons/im'
import Flag from 'react-world-flags'
import { Separator } from '../ui/separator';

const menuArray = {
	'english': [
		{
			'title' : 'education',
		},
		{
			'title' : 'experience',
		},
		{
			'title' : 'projects',
		},
		{
			'title' : 'skills',
		},	
		{
			'title' : 'contact',
		},	
	],
	'japanese': [
		{
			'title' : '教育',
		},
		{
			'title' : '経験',
		},
		{
			'title' : 'プロジェクト',
		},
		{
			'title' : 'スキル',
		},	
		{
			'title' : '連絡',
		},	
	]
};

function NavBar(props) {
	const [showMobileMenu, setShowMobileMenu] = useState(false);
	return (
		<div className='fixed top-0 z-50 bg-base-300 w-full flex flex-col justify-center align-middle'>
			<div className="navbar mx-auto">
				<div className="flex-1">
					<a className={`btn btn-ghost normal-case text-xl rounded-none lfcyk ${props.darkMode? '': 'text-primary'}`}>.lfcyk</a>
				</div>
				
				
				<div className="flex-none items-center justify-center">
					<ul className="  menu menu-horizontal px-1 flex flex-row items-center justify-center">
						{
							menuArray[props.language].map((menu, index) => {
								return (
									<div key={menu.title} className={`hidden md:flex mx-1`}>
										<li><a 
										className={props.currentPage==index? props.darkMode ?'bg-primary-content': 'bg-primary': ''}
										onClick={() => {props.scrollTo(menuArray.english[index].title);}}
										>
											{menu.title}
										</a></li>
									</div>
								)
							})
						}
						

						<div className=' flex flex-row justify-center items-center gap-2 ml-7'>
							<label className="cursor-pointer grid place-items-center">
								<input 
									checked={props.darkMode} 
									onChange={() => {
										props.changeTheme();
									}}
									type="checkbox" 
									value="synthwave" 
									className="toggle theme-controller bg-base-content row-start-1 col-start-1 col-span-2"/>
								<svg className="col-start-1 row-start-1 stroke-base-100 fill-base-100" xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="5"/><path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4"/></svg>
								<svg className="col-start-2 row-start-1 stroke-base-100 fill-base-100" xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>
							</label>
						</div>
						<div 
							className='h-full flex'
							onClick={() => {
								props.changeLanguage();
							}}
							>
							<li><a>
								{
									props.japaneseMode
									?
									<Flag 
										code="JP" 
										className='w-8'
										/>
									:
									<Flag 
										code="GB" 
										className='w-8'
										/>
								}
								
							</a></li>
						</div>
					</ul>
				</div>
				<div className="flex-none text-3xl pr-2 md:hidden">
					<div onClick={ () => {setShowMobileMenu(!showMobileMenu)}}>
						<ImMenu />
					</div>
				</div>
				
			</div>
			{
				showMobileMenu?
				<div className='flex flex-col'>
					<Separator/>
					{
						menuArray[props.language].map((menu, index) => {
							return (
								<div key={menu.title}>
									<div 
									className='py-8 text-center' 
									onClick={() => {
										props.scrollTo(menuArray.english[index].title);
										setShowMobileMenu(false);
									}}
									>
										{menu.title}
									</div>
									<Separator/>
								</div>
							)
						})
					}
				</div>
				:
				''
			}
		</div>
	);
}

export default NavBar
