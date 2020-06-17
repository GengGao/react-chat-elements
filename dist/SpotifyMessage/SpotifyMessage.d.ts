import React from 'react';
import './SpotifyMessage.css';
export declare type SpotifyMessageProps = {
    theme?: 'black' | 'white';
    view?: 'list' | 'coverart';
    uri?: string;
    width?: number | string;
    height?: number | string;
};
export declare const SpotifyMessage: React.FC<SpotifyMessageProps>;
export default SpotifyMessage;
