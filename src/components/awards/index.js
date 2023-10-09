import Image from 'next/image'
import EducationCard from '../education/card'
import monbuLogo from "../../images/mextlogo.jpg"

function Awards() {
    return (
        <section id="education" className="section education flex flex-col gap-10 mb-10">
            <h2 className="text-2xl mx-auto w-min">Awards</h2>
            <div className="flex flex-col gap-3">
                <EducationCard 
                    schoolName="Japanese Government (MEXT) Scholarship"
                    schoolPicture={monbuLogo}
                    major="a fully funded scholarship for international students"
                    attendedYear="2019 - 2023"
                />
            </div>
        </section>
    )
}

export default Awards
