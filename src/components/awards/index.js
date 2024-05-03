import Image from 'next/image'
import EducationCard from '../education/card'
import monbuLogo from "../../images/mextlogo.jpg"
import { Separator } from '../ui/separator'

const awards = {
    english: [
        {
            'schoolName':"Japanese Government (MEXT) Scholarship",
            'schoolPicture':monbuLogo,
            'major':"a fully funded scholarship for international students",
            'attendedYear':"2019 - 2023",
        }
    ],
    japanese: [
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
        <section id="education" className="section education flex flex-col gap-5">
            <h2 className="text-2xl">
                {
                    language=='japanese'
                    ? '賞'
                    : 'awards'
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
