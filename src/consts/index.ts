export const belongings = [
  {
    name: 'Tokyo Institute of Technology',
    href: 'https://www.titech.ac.jp/',
  },
  {
    name: 'Digital Creators Club traP',
    href: 'https://trap.jp/',
  },
]

export const skills = [
  { name: 'Go' },
  { name: 'JavaScript' },
  { name: 'TypeScript' },
  { name: 'Swift' },
  { name: 'Python' },
  { name: 'React' },
  { name: 'C++' },
]

export const aboutMe = [
  '大学に入学してからプログラミングを始めました。',
  '現在はバックエンドとiOSアプリの開発をメインに行っています。',
  '大学では情報通信工学を専攻し, デジタル創作同好会traPというサークルで活動しています。',
].join('\n')

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
  role?: string
}

export const worksByCategory: {
  [section: string]: Work[]
} = {
  'Personal Project': [
    {
      name: 'ras.place',
      link: 'https://ras.place',
      duration: '2023/03 -',
      description: `このポートフォリオ
      Next.jsを使って作られている`,
    },
    {
      name: 'slides',
      link: 'https://slides.ras.place',
      duration: '2022/12 -',
      description: `作ったスライドの一覧
      スライドはMarpで作っている`,
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
      duration: '2023/02 - 2023/04',
      description: 'Three.jsを使ったSlit-Scanアプリ',
    },
    {
      name: 'traQ iOS (WIP)',
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
      duration: '2020/11',
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
      duration: '2022/12',
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
      description: 'Elasticsearch, Kibana, FluentBit, Luaなどを使用したISUCONのダッシュボード',
    },
  ],
  'Personal Library': [
    {
      name: 'traq-writer (Go)',
      externalLinks: [
        {
          href: 'https://github.com/ras0q/traq-writer',
          text: 'GitHub',
        },
      ],
      duration: '2022/03',
      description: 'io.Writerに準拠したtraQ WebHookライブラリ',
    },
    {
      name: 'traq-oauth2 (Go)',
      externalLinks: [
        {
          href: 'https://github.com/ras0q/traq-oauth2',
          text: 'GitHub',
        },
      ],
      duration: '2023/02',
      description: 'traQ Oauth2.0ライブラリ',
    },
    {
      name: 'swift-traq (Swift)',
      externalLinks: [
        {
          href: 'https://github.com/traPtitech/swift-traq',
          text: 'GitHub',
        },
      ],
      duration: '2022/08 - 2020/10',
      description: 'traQのSwiftクライアントライブラリ',
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
      role: 'プロジェクトリーダー, バックエンド',
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
      duration: 'traP Hackathon 2020 Spring',
      description: '気圧を操作しゴールを目指すゲーム',
      role: 'ゲームプログラミング',
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
      duration: 'traP Hackathon 2020 Winter',
      description: '部内SNS『traQ』のカスタムテーマを作成するサービス',
      role: 'バックエンド',
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
      duration: 'traP Hackathon 2021 Spring',
      description: '部内SNS『traQ』に投稿された曲を一覧できるサービス',
      role: 'チームリーダー, バックエンド',
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
          text: 'GitHub',
        },
      ],
      duration: 'traP Hackathon 2021 Winter',
      description: 'プレイヤー同士で協力してお題を完成させるお絵かきリレー',
      role: 'バックエンド',
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
      duration: 'traP Hackathon 2022 Spring',
      description: '部内SNS『traQ』で用いるスタンプの生成ツール',
      role: 'チームリーダー, バックエンド',
    },
    {
      name: 'traP Mission',
      link: 'https://mission.trap.games',
      externalLinks: [
        {
          href: 'https://trap.jp/post/1909/',
          text: '紹介ブログ',
        },
        {
          href: 'https://github.com/traP-jp/h23s_26',
          text: 'GitHub(backend)',
        },
        {
          href: 'https://github.com/traP-jp/h23s_26-UI',
          text: 'GitHub(frontend)',
        },
      ],
      duration: 'traP Hackathon 2023 Spring',
      description: '部内SNS『traQ』で用いるミッションを作成するサービス',
      role: 'チームリーダー, バックエンド, フロントエンド',
    },
  ],
  Other: [
    {
      name: 'memoru',
      link: 'https://memoru.trasta.dev/',
      externalLinks: [
        {
          href: 'https://www.pref.miyagi.jp/documents/45294/04.pdf',
          text: '発表スライド',
        },
      ],
      duration: '2023/03/02 - 2023/03/04',
      description: `みやぎハッカソン2023の成果物
      旅行先で集めたアイテムを仮想空間の家に飾ることができるアプリ`,
      role: 'バックエンド',
    },
    {
      name: 'missingtypeguard',
      externalLinks: [
        {
          href: 'https://github.com/ras0q/missingtypeguard',
          text: 'GitHub',
        },
      ],
      duration: '2023/03',
      description: `Gopher Enablement Internship day2&3の成果物
      Goのソースコードを静的解析しtype guardが足りない箇所を検出するツール`,
    },
  ],
}
