'use client'

import { WorkCard } from '@/components/WorkCard'
import { worksByCategory } from '@/consts'
import styled from 'styled-components'

const Main = styled.main`
  padding: 4rem 12rem;

  li {
    display: frex;
    list-style: none;
  }
`

const WorksList = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: flex-start;
  margin: 0;
  padding: 0;

  > div {
    flex: 1 1 10rem;
    margin: 0.5rem;
  }
`

export default function Works() {
  return (
    <Main>
      <h1>Works</h1>
      {Object.entries(worksByCategory).map(([category, works]) => (
        <section key={category}>
          <h2>{category}</h2>
          <WorksList>
            {works.map((work) => (
              <div key={work.name}>
                <WorkCard work={work} />
              </div>
            ))}
          </WorksList>
        </section>
      ))}
    </Main>
  )
}
