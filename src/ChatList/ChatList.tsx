import classNames from 'classnames';
import React from 'react';
import './ChatList.css';

import { ChatItem, ChatItemProps } from '../ChatItem/ChatItem';

export type ChatListProps = {
  className?: string;
  cmpRef?: React.Ref<HTMLDivElement>;
  dataSource: ChatItemProps[];
  onClick?: (value: ChatItemProps, index: number) => void;
  onContextMenu?: (
    item: ChatItemProps,
    index: number,
    event: React.SyntheticEvent<HTMLDivElement>,
  ) => void;
  onAvatarError?: (
    item: ChatItemProps,
    index: number,
    event: React.SyntheticEvent<HTMLImageElement>,
  ) => void;
  lazyLoadingImage?: string;
  activeChatId?: string | null;
};

export const ChatList: React.FC<ChatListProps> = ({
  cmpRef,
  className,
  dataSource,
  lazyLoadingImage,
  activeChatId,
  onClick,
  onContextMenu,
  onAvatarError,
}) => (
  <div ref={cmpRef} className={classNames('rce-container-clist', className)}>
    {dataSource.map((item, i) => (
      <ChatItem
        key={i}
        isActive={item.id === activeChatId}
        lazyLoadingImage={lazyLoadingImage}
        {...item}
        onAvatarError={e => onAvatarError?.(item, i, e)}
        onContextMenu={e => onContextMenu?.(item, i, e)}
        onClick={() => onClick?.(item, i)}
      />
    ))}
  </div>
);
