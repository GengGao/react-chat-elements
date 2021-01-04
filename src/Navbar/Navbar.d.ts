import React from 'react';
import './Navbar.css';
import { Theme } from '../types';
export declare type NavbarProps = {
    className?: string;
    type?: Theme;
    left?: React.ReactNode;
    center?: React.ReactNode;
    right?: React.ReactNode;
};
export declare const Navbar: React.FC<NavbarProps>;
