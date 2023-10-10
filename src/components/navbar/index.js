'use client'

import {isMobile} from 'react-device-detect';
import {ImMenu} from 'react-icons/im'

function MobileNavBar () {
	if (isMobile) {
	return <div className="flex-none text-3xl pr-2">
			<ImMenu/>
		</div>
	} 
	return <div className="flex-none">
			<ul className="menu menu-horizontal px-1 ">
				<li><a>experience</a></li>
				<li><a>projects</a></li>
				<li><a>skills</a></li>
				<li><a>education</a></li>
				<li><a>awards</a></li>
				<li><a>languages</a></li>
				<li><a>contact</a></li>
			</ul>
		</div>
}

function NavBar() {
return (
	<div className="navbar bg-base-200">
		<div className="flex-1">
			<a className="btn btn-ghost normal-case text-xl rounded-none lfcyk">.lfcyk</a>
		</div>
		<MobileNavBar/>
	</div>
)
}

export default NavBar
