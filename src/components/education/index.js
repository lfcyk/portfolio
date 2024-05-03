import nitnclogo from "../../images/nitnclogo.png"
import jassologo from "../../images/jassologo.jpg"
import EducationCard from './card'
import { Separator } from "../ui/separator"

const education = {
    english: [
        {
            'schoolName': "National Institute of Technology, Numazu College",
            'schoolPicture': nitnclogo,
            'major':"Associate in Control and Computer Engineering",
            'attendedYear':"2020/04~2023/03",
        },
        {
            'schoolName': "Tokyo Japanese Language Education Center",
            'schoolPicture': jassologo,
            'major':"Japanese Studies",
            'attendedYear':"2019/04~2020/03",
        },
    ],
    japanese: [
        {
            'schoolName': "沼津工業高等専門学校",
            'schoolPicture': nitnclogo,
            'major':"制御情報工学科",
            'attendedYear':"2020年04月～2023年03月",
        },
        {
            'schoolName': "東京日本語教育センター（JASSO）",
            'schoolPicture': jassologo,
            'major':"日本語",
            'attendedYear':"2019年04月～2020年03月",
        },
    ],
}

function Education({language}) {
    return (
        <section id="education" className="section education flex flex-col gap-5 pb-16">
            <h2 className="text-2xl">
                {
                    language=='japanese'
                    ? '教育'
                    : 'education'
                }
                
            </h2>
            <Separator/>
            <div className="flex flex-col gap-7">
                {
                    education[language].map((school) => {
                        return (
                            <EducationCard 
                                key={school.schoolName}
                                schoolName={school.schoolName}
                                schoolPicture={school.schoolPicture}
                                major={school.major}
                                attendedYear={school.attendedYear}
                            />
                        )
                    })
                }
            </div>
        </section>
    )
}

export default Education
