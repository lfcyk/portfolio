import Image from 'next/image'

export default function ExperienceCard(props) {
return (
	<div class="card company flex flex-row gap-5 w-2/5 p-3 mx-auto	">
		<div class="company__header">
			<Image src={props.companyLogo} width={70}/>
		</div>
		<div class="company__description">
			<h3 class="company-name font-bold text-lg">{props.companyName}</h3> <span class="role">{props.roleAndDuration}</span>
			<p>{props.jobdesc} </p>
		</div>
	</div>
	)
}
