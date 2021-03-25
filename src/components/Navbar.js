const Navbar = () => {
    return (
        <nav className = 'navbar' id = "home">
            <h1>noah<span>.ife</span></h1>
            <div className = "links">
                <a href = "/">Home</a>
                <a href = "#about">About</a>
                <a href = "#project">Project</a>
            </div>
            <a href = "#contact" className = "nav-button"><button className = "contact-link">Contact</button></a>
        </nav>
    );
}
 
export default Navbar;