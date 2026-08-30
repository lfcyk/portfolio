import Image from 'next/image'

export default function ExperienceCard(props) {
return (
	<div className="card company flex flex-col lg:flex-row gap-5 items-start lg:items-center">
		<div className="company__header h-[70px] w-[70px] shrink-0 overflow-hidden rounded-xl bg-white p-2 shadow-sm ring-1 ring-base-content/10">
			<Image
				src={props.companyLogo}
				width={70}
				height={70}
				className="h-full w-full object-contain"
				alt={`logo of ${props.companyName}`}
			/>
		</div>
		<div className="company__description">
			<h3 className="company-name font-bold text-lg">{props.companyName}</h3> 
			<span className="font-thin text-base-content text-base">{props.roleAndDuration}</span>
			<ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-relaxed">
				{props.highlights.map((highlight) => (
					<li key={highlight}>{highlight}</li>
				))}
			</ul>
		</div>
	</div>
	)
}
