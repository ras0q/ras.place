'use client'

import styled from 'styled-components'
import Link from 'next/link'

const HeadContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  list-style: none;
  padding: 1rem;
`

const Nav = styled.nav`
  display: flex;
  gap: 1rem;
`

export default function Header() {
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
