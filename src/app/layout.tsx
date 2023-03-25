import './globals.css'
import Header from './header'
import StyledComponentsRegistry from '@/lib/styledComponentRegistry'

export const metadata = {
  title: 'Ras',
  description: 'らすのホームページ',
  icons: {
    icon: '/logo.svg',
    shortcut: '/logo.svg',
    apple: '/logo.svg',
  },
  openGraph: {
    type: 'website',
    url: 'https://ras.place',
    title: 'Ras',
    description: 'らすのホームページ',
    siteName: 'ras.place',
    images: [
      {
        url: 'https://ras.place/logo.svg',
      },
    ],
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <body>
        <StyledComponentsRegistry>
          <>
            <Header />
            {children}
          </>
        </StyledComponentsRegistry>
      </body>
    </html>
  )
}
