import { FaLinkedin, FaGithub } from "react-icons/fa"
import totoroPic from '@/images/totoro.png'
import Image from 'next/image'
import Link from "next/link"
import {
	LuBriefcase,
	LuCode2,
	LuFolderKanban,
	LuGauge,
	LuGraduationCap,
	LuMail,
} from "react-icons/lu"

const sectionMessages = {
	english: [
		{
			eyebrow: 'Automotive software engineer',
			title: 'Driven by smarter mobility',
			detail: 'ADAS · model-based development · vehicle control',
			accent: 'from-cyan-400 to-blue-500',
			icon: LuGauge,
		},
		{
			eyebrow: 'Now viewing · 01',
			title: 'Building & verifying vehicle control',
			detail: 'Komatsu Kaihatsu Kogyo · Aichi, Japan',
			accent: 'from-orange-400 to-rose-500',
			icon: LuBriefcase,
		},
		{
			eyebrow: 'Now viewing · 02',
			title: 'Control meets computer engineering',
			detail: 'NIT Numazu · MEXT scholar',
			accent: 'from-violet-400 to-fuchsia-500',
			icon: LuGraduationCap,
		},
		{
			eyebrow: 'Now viewing · 03',
			title: 'Autonomy in motion',
			detail: 'CARLA lane detection · Pure Pursuit · PID',
			accent: 'from-sky-400 to-cyan-500',
			icon: LuFolderKanban,
		},
		{
			eyebrow: 'Now viewing · 04',
			title: 'From models to production code',
			detail: 'C/C++ · MATLAB/Simulink · Python · CARLA',
			accent: 'from-emerald-400 to-lime-500',
			icon: LuCode2,
		},
		{
			eyebrow: 'Now viewing · 05',
			title: 'Let’s build safer mobility',
			detail: 'Open to ADAS & automotive software conversations',
			accent: 'from-amber-300 to-orange-500',
			icon: LuMail,
		},
	],
	japanese: [
		{
			eyebrow: '自動車ソフトウェアエンジニア',
			title: 'より賢く安全なモビリティへ',
			detail: 'ADAS・モデルベース開発・車両制御',
			accent: 'from-cyan-400 to-blue-500',
			icon: LuGauge,
		},
		{
			eyebrow: '表示中 · 01',
			title: '車両制御を開発し、確かめる',
			detail: '小松開発工業株式会社 · 愛知県',
			accent: 'from-orange-400 to-rose-500',
			icon: LuBriefcase,
		},
		{
			eyebrow: '表示中 · 02',
			title: '制御と情報工学をつなぐ',
			detail: '沼津高専 · 国費外国人留学生',
			accent: 'from-violet-400 to-fuchsia-500',
			icon: LuGraduationCap,
		},
		{
			eyebrow: '表示中 · 03',
			title: '自動運転をシミュレーションから',
			detail: 'CARLA・車線検出・Pure Pursuit・PID',
			accent: 'from-sky-400 to-cyan-500',
			icon: LuFolderKanban,
		},
		{
			eyebrow: '表示中 · 04',
			title: 'モデルから実装まで',
			detail: 'C/C++・MATLAB/Simulink・Python・CARLA',
			accent: 'from-emerald-400 to-lime-500',
			icon: LuCode2,
		},
		{
			eyebrow: '表示中 · 05',
			title: '安全なモビリティを一緒に',
			detail: 'ADAS・自動車ソフトウェアについてお話ししましょう',
			accent: 'from-amber-300 to-orange-500',
			icon: LuMail,
		},
	],
}

export default function Greeting({language, currentPage}) {
	const messageIndex = Math.min(Math.max(currentPage + 1, 0), 5)
	const activeMessage = sectionMessages[language][messageIndex]
	const ActiveIcon = activeMessage.icon

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
		<aside
			aria-atomic="true"
			aria-live="polite"
			className="pointer-events-none fixed left-4 right-4 top-20 z-30 md:absolute md:left-auto md:right-9 md:top-24 md:w-[330px]"
		>
			<div
				key={`${language}-${currentPage}`}
				className="section-popover relative rounded-2xl border border-base-content/15 bg-base-100/90 p-4 pl-5 text-base-content shadow-2xl backdrop-blur-md"
			>
				<span className={`absolute inset-y-0 left-0 w-1.5 rounded-l-2xl bg-gradient-to-b ${activeMessage.accent}`} />
				<div className="flex items-start gap-3">
					<span className={`grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-gradient-to-br text-xl text-white shadow-lg ${activeMessage.accent}`}>
						<ActiveIcon aria-hidden="true" />
					</span>
					<div>
						<p className="text-[0.65rem] font-bold uppercase tracking-[0.18em] text-primary">{activeMessage.eyebrow}</p>
						<p className="mt-0.5 font-bold leading-tight">{activeMessage.title}</p>
						<p className="mt-1 hidden text-xs leading-relaxed opacity-65 sm:block">{activeMessage.detail}</p>
					</div>
				</div>
				<span className="absolute -bottom-2 right-10 h-4 w-4 rotate-45 border-b border-r border-base-content/15 bg-base-100/90" />
			</div>
		</aside>
		<div className="h-screen flex flex-col justify-end p-3 md:p-9 items-end z-10 max-xl:text-gray-200">		
			<div className="flex flex-col justify-end items-end max-w-md">
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
				<p className="my-0 w-fit text-right leading-relaxed">
					{
						language=='japanese'?
						<span>
							ハイブリッド車両制御の<span className="text-primary-focus">モデルベース開発・検証</span>に携わる
							<span className="text-primary">自動車ソフトウェアエンジニア</span>です。
							ADAS・自動運転技術に強い情熱を持ち、MATLAB/Simulink、MIL/SIL/HIL、Python、CARLAを通じて、
							制御のアイデアを信頼性の高いソフトウェアへ落とし込むことを目指しています。
							Web・モバイル開発の経験も活かしながら、新しい技術を学び続けています。
						</span>
						:
						<span>
							an <span className="text-primary">automotive software engineer</span> experienced in model-based development and verification for hybrid vehicle control systems. I&apos;m passionate about ADAS and autonomous driving, turning control ideas into reliable software through MATLAB/Simulink, MIL/SIL/HIL testing, Python, CARLA, and computer vision. I also bring a strong web and mobile background and enjoy learning technologies that connect software with real-world vehicles.
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
					<Link href="/files/resume.pdf" target="_blank" rel="noreferrer" locale={"false"} className="p-2">
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
