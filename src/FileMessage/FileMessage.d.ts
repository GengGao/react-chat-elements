import React from 'react';
import { Data } from '../types';
import './FileMessage.css';
export declare type FileMessageProps = {
    data: Data;
    text?: string;
    onDownload?: React.EventHandler<React.SyntheticEvent<HTMLButtonElement>>;
    onOpen?: React.EventHandler<React.SyntheticEvent<HTMLButtonElement>>;
};
export declare const FileMessage: React.FC<FileMessageProps>;
