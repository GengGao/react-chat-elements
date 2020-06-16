import React from 'react';
import classNames from 'classnames';
import './SideBar.css';
import { Theme } from '../types';

export type SideBarProps = {
  type?: Theme;
  className?: string;
  top?: React.ReactNode;
  center?: React.ReactNode;
  bottom?: React.ReactNode;
};

export const SideBar: React.FC<SideBarProps> = ({
  type = 'dark',
  className,
  top,
  center,
  bottom,
}) => (
  <div className={classNames('rce-sbar', type, className)}>
    <div className="rce-sbar-item">{top}</div>
    <div className="rce-sbar-item rce-sbar-item__center">{center}</div>
    <div className="rce-sbar-item">{bottom}</div>
  </div>
);

export default SideBar;
