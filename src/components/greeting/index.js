import styles from "./styles.css"
import { FaLinkedin, FaGithub } from "react-icons/fa"

export default function Greeting() {
return (
	<div>
		<div className="intro">
			<h1 className="font-bold">Hi, I am <span className="blue">Willa!</span></h1>
			<p>I am passionate about software engineering and technology in general</p>
			<div className="flex flex-row items-center gap-4 w-min mx-auto mt-5">
				{/* <a href="files/resume.pdf" target="blank"> */}
					<button className="btn btn-primary px-10 text-white bg-transparent rounded-none border-2">Resume</button>
				{/* </a> */}
				<a href="https://www.linkedin.com/in/willa-waliyadin-07b709118/" className="text-4xl btn-ghost">
					<FaLinkedin />	
				</a>
				<a href="https://github.com/lfcyk" className="text-4xl btn-ghost">
					<FaGithub/>
				</a>
			</div>    
		</div>
	</div>
)
}
