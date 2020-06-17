import React from 'react';
import './ReplyMessage.css';
export declare type ReplyMessageProps = {
    photoURL?: string;
    title?: string;
    titleColor?: string;
    message?: string;
    onClick?: React.EventHandler<React.MouseEvent<HTMLDivElement>>;
};
export declare const ReplyMessage: React.FC<ReplyMessageProps>;
export default ReplyMessage;
