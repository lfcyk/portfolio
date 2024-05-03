import Image from 'next/image'

export default function ExperienceCard(props) {
return (
	<div className="card company flex flex-col lg:flex-row gap-5 items-start lg:items-center">
		<div className="company__header min-w-[70px] pt-3">
			<Image src={props.companyLogo} width={70} alt={`logo of ${props.companyName}`}/>
		</div>
		<div className="company__description">
			<h3 className="company-name font-bold text-lg">{props.companyName}</h3> 
			<span className="font-thin text-base-content text-base">{props.roleAndDuration}</span>
			<p>{props.jobdesc} </p>
		</div>
	</div>
	)
}
