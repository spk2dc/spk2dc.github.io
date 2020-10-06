import React from "react"
import { Link } from "gatsby"

const Layout = props => {
  const { title, children } = props
  const [toggleNav, setToggleNav] = React.useState(false)
  return (
    <div className={`site-wrapper ${toggleNav ? `site-head-open` : ``}`}>
      <header className="site-head">
        <div className="site-head-container">
          <a
            className="nav-burger"
            href={`#`}
            onClick={() => setToggleNav(!toggleNav)}
          >
            <div
              className="hamburger hamburger--collapse"
              aria-label="Menu"
              role="button"
              aria-controls="navigation"
            >
              <div className="hamburger-box">
                <div className="hamburger-inner" />
              </div>
            </div>
          </a>
          <nav id="swup" className="site-head-left">
            <ul className="nav" role="menu">
              <li className="nav-home" role="menuitem">
                <Link to={`/`} activeClassName="nav-link-current">
                  Home
                </Link>
              </li>
              {/* <li className="nav-about" role="menuitem">
                <Link to={`/about`}>About</Link>
              </li> */}
              <li className="nav-projects" role="menuitem">
                <Link to={`/projects`} activeClassName="nav-link-current">
                  Projects
                </Link>
              </li>
              <li className="nav-resume" role="menuitem">
                <Link to={`/resume`} activeClassName="nav-link-current">
                  Resume
                </Link>
              </li>
              <li className="nav-travels" role="menuitem">
                <Link to={`/travels`} activeClassName="nav-link-current">
                  Travels
                </Link>
              </li>
              {/* <li className="nav-elements" role="menuitem">
                <Link to={`/elements`} activeClassName="nav-link-current">
                  Elements
                </Link>
              </li> */}
            </ul>
          </nav>
          <div className="site-head-center">
            <Link className="site-head-logo" to={`/`}>
              {title}
            </Link>
          </div>
          <div className="site-head-right">
            <div className="social-links">
              <a
                href="https://www.linkedin.com/in/spk2dc/"
                title="LinkedIn"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
              </a>
              <a
                href="mailto:spk2dc@virginia.edu"
                title="email"
                target="_blank"
                rel="noopener noreferrer"
              >
                Email
              </a>
              <a
                href="https://github.com/spk2dc/spk2dc.github.io"
                title="GitHub"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>
            </div>
          </div>
        </div>
      </header>
      <main id="site-main" className="site-main">
        <div id="swup" className="transition-fade">
          {children}
        </div>
      </main>
      <footer className="site-foot">
        &copy; {new Date().getFullYear()} <Link to={`/`}>{title}</Link> &mdash;
        Built with{" "}
        <a
          href="https://gatsbyjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Gatsby
        </a>
      </footer>
    </div>
  )
}

export default Layout
