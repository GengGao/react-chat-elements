import React from 'react';
import './Popup.css';
import { ButtonProps } from '../Button/Button';
export declare type PopupProps = {
    className?: string;
    type?: string;
    show?: boolean;
    header?: string;
    headerButtons?: ButtonProps[];
    text?: string;
    color?: string;
    footerButtons?: ButtonProps[];
    renderHeader?: () => React.ReactNode;
    renderContent?: () => React.ReactNode;
    renderFooter?: () => React.ReactNode;
};
export declare const Popup: React.FC<PopupProps>;
