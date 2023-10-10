import Image from 'next/image'

export default function ExperienceCard(props) {
return (
	<div class="card company flex flex-row gap-5 w-2/5 p-1 mx-auto min-w-[350px] items-center">
		<div class="company__header min-w-[70px]">
			<Image src={props.companyLogo} width={70}/>
		</div>
		<div class="company__description">
			<h3 class="company-name font-bold text-lg">{props.companyName}</h3> 
			<span className="font-thin text-gray-200 text-base">{props.roleAndDuration}</span>
			<p>{props.jobdesc} </p>
		</div>
	</div>
	)
}
