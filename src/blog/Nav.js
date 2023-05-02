import React from 'react'
import { Link } from 'react-router-dom'
const Nav = ({ search, setSearch }) => {
  return (
      <nav className="Nav">
          <form className="searchForm" onSubmit={(e) => e.preventDefault()}>
              <label htmlFor="search">Search Posts</label>
              <input
                  id="search"
                  type="text"
                  placeholder="Search Posts"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
              />
          </form>
          <ul>
              <li><Link to="blog/">Home</Link></li>
              <li><Link to="blog/post">Post</Link></li>
              <li><Link to="blog/about">About</Link></li>
          </ul>
      </nav>
  )
}

export default Nav