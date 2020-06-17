import React from 'react';
import './Button.css';
export declare type Icon = {
    component?: React.ReactNode;
    float?: 'left' | 'right';
    color?: string;
    size?: number;
    className?: string;
};
export declare type ButtonProps = {
    buttonRef?: React.Ref<HTMLButtonElement>;
    type?: 'outlined' | 'transparent';
    disabled?: boolean;
    title?: string;
    text?: string;
    color?: string;
    backgroundColor?: string;
    onClick?: React.EventHandler<React.SyntheticEvent<HTMLButtonElement>>;
    className?: string;
    icon?: Icon;
};
export declare const Button: React.FC<ButtonProps>;
export default Button;
