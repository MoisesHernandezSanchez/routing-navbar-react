import { Link, useMatch, useResolvedPath } from 'react-router-dom'

export default function Navbar() {
  return (
    <nav className='nav'>
      <Link to='/' className='site-home'>
        Home
      </Link>
      <ul>
        <CustomLink to='./pricing'>Pricing</CustomLink>
        <CustomLink to='./about'>About</CustomLink>
      </ul>
    </nav>
  )
}

function CustomLink({ to, children, ...props }) {
  const resovledPath = useResolvedPath(to)
  const isActive = useMatch({ path: resovledPath.pathname, end: true })
  return (
    <li className={isActive ? 'active' : ''}>
      <Link to={to}>{children}</Link>
    </li>
  )
}
