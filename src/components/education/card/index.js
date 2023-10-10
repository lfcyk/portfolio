import Image from 'next/image'

export default function EducationCard(props) {
  return (
    <div className="card school flex flex-row gap-5 w-2/5 mx-auto p-2 min-w-[350px] items-center">
            <div className="school__header min-w-[70px]">
                <Image src={props.schoolPicture} width={70}/>
            </div>
            <div className="school__description">
                <h3 className="font-bold text-lg">{props.schoolName}</h3>
                <p className="font-thin text-gray-200 text-base">{props.major}, <span className="duration">{props.attendedYear}</span></p>
            </div>
    </div>
  )
}
