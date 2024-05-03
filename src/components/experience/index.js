import ExperienceCard from './card'
import HCILogo from "../../images/hareindologo.png"
import Harekbshk from "../../images/harelogo.webp"
import { Separator } from '../ui/separator'

const experience = {
    english: [
        {
            'companyName': 'PT. Harehare Creative Indonesia',
            'roleAndDuration': '(Software Engineer, 2023/08~)',
            'jobdesc': '',
            'companyLogo': HCILogo,
        },
        {
            'companyName': '株式会社Harehare',
            'roleAndDuration': '(Software Engineer Intern, 2021/08)',
            'jobdesc': '',
            'companyLogo': Harekbshk,
        },
    ],
    japanese: [
        {
            'companyName': 'PT. Harehare Creative Indonesia',
            'roleAndDuration': '(ソフトウェアエンジニア, 2023年08月～)',
            'jobdesc': '',
            'companyLogo': HCILogo,
        },
        {
            'companyName': '株式会社Harehare',
            'roleAndDuration': '(ソフトウェアエンジニア, 2021年08月)',
            'jobdesc': '',
            'companyLogo': Harekbshk,
        },
    ],
}

function Experience({language}) {
    return (
        <div className="education flex flex-col gap-5 md:h-screen justify-center items-start ">
            <h2 className="text-2xl">
            {
                language=='japanese'
                ?'経験'
                :'experience'
            }
            </h2>
            <Separator/>
            <div className="flex flex-col gap-7">
                {
                experience[language].map((company) => {
                    return <ExperienceCard 
                        key={company.companyName}
                        companyName={company.companyName}
                        roleAndDuration={company.roleAndDuration}
                        jobdesc={company.jobdesc}
                        companyLogo={company.companyLogo}
                    />
                })
                }
            </div>
        </div>
    )
}

export default Experience
