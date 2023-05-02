import React from 'react'
import Header from './Header'
import Footer from './Footer'
import Nav from './Nav'
import './Blog.scss'
import NewPost from './post/NewPost'

const Blog = () => {
  return (
    <div className='Blog'>
        <Header title="React JS Blog"/>
        <Nav/>
        <NewPost/>
        <Footer/>
    </div>
  )
}

export default Blog