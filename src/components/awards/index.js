import Image from 'next/image'
import EducationCard from '../education/card'
import monbuLogo from "../../images/mextlogo.jpg"
import universityOfTorontoLogo from "../../images/university_of_toronto_logo.jpg"
import { Separator } from '../ui/separator'

const awards = {
    english: [
        {
            'schoolName':"Self-Driving Cars Specialization",
            'schoolPicture':universityOfTorontoLogo,
            'major':"University of Toronto · Coursera",
        },
        {
            'schoolName':"Japanese Government (MEXT) Scholarship",
            'schoolPicture':monbuLogo,
            'major':"a fully funded scholarship for international students",
            'attendedYear':"2019 - 2023",
        }
    ],
    japanese: [
        {
            'schoolName':"自動運転車スペシャライゼーション",
            'schoolPicture':universityOfTorontoLogo,
            'major':"トロント大学 · Coursera",
        },
        {
            'schoolName':"文部科学省（MEXT）奨学金",
            'schoolPicture':monbuLogo,
            'major':"留学生のための全額支給奨学金",
            'attendedYear':"2019年～2023年",
        }
    ]
}

function Awards({language}) {
    return (
        <section className="section education flex flex-col gap-5">
            <h2 className="text-2xl">
                {
                    language=='japanese'
                    ? '受賞・資格'
                    : 'awards & certifications'
                }
            </h2>
            <Separator/>
            <div className="flex flex-col">
                {
                    awards[language].map((award) => {
                        return <EducationCard 
                            key={award.schoolName}
                            schoolName={award.schoolName}
                            schoolPicture={award.schoolPicture}
                            major={award.major}
                            attendedYear={award.attendedYear}
                    />
                    })
                }
                
                
            </div>
        </section>
    )
}

export default Awards
