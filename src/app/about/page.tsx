'use client'

import Link from 'next/link'
import styled from 'styled-components'

const Main = styled.main`
  padding: 4rem 18rem;

  li {
    list-style: none;
  }
`

const skills = [
  { name: 'Go' },
  { name: 'JavaScript' },
  { name: 'TypeScript' },
  { name: 'Swift' },
  { name: 'Python' },
  { name: 'React' },
  { name: 'C++' },
]

const links = [
  {
    href: 'https://twitter.com/ras0q',
    text: 'Twitter@ras0q',
  },
  {
    href: 'https://github.com/ras0q',
    text: 'Github@ras0q',
  },
  {
    href: 'https://scrapbox.io/ras0q',
    text: 'Scrapbox@ras0q',
  },
  {
    href: 'https://fedibird.com/@ras',
    text: 'Mastodon@ras',
  },
  {
    href: 'https://trap.jp/author/ras',
    text: 'traP blog',
  },
]

export default function About() {
  return (
    <Main>
      <h1>Ras@ras0q</h1>
      <section>
        <h2>Belonging</h2>
        <ul>
          <li>
            <Link href='https://www.titech.ac.jp/'>Tokyo Institute of Technology</Link>
          </li>
          <li>
            <Link href='https://trap.jp/'>Digital Creators Club traP</Link>
          </li>
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
        <p>
          大学に入学してからプログラミングを始めました。
          <br />
          現在はバックエンドとiOSアプリの開発をメインに行っています。
          <br />
          大学では情報通信工学を専攻しており、デジタル創作同好会traPというサークルで活動しています。
        </p>
      </section>
      <section>
        <h2>Links</h2>
        <ul>
          {links.map(({ href, text }) => (
            <li key={text}>
              <Link href={href}>{text}</Link>
            </li>
          ))}
        </ul>
      </section>
    </Main>
  )
}
