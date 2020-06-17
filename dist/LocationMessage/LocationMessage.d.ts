import React from 'react';
import './LocationMessage.css';
export declare type LocationMessageData = {
    staticURL?: string;
    mapURL?: string;
    latitude: string;
    longitude: string;
};
export declare type LocationMessageProps = Pick<React.AnchorHTMLAttributes<HTMLAnchorElement>, 'target' | 'href'> & {
    className?: string;
    markerColor?: string;
    zoom?: number;
    apiKey?: string;
    src?: string;
    data: LocationMessageData;
    text?: string;
    onOpen?: React.AnchorHTMLAttributes<HTMLAnchorElement>['onClick'];
    onError?: React.EventHandler<React.SyntheticEvent<HTMLImageElement>>;
};
export declare const LocationMessage: React.FC<LocationMessageProps>;
export default LocationMessage;
