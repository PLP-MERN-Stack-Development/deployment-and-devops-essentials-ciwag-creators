import { Link } from 'react-router-dom'


export default function Navbar(){
return (
<nav className="nav">
<div className="nav-inner container">
<Link to="/" className="brand">BioVerse Academy</Link>
<div className="links">
<Link to="/">Home</Link>
<Link to="/about">About</Link>
</div>
</div>
</nav>
)
}