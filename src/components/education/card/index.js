import Image from 'next/image'

export default function EducationCard(props) {
  return (
    <div className="card school flex flex-col lg:flex-row gap-5 justify-start items-start lg:items-center ">
            <div className="school__header min-w-[70px]">
                <Image src={props.schoolPicture} width={70} alt={`logo of ${props.schoolName}`}/>
            </div>
            <div className="school__description">
                <h3 className="font-bold text-lg">{props.schoolName}</h3>
                <p className="font-thin text-base-content text-base">{props.major}, <span className="duration">{props.attendedYear}</span></p>
            </div>
    </div>
  )
}
