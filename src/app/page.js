import NavBar from "../components/navbar"
import Greeting from "../components/greeting"
import Education from "../components/education"
import Experience from "../components/experience"
import Awards from "../components/awards"

export default function Home() {
	return (
		<>
			<NavBar/>
			<Greeting/>
			<Experience/>
			<Education/>
			<Awards/>
		</>
	)
}	