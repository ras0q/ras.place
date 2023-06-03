'use client'

import { ExternalLink } from '@/components/ExternalLink'
import { aboutMe, accountLinks, belongings, skills } from '@/consts'
import styled from 'styled-components'

const Main = styled.main`
  padding: 4rem 12rem;
  white-space: pre-wrap;

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
              <ExternalLink href={href}>{name}</ExternalLink>
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
              <ExternalLink href={href}>{text}</ExternalLink>
            </li>
          ))}
        </ul>
      </section>
    </Main>
  )
}
