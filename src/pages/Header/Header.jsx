import { Link, Outlet } from 'react-router-dom'
import classes from './Header.module.css'

const Header = () => {
  return (
    <>

    <header className={classes.header}>
      <nav className={classes.nav}>
        <div className={classes.logo}>Logo</div>
        <ul className={classes.navbar}>
          <li><Link to='/' className={classes.link}>Home</Link></li>
          <li><Link  className={classes.link}>Courses</Link></li>
          <li><Link className={classes.link}>About</Link></li>
          <li><Link className={classes.link}>Team</Link></li>
          <li><Link className={classes.link}>Blog</Link></li>
          <li><Link className={classes.link}>Contact</Link></li>
          <li>
            <input type='text' />
          </li>
        </ul>
      </nav>
    </header>
    <Outlet />
    </>
  )
}

export default Header