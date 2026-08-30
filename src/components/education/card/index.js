import Image from 'next/image'

export default function EducationCard(props) {
  return (
    <div className="card school flex flex-col lg:flex-row gap-5 justify-start items-start lg:items-center ">
            <div className="school__header h-[70px] w-[70px] shrink-0 overflow-hidden rounded-xl bg-white p-2 shadow-sm ring-1 ring-base-content/10">
                <Image
                    src={props.schoolPicture}
                    width={70}
                    height={70}
                    className="h-full w-full object-contain"
                    alt={`logo of ${props.schoolName}`}
                />
            </div>
            <div className="school__description">
                <h3 className="font-bold text-lg">{props.schoolName}</h3>
                <p className="font-thin text-base-content text-base">
                    {props.major}
                    {props.attendedYear && <>, <span className="duration">{props.attendedYear}</span></>}
                </p>
            </div>
    </div>
  )
}
