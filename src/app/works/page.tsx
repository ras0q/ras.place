'use client'

import { works } from '@/consts'
import Link from 'next/link'
import styled from 'styled-components'

const Main = styled.main`
  padding: 4rem 18rem;

  li {
    display: frex;
    list-style: none;
  }
`

export default function Works() {
  return (
    <Main>
      <h1>Works</h1>
      <ul>
        {works.map(({ name, link, externalLinks, duration, description }) => (
          <li key={name}>
            <div>
              <div>
                <h2>
                  <Link href={link}>{name}</Link>
                </h2>
                <p>{duration}</p>
              </div>
              <p>{description}</p>
              {externalLinks && (
                <ul>
                  {externalLinks.map(({ href, text }) => (
                    <li key={text}>
                      → <Link href={href}>{text}</Link>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </li>
        ))}
      </ul>
    </Main>
  )
}
