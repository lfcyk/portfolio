import ExperienceCard from './card'
import HCILogo from "../../images/hareindologo.png"
import Harekbshk from "../../images/harelogo.webp"
import Komatsulogo from "../../images/komatsulogo.png"
import { Separator } from '../ui/separator'

const experience = {
    english: [
        {
            'companyName': 'Komatsu Kaihatsu Kogyo',
            'roleAndDuration': '(Embedded Software Engineer, 2025/04~)',
            'jobdesc': 'MATLAB/SIMULINK、C++',
            'companyLogo': Komatsulogo,
        },
        {
            'companyName': 'PT. Harehare Creative Indonesia',
            'roleAndDuration': '(Software Engineer, 2023/08～2025/01)',
            'jobdesc': 'Nextjs, Flutter, Laravel, MySQL',
            'companyLogo': HCILogo,
        },
        {
            'companyName': '株式会社Harehare',
            'roleAndDuration': '(Software Engineer Intern, 2021/08)',
            'jobdesc': 'Bubble (Summer Internship)',
            'companyLogo': Harekbshk,
        },
        
    ],
    japanese: [
        {
            'companyName': '小松開発工業株式会社',
            'roleAndDuration': '(組込みエンジニア, 2025年04月～)',
            'jobdesc': 'MATLAB/SIMULINK、C++',
            'companyLogo': Komatsulogo,
        },
        {
            'companyName': 'PT. Harehare Creative Indonesia',
            'roleAndDuration': '(ソフトウェアエンジニア, 2023年08月～2025年01月)',
            'jobdesc': 'Nextjs, Flutter, Laravel, MySQL',
            'companyLogo': HCILogo,
        },
        {
            'companyName': '株式会社Harehare',
            'roleAndDuration': '(ソフトウェアエンジニア, 2021年08月)',
            'jobdesc': 'Bubble (サマーインターンシップ)',
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
