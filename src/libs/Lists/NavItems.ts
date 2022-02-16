import Path from 'routes/Path';

export const categoryMenus = [
  {
    name: 'Outer',
    href: '/Shirt',
  },
  {
    name: 'Shirt',
    href: '/Shirt',
  },
  {
    name: 'Top',
    href: '/Top',
  },
  {
    name: 'Knit',
    href: '/Knit',
  },
  {
    name: 'Bottom',
    href: '/Bottom',
  },
  {
    name: 'Acc',
    href: '/Acc',
  },
];

export const communityMenus = [
  {
    name: 'Login',
    href: '/login',
  },
  {
    name: 'Mypage',
    href: '/mypage',
  },
  {
    name: 'Like',
    href: '/like',
  },
];

export const shopMenus = [
  {
    name: 'Best Items',
    href: `${Path.TestPage}`,
    isOpen: false,
  },
  {
    name: 'New Arrival',
    href: `${Path.HomePage}`,
    isOpen: false,
  },
  {
    name: 'Category',
    subMenus: categoryMenus,
    isOpen: false,
  },
  {
    name: 'Community',
    subMenus: communityMenus,
    isOpen: false,
  },
];
