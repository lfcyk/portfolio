import { FaLinkedin, FaGithub } from "react-icons/fa"
import totoroPic from '@/images/totoro.png'
import Image from 'next/image'
import Link from "next/link"

export default function Greeting({language}) {
return (
	<div className="lg:min-w-[500px] w-full md:sticky top-0 bg-base-100 h-screen relative flex flex-col">
		<Image
			src={totoroPic} 
			fill={true}
			sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
			alt={`totoro`} 
			style={{
				objectFit: "cover",
				filter: 'brightness(20%)',
			}}
			className="flex xl:hidden"
		/>
		<div className="h-screen flex flex-col justify-end p-3 md:p-9 items-end z-10 max-xl:text-gray-200">		
			<div className="flex flex-col justify-end items-end  max-w-sm">
				<h1 className="font-bold  text-[50px] mb-0 text-right ">
					{
						language=='japanese'?
						<span>どうも、<br className="flex"/></span>
						:
						'Hi, I\'m ' 
					}
					
					<span className="text-[hsl(var(--p))]">
					{
						language=='japanese'?
						'ウィラ'
						:
						'Willa!' 
					}
					</span>
					{
						language=='japanese'?
						'です！'
						:
						'' 
					}
				</h1>
				<p className="my-0 w-fit text-right">
					{
						language=='japanese'?
						<span>
							<span className="text-primary-focus">Web・モバイル・自動車向け組込みシステム</span>まで<br className="flex"/>幅広い経験を持ち、新しい技術を学ぶのが好きな <br className="flex"/>
							<span className="text-primary">
								ソフトウェアエンジニア
							</span>
							です！
						</span>
						:
						<span>
							a <span className="text-primary">software engineer</span> who loves exploring new technologies, with experience across web, mobile, and automotive embedded systems. 
						</span>
					}
					
				</p>
				<div className="flex flex-row items-center gap-1 mt-5 max-lg:text-primary">
					<a href="https://www.linkedin.com/in/willa-waliyadin-07b709118/" className="text-5xl btn-ghost group transition duration-300 hover:text-primary p-2">
						<FaLinkedin />	
						<span className=" mt-1 block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-primary"></span>
					</a>
					<a href="https://github.com/lfcyk" className="text-5xl btn-ghost group transition duration-300 hover:text-primary p-2">
						<FaGithub/>
						<span className=" mt-1 block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-primary"></span>
					</a>
					<Link href="/files/resume.pdf" target="blank" locale={"false"} className="p-2">
						<button className="btn btn-primary px-10 text-primary hover:text-white bg-transparent  rounded-none border-2 hover:bg-primary">
							{
								language=='japanese'
								?'履歴書'
								:'Resume'
							}
							
						</button>
					</Link>
				</div>    
			</div>	
		</div>
	</div>
)
}
