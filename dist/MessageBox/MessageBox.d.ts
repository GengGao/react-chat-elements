import React from 'react';
import { AvatarProps } from '../Avatar/Avatar';
import { FileMessageProps } from '../FileMessage/FileMessage';
import { LocationMessageProps } from '../LocationMessage/LocationMessage';
import { PhotoMessageProps } from '../PhotoMessage/PhotoMessage';
import { ReplyMessageProps } from '../ReplyMessage/ReplyMessage';
import { SpotifyMessageProps } from '../SpotifyMessage/SpotifyMessage';
import { SystemMessageProps } from '../SystemMessage/SystemMessage';
import './MessageBox.css';
export declare type MessageStatus = 'waiting' | 'sent' | 'received' | 'read';
export declare type MessageType = 'system' | 'text' | 'photo' | 'file' | 'location' | 'spotify';
export declare type MessageBoxProps = {
    id?: string;
    className?: string;
    position?: 'left' | 'right';
    type?: MessageType;
    text?: string;
    title?: string;
    titleColor?: string;
    date?: Date;
    dateString?: string;
    onClick?: React.EventHandler<React.SyntheticEvent<HTMLDivElement>>;
    onTitleClick?: React.EventHandler<React.SyntheticEvent<HTMLDivElement>>;
    onForwardClick?: React.EventHandler<React.SyntheticEvent<HTMLDivElement>>;
    onReplyClick?: React.EventHandler<React.SyntheticEvent<HTMLDivElement>>;
    onReplyMessageClick?: React.EventHandler<React.SyntheticEvent<HTMLDivElement>>;
    onContextMenu?: React.EventHandler<React.SyntheticEvent<HTMLDivElement>>;
    forwarded?: boolean;
    replyButton?: boolean;
    status?: MessageStatus;
    notch?: boolean;
    letterItem?: AvatarProps['letterItem'];
    /** message box avatar url */
    avatar?: AvatarProps['src'];
    renderAddCmp?: React.ReactNode;
    copiableDate?: boolean;
    focus?: boolean;
    onMessageFocused?: (props: MessageBoxProps) => void;
    reply?: ReplyMessageProps;
} & (({
    type: 'location';
} & LocationMessageProps) | ({
    type: 'photo';
} & PhotoMessageProps) | ({
    type: 'system';
} & SystemMessageProps) | ({
    type: 'file';
} & FileMessageProps) | ({
    type: 'spotify';
} & SpotifyMessageProps) | {
    type?: 'text';
    text?: string;
});
export declare const MessageBox: React.FC<MessageBoxProps>;
export default MessageBox;
