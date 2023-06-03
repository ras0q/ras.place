'use client'

import { accountLinks, skills } from '@/consts'
import Link from 'next/link'
import styled from 'styled-components'

const Main = styled.main`
  padding: 4rem 18rem;

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
          <li>
            <Link target='_blank' href='https://www.titech.ac.jp/'>
              Tokyo Institute of Technology
            </Link>
          </li>
          <li>
            <Link target='_blank' href='https://trap.jp/'>
              Digital Creators Club traP
            </Link>
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
          {accountLinks.map(({ href, text }) => (
            <li key={text}>
              <Link target='_blank' href={href}>
                {text}
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </Main>
  )
}
