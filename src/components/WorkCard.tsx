import { ExternalLink } from '@/components/ExternalLink'
import { Work } from '@/consts'
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
        <h3>{link ? <ExternalLink href={link}>{name}</ExternalLink> : name}</h3>
        <p>{duration}</p>
      </div>
      <p>{description}</p>
      {role && <p>Role: {role}</p>}
      {externalLinks && (
        <ul>
          {externalLinks.map(({ href, text }) => (
            <li key={text}>
              → <ExternalLink href={href}>{text}</ExternalLink>
            </li>
          ))}
        </ul>
      )}
    </Container>
  )
}
