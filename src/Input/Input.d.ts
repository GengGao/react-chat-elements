import React, { Component } from 'react';
import './Input.css';
export declare type InputProps = Pick<React.InputHTMLAttributes<HTMLInputElement | HTMLTextAreaElement>, 'type' | 'onCopy' | 'onCut' | 'onPaste' | 'onChange' | 'placeholder' | 'onBlur' | 'onFocus' | 'onSelect' | 'onSubmit' | 'onReset' | 'onKeyDown' | 'onKeyUp' | 'onKeyPress'> & {
    className?: string;
    placeholder?: string;
    defaultValue?: string;
    multiline?: boolean;
    autoHeight?: boolean;
    minHeight?: number;
    maxHeight?: number;
    inputStyle?: Record<string, any>;
    leftButtons?: React.ReactNode;
    rightButtons?: React.ReactNode;
    inputRef?: (instance: HTMLInputElement | HTMLTextAreaElement | null) => void;
    maxLength?: number;
    onMaxLengthExceed?: () => void;
    autofocus?: boolean;
};
declare type InputState = {
    value: string;
};
export declare class Input extends Component<InputProps, InputState> {
    state: {
        value: string;
    };
    input: React.RefObject<HTMLInputElement | HTMLTextAreaElement>;
    clear: () => void;
    handleChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
    componentDidUpdate(prevProps: InputProps): void;
    render(): JSX.Element;
}
export {};
