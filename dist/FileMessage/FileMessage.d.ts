import React from 'react';
import './FileMessage.css';
import { Data } from '../types';
export declare type FileMessageProps = {
    data: Data;
    text?: string;
    onDownload?: React.EventHandler<React.SyntheticEvent<HTMLButtonElement>>;
    onOpen?: React.EventHandler<React.SyntheticEvent<HTMLButtonElement>>;
};
export declare const FileMessage: React.FC<FileMessageProps>;
export default FileMessage;
