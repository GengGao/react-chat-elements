import classNames from 'classnames';
import React from 'react';
import './Navbar.css';
import { Theme } from '../types';

export type NavbarProps = {
  className?: string;
  type?: Theme;
  left?: React.ReactNode;
  center?: React.ReactNode;
  right?: React.ReactNode;
};

export const Navbar: React.FC<NavbarProps> = ({
  type = 'light',
  className,
  left,
  center,
  right,
}) => (
  <div className={classNames('rce-navbar', type, className)}>
    <div className="rce-navbar-item rce-navbar-item__left">{left}</div>
    <div className="rce-navbar-item rce-navbar-item__center">{center}</div>
    <div className="rce-navbar-item rce-navbar-item__right">{right}</div>
  </div>
);

export default Navbar;
