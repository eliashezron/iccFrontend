export const navItems = [
  {
    id: 1,
    title: 'Home',
    path: './',
    cName: 'nav-item',
    // subMenu: [
    //   { subtitle: "About", path: "./about" },
    //   { subtitle: "Team", path: "./team" },
    // ],
  },
  {
    id: 2,
    title: 'Nfts',
    path: './services',
    cName: 'nav-item',
    // subMenu: [
    //   { subtitle: "About", path: "./about" },
    //   { subtitle: "Team", path: "./team" },
    // ],
  },
  {
    id: 3,
    title: 'Earn',
    path: './products',
    cName: 'nav-item',
    subMenu: [
      { id: 1, subtitle: 'Farms', path: './about' },
      { id: 2, subtitle: 'Pools', path: './team' },
    ],
  },
  {
    id: 4,
    title: 'Trade',
    path: './contactus',
    cName: 'nav-item',
    subMenu: [
      { id: 1, subtitle: 'Exchange', path: './about' },
      { id: 2, subtitle: 'Liquidity', path: './team' },
    ],
  },
  {
    id: 5,
    title: 'More',
    path: './contactus',
    cName: 'nav-item',
    subMenu: [{ id: 1, subtitle: 'WhitePaper', path: './about' }],
  },
];
