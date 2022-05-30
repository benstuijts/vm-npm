const VM_Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg bg-light border-bottom">
            <div className="container-fluid">
                <a className="navbar-brand" href="/">
                    <img
                        src="https://voornemakelaars.nl/img/VM-logo-liggend.svg"
                        alt="Voorne Makelaars Logo"
                        height="32"
                    />
                </a>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNavAltMarkup"
                    aria-controls="navbarNavAltMarkup"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div
                    className="collapse navbar-collapse"
                    id="navbarNavAltMarkup"
                >
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link" href="/aanbod">
                                Aanbod
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/aanbod">
                                Verkopen
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/aanbod">
                                Kopen
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/aanbod">
                                Informatie
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/aanbod">
                                Contact
                            </a>
                        </li>
                    </ul>
                    
                </div>
            </div>
        </nav>
    );
};

export default VM_Navbar;
