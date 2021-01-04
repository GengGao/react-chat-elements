import React from 'react';
import './ChatList.css';
import { ChatItemProps } from '../ChatItem/ChatItem';
export declare type ChatListProps = {
    className?: string;
    cmpRef?: React.Ref<HTMLDivElement>;
    dataSource: ChatItemProps[];
    onClick?: (value: ChatItemProps, index: number) => void;
    onContextMenu?: (item: ChatItemProps, index: number, event: React.SyntheticEvent<HTMLDivElement>) => void;
    onAvatarError?: (item: ChatItemProps, index: number, event: React.SyntheticEvent<HTMLImageElement>) => void;
    lazyLoadingImage?: string;
    activeChatId?: string | null;
};
export declare const ChatList: React.FC<ChatListProps>;
