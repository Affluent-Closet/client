import React from 'react';
import { AiOutlineUser, AiOutlineSearch } from 'react-icons/ai';
import { FiShoppingCart } from 'react-icons/fi';
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
    icon: <AiOutlineUser size="22" />,
  },
  {
    name: 'Mypage',
    href: '/mypage',
    icon: <AiOutlineSearch size="22" />,
  },
  {
    name: 'Cart',
    href: '/cart',
    icon: <FiShoppingCart size="22" />,
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

export const profileMenus = [
  { name: '마이페이지', href: `${Path.TestPage}` },
  { name: '장바구니', href: `${Path.TestPage}` },
  { name: '주문배송', href: `${Path.TestPage}` },
  { name: '로그아웃', href: `${Path.TestPage}` },
];
