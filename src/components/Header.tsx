import useToggle from 'hooks/useToggle';
import React from 'react';
import NavBar from './NavBar/NavBar';

function Header() {
  const [isNav, onToggleNav] = useToggle();
  return (
    <div>
      <button type="button" onClick={onToggleNav}>
        햄버거
      </button>
      <div>
        <div>네모</div>
        <div>검색창</div>
      </div>
      <div>
        <div>내정보</div>
        <div>햄버거</div>
      </div>
      <NavBar isNav={isNav} onToggleNav={onToggleNav} />
    </div>
  );
}

export default Header;
