import React from 'react';
import './SideBar.css';
import { Theme } from '../types';
export declare type SideBarProps = {
    type?: Theme;
    className?: string;
    top?: React.ReactNode;
    center?: React.ReactNode;
    bottom?: React.ReactNode;
};
export declare const SideBar: React.FC<SideBarProps>;
export default SideBar;
