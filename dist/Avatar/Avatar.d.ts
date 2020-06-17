import React from 'react';
import './Avatar.css';
export declare type LetterItem = {
    id: string;
    letter: React.ReactNode;
};
declare type AvatarType = 'default' | 'circle' | 'rounded' | 'flexible';
export declare type AvatarProps = {
    lazyLoadingImage?: string;
    /** image size:
     * * default (25px)
     * * xsmall(30px)
     * * small(35px)
     * * medium(40px)
     * * large(45px)
     * * xlarge (55px)
     */
    size?: 'default' | 'xsmall' | 'small' | 'medium' | 'large' | 'xlarge';
    type?: AvatarType | (AvatarType | undefined)[];
    src?: string;
    alt?: string;
    onError?: React.EventHandler<React.SyntheticEvent<HTMLImageElement, Event>>;
    className?: string;
    letterItem?: LetterItem;
    sideElement?: React.ReactNode;
};
export declare class Avatar extends React.Component<AvatarProps> {
    _isMounted: boolean;
    loading: boolean;
    componentDidMount(): void;
    componentWillUnmount(): void;
    isLoaded: (src: string) => boolean;
    requestImage: (src: string) => void;
    stringToColor: (str: string) => string;
    render(): JSX.Element | null;
}
export default Avatar;
