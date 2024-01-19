import { Work } from '@/consts'
import Link from 'next/link'
import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem;
  border-width: 1px;
  border-style: solid;
  border-radius: 0.5rem;
`

export const WorkCard = ({ work }: { work: Work }) => {
  const { name, link, externalLinks, duration, description, role } = work
  return (
    <Container>
      <div>
        <h3>
          {link ? (
            <Link target='_blank' href={link}>
              {name}
            </Link>
          ) : (
            name
          )}
        </h3>
        <p>{duration}</p>
      </div>
      <p>{description}</p>
      {role && <p>Role: {role}</p>}
      {externalLinks && (
        <ul>
          {externalLinks.map(({ href, text }) => (
            <li key={text}>
              →{' '}
              <Link target='_blank' href={href}>
                {text}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </Container>
  )
}
