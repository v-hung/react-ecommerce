import React from 'react'
import { useRouteError } from 'react-router-dom'
import Container from '../components/Container'

const Error = () => {
  const error = useRouteError() as any

  return (
    <Container>
      <h1>{error.status}</h1>
      <h2>{error.data.sorry}</h2>
      <p>
        Go ahead and email {error.data.hrEmail} if you
        feel like this is a mistake.
      </p>
    </Container>
  )
}

export default Error