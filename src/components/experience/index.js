'use client'

import { useState } from 'react'
import ExperienceCard from './card'
import HCILogo from "../../images/hareharelogo.jpg"
import Harekbshk from "../../images/harelogo.webp"
import Komatsulogo from "../../images/komatsulogo.png"
import { Separator } from '../ui/separator'
import { Button } from '../ui/button'
import { LuChevronDown, LuChevronUp } from 'react-icons/lu'

const experience = {
    english: [
        {
            'companyName': 'Komatsu Kaihatsu Kogyo',
            'roleAndDuration': '(Embedded Software Engineer, 2025/04~)',
            'highlights': [
                'Develop and modify model-based control functions for hybrid vehicle systems using MATLAB/Simulink.',
                'Design and execute MIL, SIL, and HIL test scenarios to verify control-system behavior across varied operating conditions.',
                'Analyze simulation and test results, trace discrepancies, and refine control models based on the findings.',
                'Perform unit testing and document procedures, results, and findings for engineering review and iterative improvement.',
            ],
            'companyLogo': Komatsulogo,
        },
        {
            'companyName': 'PT. Harehare Creative Indonesia',
            'roleAndDuration': '(Software Engineer, 2023/08～2025/01)',
            'highlights': [
                'Developed Flutter applications with real-time multiplayer features, using Socket.IO to synchronize user actions and application state.',
                'Maintained and debugged a student management system built with Laravel, React, and MySQL, resolving registration, access, and payment issues.',
            ],
            'companyLogo': HCILogo,
        },
        {
            'companyName': '株式会社Harehare',
            'roleAndDuration': '(Software Engineer Intern, 2021/08)',
            'highlights': [
                'Joined a summer software engineering internship and built a prototype with Bubble.',
            ],
            'companyLogo': Harekbshk,
            'isInternship': true,
        },
        
    ],
    japanese: [
        {
            'companyName': '小松開発工業株式会社',
            'roleAndDuration': '(組込みエンジニア, 2025年04月～)',
            'highlights': [
                'MATLAB/Simulinkを用いたハイブリッド車両制御機能のモデルベース開発・改修。',
                'さまざまな運転条件における制御システムの挙動・性能を検証するMIL・SIL・HILテストシナリオの設計と実行。',
                'シミュレーションおよび試験結果を解析し、差異や想定外の挙動を特定したうえで制御モデルを改善。',
                '単体テストを実施し、手順・結果・検出事項を文書化して設計レビューと継続的な改善を支援。',
            ],
            'companyLogo': Komatsulogo,
        },
        {
            'companyName': 'PT. Harehare Creative Indonesia',
            'roleAndDuration': '(ソフトウェアエンジニア, 2023年08月～2025年01月)',
            'highlights': [
                'FlutterとSocket.IOを用いて、ユーザー操作とアプリ状態を同期するリアルタイム対戦機能を開発。',
                'Laravel・React・MySQL製の学生管理システムを保守し、登録・権限管理・決済機能の不具合を調査・解決。',
            ],
            'companyLogo': HCILogo,
        },
        {
            'companyName': '株式会社Harehare',
            'roleAndDuration': '(ソフトウェアエンジニア, 2021年08月)',
            'highlights': [
                'ソフトウェア開発のサマーインターンシップに参加し、Bubbleを用いてプロトタイプを制作。',
            ],
            'companyLogo': Harekbshk,
            'isInternship': true,
        },
    ],
}

function Experience({language}) {
    const [showInternship, setShowInternship] = useState(false)
    const primaryExperience = experience[language].filter((company) => !company.isInternship)
    const internship = experience[language].find((company) => company.isInternship)
    const toggleLabel = language == 'japanese'
        ? (showInternship ? 'インターンシップを閉じる' : 'インターンシップをさらに表示')
        : (showInternship ? 'Hide internship' : 'Show more · Harehare internship')

    return (
        <div className="education flex flex-col gap-5 justify-center items-start">
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
                primaryExperience.map((company) => {
                    return <ExperienceCard 
                        key={company.companyName}
                        companyName={company.companyName}
                        roleAndDuration={company.roleAndDuration}
                        highlights={company.highlights}
                        companyLogo={company.companyLogo}
                    />
                })
                }
                <div>
                    <Button
                        type="button"
                        variant="outline"
                        aria-expanded={showInternship}
                        aria-controls="harehare-internship"
                        onClick={() => setShowInternship((isVisible) => !isVisible)}
                        className="h-11 rounded-full border-primary/40 bg-base-100/70 px-5 text-base-content shadow-sm hover:bg-primary hover:text-primary-content"
                    >
                        {toggleLabel}
                        {showInternship
                            ? <LuChevronUp className="ml-2" aria-hidden="true" />
                            : <LuChevronDown className="ml-2" aria-hidden="true" />
                        }
                    </Button>
                    <div id="harehare-internship" hidden={!showInternship} className="mt-6">
                        <ExperienceCard
                            companyName={internship.companyName}
                            roleAndDuration={internship.roleAndDuration}
                            highlights={internship.highlights}
                            companyLogo={internship.companyLogo}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Experience
