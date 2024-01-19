'use client'

import Link from 'next/link'
import styled from 'styled-components'

const HeadContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  list-style: none;
  padding: 1rem;

  a {
    text-decoration: none;
  }
`

const Nav = styled.nav`
  display: flex;
  gap: 1rem;
`

export const Header = () => {
  return (
    <header>
      <nav>
        <HeadContainer>
          <Link href='/'>
            <h1>ras.place</h1>
          </Link>
          <Nav>
            <Link href='/about'>
              <h3>About</h3>
            </Link>
            <Link href='/works'>
              <h3>Works</h3>
            </Link>
          </Nav>
        </HeadContainer>
      </nav>
    </header>
  )
}
