import React from 'react'
import Container from '../components/Container'
import { Link } from 'react-router-dom'

const About = () => {
  return (
    <Container>
      <Link to="/">Home</Link>
      <Link to="/about">about</Link>
      <div>
        about
      </div>
    </Container>
  )
}

export default About