import React from 'react';
import { AiOutlineUser, AiOutlineSearch } from 'react-icons/ai';
import { FiShoppingCart, FiLogOut } from 'react-icons/fi';
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
    name: 'Q&A',
    href: '/qna',
  },
  {
    name: 'Review',
    href: '/Review',
  },
  {
    name: 'Order',
    href: '/order',
  },
];

export const shopMenus = [
  {
    name: 'Best',
    href: `${Path.TestPage}`,
    isOpen: false,
  },
  {
    name: 'New',
    href: `${Path.LandingPage}`,
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

export const profileMenus = [
  {
    name: 'myPage',
    href: `${Path.TestPage}`,
    icon: <AiOutlineUser size="22" />,
  },
  {
    name: 'cart',
    href: `${Path.TestPage}`,
    icon: <FiShoppingCart size="22" />,
  },
  {
    name: 'search',
    href: `${Path.TestPage}`,
    icon: <AiOutlineSearch size="22" />,
  },
  {
    name: 'logout',
    href: `${Path.TestPage}`,
    icon: <FiLogOut size="22" />,
  },
];
