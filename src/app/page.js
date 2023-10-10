import NavBar from "../components/navbar"
import Greeting from "../components/greeting"
import Education from "../components/education"
import Experience from "../components/experience"
import Awards from "../components/awards"
import Head from 'next/head'


export default function Home() {
	return (
		<>
			<Head>
				<meta name="viewport" content="width=device-width, initial-scale=1"/>
			</Head>

			<NavBar/>
			<Greeting/>
			<Experience/>
			<Education/>
			<Awards/>
		</>
	)
}	