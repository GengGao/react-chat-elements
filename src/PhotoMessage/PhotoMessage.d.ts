import React from 'react';
import { Data } from '../types';
import './PhotoMessage.css';
export declare type PhotoMessageProps = {
    data: Data;
    text?: string;
    onDownload?: React.EventHandler<React.MouseEvent<HTMLButtonElement>>;
    onOpen?: React.EventHandler<React.MouseEvent<HTMLImageElement>>;
    onLoad?: React.EventHandler<React.SyntheticEvent<HTMLImageElement>>;
    onPhotoError?: React.EventHandler<React.SyntheticEvent<HTMLImageElement>>;
};
export declare const PhotoMessage: React.FC<PhotoMessageProps>;
