import Image from 'next/image'
import purwadhikalogo from "../../images/purwadhikalogo.png"
import nitnclogo from "../../images/nitnclogo.png"
import jassologo from "../../images/jassologo.jpg"
import EducationCard from './card'

function Education() {
    return (
        <section id="education" className="section education flex flex-col gap-10 mb-10">
            <h2 className="text-2xl mx-auto w-min">EDUCATION</h2>
            <EducationCard 
                schoolName="Purwadhika Digital Technology School"
                schoolPicture={purwadhikalogo}
                major="Intensive Full Stack Web Development Bootcamp"
                attendedYear="2023/04~2023/08"
            />
            <EducationCard 
                schoolName="National Institute of Technology, Numazu College"
                schoolPicture={nitnclogo}
                major="Associate in Control and Computer Engineering"
                attendedYear="2020/04~2023/03"
            />
            <EducationCard 
                schoolName="Tokyo Japanese Language Education Center"
                schoolPicture={jassologo}
                major="Japanese Studies"
                attendedYear="2019/04~2020/03"
            />
        </section>
    )
}

export default Education
