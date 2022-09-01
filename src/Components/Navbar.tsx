import { Link } from "react-router-dom"

const Navbar = () => {
    return (
        <header className="top-nav d-flex align-items-center">
            <div className="container d-flex justify-content-between align-items-center">
                <h4 className="mb-0 text-primary" style={{float: 'left'}}>Next</h4>
                <nav className="nav nav-masthead justify-content-center" style={{float: 'right'}}>
                    <Link className="nav-link text-white" aria-current="page" to="/">Home</Link>
                    <Link className="nav-link text-white" to="/search">Search</Link>            
                </nav>
            </div>
            
      </header>
    )
}

export default Navbar;