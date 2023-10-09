import ExperienceCard from './card'
import HCILogo from "../../images/hareindologo.png"
import Harekbshk from "../../images/Harelogo.webp"

function Education() {
    return (
        <section id="education" className="section education flex flex-col gap-10 mb-10">
            <h2 className="text-2xl mx-auto w-min">Experience</h2>
            <div className="flex flex-col gap-3">
                <ExperienceCard companyName="PT. Harehare Creative Indonesia"
                    roleAndDuration="(Software Engineer Intern, 2023/08~)"
                    jobdesc="Full-Stack Web and Mobile Developer"
                    companyLogo={HCILogo}
                    />
                <ExperienceCard companyName="株式会社Harehare"
                    roleAndDuration="(Software Engineer Intern, 2021/08)"
                    jobdesc=""
                    companyLogo={Harekbshk}
                    />
            </div>
        </section>
    )
}

export default Education
