'use client'

import Image from 'next/image'
import styled from 'styled-components'

const Main = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 6rem;
`

const Logo = styled(Image)`
  object-fit: contain;
  position: relative;
  max-height: 70vh;
  margin: auto;
`

export default function Home() {
  return (
    <Main>
      <Logo src='/logo.svg' alt='Portfolio Logo' fill />
    </Main>
  )
}
