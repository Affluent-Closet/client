import React from 'react';
import { AiOutlineUser, AiOutlineSearch } from 'react-icons/ai';
import { FiShoppingCart, FiLogOut } from 'react-icons/fi';
import Path from 'routes/Path';

export const categoryMenus = [
  {
    name: 'Outer',
    href: `${Path.CategoryPath}/outer`,
  },
  {
    name: 'Shirts',
    href: `${Path.CategoryPath}/shirts`,
  },
  {
    name: 'Top',
    href: `${Path.CategoryPath}/top`,
  },
  {
    name: 'Knit',
    href: `${Path.CategoryPath}/knit`,
  },
  {
    name: 'Bottom',
    href: `${Path.CategoryPath}/bottom`,
  },
  {
    name: 'Acc',
    href: `${Path.CategoryPath}/acc`,
  },
];

export const communityMenus = [
  {
    name: 'Q&A',
    href: '/qna',
  },
  {
    name: 'Review',
    href: '/review',
  },
  {
    name: 'Order',
    href: '/order',
  },
];

export const shopMenus = [
  {
    name: 'Best',
    href: `${Path.BestPage}`,
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
    name: '프로필',
    href: `${Path.ProfilePage}`,
    icon: <AiOutlineUser size="22" />,
  },
  {
    name: '장바구니',
    href: `${Path.CartPage}`,
    icon: <FiShoppingCart size="22" />,
  },
  {
    name: '검색',
    href: `${Path.SearchPage}`,
    icon: <AiOutlineSearch size="22" />,
  },
  {
    name: '로그아웃',
    href: `${Path.LogoutPage}`,
    icon: <FiLogOut size="22" />,
  },
];
