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

export type Work = {
  name: string
  link?: string
  externalLinks?: {
    href: string
    text: string
  }[]
  duration: string
  description: string
}

export const worksByCategory: {
  [section: string]: Work[]
} = {
  'Personal Project': [
    {
      name: 'ras.place',
      link: 'https://ras.place',
      duration: '2023/03 -',
      description: 'このポートフォリオ',
    },
    {
      name: 'iOS traQ Clone App (WIP)',
      externalLinks: [
        {
          href: 'https://github.com/ras0q/traq-ios-clone',
          text: 'GitHub',
        },
      ],
      duration: '2022/08 -',
      description: '部内SNS『traQ』をSwiftで再現したiOSアプリ (非公式)',
    },
    {
      name: 'gcg',
      externalLinks: [
        {
          href: 'https://trap.jp/post/1429/',
          text: '紹介ブログ',
        },
        {
          href: 'https://github.com/Ras96/gcg',
          text: 'GitHub',
        },
      ],
      duration: '',
      description: 'Goの構造体のコンストラクタ関数を自動生成するCLIツール',
    },
    {
      name: 'wscat',
      externalLinks: [
        {
          href: 'https://trap.jp/post/1790/',
          text: '紹介ブログ',
        },
        {
          href: 'https://github.com/ras0q/go-wstest/tree/main/wscat',
          text: 'GitHub',
        },
      ],
      duration: '',
      description: 'Websocket通信を対話形式でテストできるようにしたCLIツール',
    },
    {
      name: 'ISUCON Dashbord',
      externalLinks: [
        {
          href: 'https://trap.jp/post/1628/',
          text: '紹介ブログ',
        },
        {
          href: 'https://github.com/tetoraorg/isucon-dashboard',
          text: 'GitHub',
        },
      ],
      duration: 'ISUCON12予選',
      description: 'Elasticsearch、Kibana、FluentBit、Luaなどを使用したISUCONのダッシュボード',
    },
    {
      name: 'slitscan3d',
      link: 'https://slitscan3d.ras.place',
      externalLinks: [
        {
          href: 'https://trap.jp/post/1841/',
          text: '紹介ブログ',
        },
        {
          href: 'https://github.com/ras0q/slitscan3d',
          text: 'GitHub',
        },
      ],
      duration: '',
      description: 'Three.jsを使ったSlit-Scanアプリ',
    },
  ],
  'traP Project': [
    {
      name: 'traPortfolio (WIP)',
      externalLinks: [
        {
          href: 'https://github.com/traPtitech/traPortfolio',
          text: 'GitHub',
        },
      ],
      duration: '2020/03 -',
      description: '部員のポートフォリオサイトや各種リンクなどをまとめる外部向けサービス',
    },
  ],
  'traP Hackathon': [
    {
      name: 'Make Sure The Pressure',
      link: 'http://pressure-pazzle.hackathon_20spring_team_10.trap.show/',
      externalLinks: [
        {
          href: 'https://trap.jp/post/1097/',
          text: '紹介ブログ',
        },
      ],
      duration: 'traP Hackathon 2020年春',
      description: '気圧を操作しゴールを目指すゲーム',
    },
    {
      name: 'Qtheme',
      link: 'https://qtheme.trap.games/',
      externalLinks: [
        {
          href: 'https://trap.jp/post/1192/',
          text: '紹介ブログ',
        },
      ],
      duration: 'traP Hackathon 2020年冬',
      description: '部内SNS『traQ』のカスタムテーマを作成するサービス',
    },
    {
      name: 'Qtunes',
      link: 'https://qtunes.trap.games/',
      externalLinks: [
        {
          href: 'https://trap.jp/post/1315/',
          text: '紹介ブログ',
        },
        {
          href: 'https://github.com/hackathon-21-spring-02/',
          text: 'GitHub',
        },
      ],
      duration: 'traP Hackathon 2021年春',
      description: '部内SNS『traQ』に投稿された曲を一覧できるサービス',
    },
    {
      name: 'Nascalay',
      link: 'https://nascalay.trap.games/',
      externalLinks: [
        {
          href: 'https://trap.jp/post/1467/',
          text: '紹介ブログ',
        },
        {
          href: 'https://github.com/21hack02win/nascalay-backend',
          text: 'GitHub (backend)',
        },
        {
          href: 'https://github.com/21hack02win/nascalay-frontend',
          text: 'GitHub (frontend)',
        },
      ],
      duration: 'traP Hackathon 2021年冬',
      description: 'プレイヤー同士で協力してお題を完成させるお絵かきリレー',
    },
    {
      name: 'stamQ',
      link: 'https://hackathon-22-spring-14.github.io/stamQ/',
      externalLinks: [
        {
          href: 'https://trap.jp/post/1617/',
          text: '紹介ブログ',
        },
        {
          href: 'https://github.com/hackathon-22-spring-14/',
          text: 'GitHub',
        },
      ],
      duration: 'traP Hackathon 2022年春',
      description: '部内SNS『traQ』で用いるスタンプの生成ツール',
    },
  ],
}
