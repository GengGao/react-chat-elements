import classNames from 'classnames';
import React from 'react';
import { Avatar, AvatarProps } from '../Avatar/Avatar';
import './ChatItem.css';
import { getDateString } from '../utils';

export type ChatItemProps = {
  id: string;
  isActive?: boolean;
  className?: string;
  letterItem?: AvatarProps['letterItem'];
  avatar?: AvatarProps['src'];
  avatarFlexible?: boolean;
  alt?: AvatarProps['alt'];
  title?: string;
  subtitle?: string;
  date: Date | undefined;
  unread?: number;
  onClick?: React.EventHandler<React.SyntheticEvent<HTMLDivElement>>;
  onContextMenu?: React.EventHandler<React.MouseEvent<HTMLDivElement>>;
  onAvatarError?: AvatarProps['onError'];
  statusColor?: string;
  statusColorType?: 'badge' | 'encircle';
  statusText?: string;
  /** lazy loading image path */
  lazyLoadingImage?: AvatarProps['lazyLoadingImage'];
};

export const ChatItem: React.FC<ChatItemProps> = ({
  className,
  avatar,
  alt,
  letterItem,
  isActive,
  onClick,
  onContextMenu,
  onAvatarError,
  avatarFlexible,
  lazyLoadingImage,
  date = new Date(),
  title,
  subtitle,
  unread,
  statusText,
  statusColor,
  statusColorType = 'badge',
}) => {
  return (
    <div
      className={classNames('rce-container-citem', className)}
      onClick={onClick}
      onContextMenu={onContextMenu}
    >
      <div
        className={classNames('rce-citem', {
          'rce-citem-active': isActive,
        })}
      >
        <div
          className={classNames('rce-citem-avatar', {
            'rce-citem-status-encircle': statusColorType === 'encircle',
          })}
        >
          <Avatar
            src={avatar}
            alt={alt}
            className={
              statusColorType === 'encircle'
                ? 'rce-citem-avatar-encircle-status'
                : ''
            }
            size="large"
            letterItem={letterItem}
            sideElement={
              statusColor && (
                <span
                  className="rce-citem-status"
                  style={
                    statusColorType === 'encircle'
                      ? {
                          boxShadow: `inset 0 0 0 2px ${statusColor}, inset 0 0 0 5px #FFFFFF`,
                        }
                      : {
                          backgroundColor: statusColor,
                        }
                  }
                >
                  {statusText}
                </span>
              )
            }
            onError={onAvatarError}
            lazyLoadingImage={lazyLoadingImage}
            type={['circle', avatarFlexible ? 'flexible' : undefined]}
          />
        </div>

        <div className="rce-citem-body">
          <div className="rce-citem-body--top">
            <div className="rce-citem-body--top-title">{title}</div>
            <div className="rce-citem-body--top-time">
              {getDateString(date)}
            </div>
          </div>

          <div className="rce-citem-body--bottom">
            <div className="rce-citem-body--bottom-title">{subtitle}</div>
            <div className="rce-citem-body--bottom-status">
              {(unread ?? 0) > 0 && <span>{unread}</span>}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
