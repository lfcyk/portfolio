import Image from 'next/image'

export default function EducationCard(props) {
  return (
    <div className="card school flex flex-row gap-5 w-2/5 mx-auto p-2">
            <div className="school__header">
                <Image src={props.schoolPicture} width={70}/>
            </div>
            <div className="school__description">
                <h3 className="font-bold text-lg">{props.schoolName}</h3>
                <p>{props.major}, <span className="duration">{props.attendedYear}</span></p>
            </div>
    </div>
  )
}
