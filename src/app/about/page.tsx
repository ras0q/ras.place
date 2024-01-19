'use client'

import { aboutMe, accountLinks, belongings, skills } from '@/consts'
import Link  from 'next/link'
import styled from 'styled-components'

const Main = styled.main`
  padding: 4rem 12rem;
  white-space: pre-wrap;

  @media screen and (max-width: 480px) {
    padding: 4rem 2rem;
  }

  li {
    list-style: none;
  }
`

export default function About() {
  return (
    <Main>
      <h1>Ras@ras0q</h1>
      <section>
        <h2>Belonging</h2>
        <ul>
          {belongings.map(({ name, href }) => (
            <li key={name}>
              <Link target='_blank' href={href}>
                {name}
              </Link>
            </li>
          ))}
        </ul>
      </section>
      <section>
        <h2>Skills</h2>
        <ul>
          {skills.map(({ name }) => (
            <li key={name}>{name}</li>
          ))}
        </ul>
      </section>
      <section>
        <h2>About</h2>
        <p>{aboutMe}</p>
      </section>
      <section>
        <h2>Links</h2>
        <ul>
          {accountLinks.map(({ href, text }) => (
            <li key={text}>
              <Link target='_blank' href={href}>{text}</Link>
            </li>
          ))}
        </ul>
      </section>
    </Main>
  )
}
