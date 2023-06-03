import Link from 'next/link'

export const ExternalLink = ({ href, children }: { href: string; children: React.ReactNode }) => (
  <Link target='_blank' href={href}>
    {children}
  </Link>
)
