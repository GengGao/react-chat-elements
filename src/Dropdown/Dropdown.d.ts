import React from 'react';
import './Dropdown.css';
import { Icon, ButtonProps } from '../Button/Button';
export declare type DropdownItem = {
    icon?: Icon;
    text?: string;
} | string;
export declare type DropdownProps = {
    className?: string;
    animationType?: 'fade' | 'default';
    animationPosition?: 'northwest' | 'northeast' | 'southwest' | 'southeast';
    items: DropdownItem[];
    onSelect?: (index: number) => void;
    title?: string;
    buttonProps?: ButtonProps;
};
export declare const Dropdown: React.FC<DropdownProps>;
