function NavBar() {
  return (
    <div className="navbar bg-base-100">
        <div className="flex-1">
            <a className="btn btn-ghost normal-case text-xl ml-20">lfcyk</a>
        </div>
        <div className="flex-none">
            <ul className="menu menu-horizontal px-1 mr-20">
                <li><a>experience</a></li>
                <li><a>projects</a></li>
                <li><a>skills</a></li>
                <li><a>education</a></li>
                <li><a>awards</a></li>
                <li><a>languages</a></li>
                <li><a>contact</a></li>
            </ul>
        </div>
    </div>
  )
}

export default NavBar
