export default function Navbar() {
    return (
        <>
            <nav style={{ backgroundColor: "#CBC3E3", }} className="navbar navbar-expand-lg">
                <div className="container-fluid">
                    <a className="navbar-brand" href="/">Navbar</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavDropdown">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="/games">Games</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/learning">Learning</a>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="/about" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    About
                                </a>
                                <ul className="dropdown-menu transit">
                                    <li><a className="dropdown-item" href="/about/team">The Team</a></li>
                                    <li><a className="dropdown-item" href="/about/mission">Our Mission</a></li>
                                    <li><a className="dropdown-item" href="/about/hcp">Husky Coding Project</a></li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}