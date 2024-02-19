import { Link } from "@tanstack/react-router"
export default function Navbar() {
    return (
        <>
            <nav style={{ backgroundColor: "#CBC3E3", }} className="navbar navbar-expand-lg sticky-top">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/">Cool Husky Games</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavDropdown">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/games">Games</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/learning">Learning</Link>
                            </li>
                            <li className="nav-item dropdown">
                                <Link className="nav-link dropdown-toggle" to="/about" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    About
                                </Link>
                                <ul className="dropdown-menu transit">
                                    <li><Link className="dropdown-item" to="/about/team">The Team</Link></li>
                                    <li><Link className="dropdown-item" to="/about/mission">Our Mission</Link></li>
                                    <li><Link className="dropdown-item" to="/about/hcp">Husky Coding Project</Link></li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}