export const skills = [
  { name: 'Go' },
  { name: 'JavaScript' },
  { name: 'TypeScript' },
  { name: 'Swift' },
  { name: 'Python' },
  { name: 'React' },
  { name: 'C++' },
]

export const accountLinks = [
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

export const works: {
  name: string
  link: string
  externalLinks?: {
    href: string
    text: string
  }[]
  duration: string
  description: string
}[] = [
  {
    name: 'ras.place',
    link: 'https://ras.place',
    duration: '2023/03 -',
    description: 'このポートフォリオ',
  },
  {
    name: 'traPortfolio (WIP)',
    link: '',
    duration: '2020/03 -',
    description: '部員のポートフォリオサイトや各種リンクなどをまとめる外部向けサービス',
  },
  {
    name: 'Qtheme',
    link: 'https://qtheme.trap.games',
    externalLinks: [
      {
        href: 'https://trap.jp/post/1192',
        text: '紹介ブログ',
      },
    ],
    duration: 'traP Hackathon 2020 winter',
    description: '部内SNS『traQ』のカスタムテーマを作成するサービス',
  },
]
