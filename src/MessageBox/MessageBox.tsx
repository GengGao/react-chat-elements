import classNames from 'classnames';
import React, { useEffect, useRef } from 'react';
import { IoMdDoneAll as IoDoneAll } from 'react-icons/io';
import { MdAccessTime as MdIosTime, MdCheck, MdMessage } from 'react-icons/md';
import { RiChatForwardLine as ForwardIcon } from 'react-icons/ri';
import { format } from 'timeago.js';
import { Avatar, AvatarProps } from '../Avatar/Avatar';
import { FileMessage, FileMessageProps } from '../FileMessage/FileMessage';
import {
  LocationMessage,
  LocationMessageProps,
} from '../LocationMessage/LocationMessage';
import { PhotoMessage, PhotoMessageProps } from '../PhotoMessage/PhotoMessage';
import { ReplyMessage, ReplyMessageProps } from '../ReplyMessage/ReplyMessage';
import {
  SpotifyMessage,
  SpotifyMessageProps,
} from '../SpotifyMessage/SpotifyMessage';
import {
  SystemMessage,
  SystemMessageProps,
} from '../SystemMessage/SystemMessage';
import './MessageBox.css';

export type MessageStatus = 'waiting' | 'sent' | 'received' | 'read';
export type MessageType =
  | 'system'
  | 'text'
  | 'photo'
  | 'file'
  | 'location'
  | 'spotify';

export type MessageBoxProps = {
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
  onReplyMessageClick?: React.EventHandler<
    React.SyntheticEvent<HTMLDivElement>
  >;
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
} & (
  | ({ type: 'location' } & LocationMessageProps)
  | ({ type: 'photo' } & PhotoMessageProps)
  | ({ type: 'system' } & SystemMessageProps)
  | ({ type: 'file' } & FileMessageProps)
  | ({ type: 'spotify' } & SpotifyMessageProps)
  | { type?: 'text'; text?: string }
);

export const MessageBox: React.FC<MessageBoxProps> = props => {
  const messageRef = useRef<HTMLDivElement>(null);
  const {
    focus,
    type,
    position = 'left',
    status,
    text = '',
    title,
    avatar,
    date = new Date(),
    dateString,
    titleColor,
    renderAddCmp,
    className,
    notch,
    forwarded,
    copiableDate,
    reply,
    replyButton,
    letterItem,
    onClick,
    onReplyClick,
    onTitleClick,
    onForwardClick,
    onContextMenu,
    onMessageFocused,
    onReplyMessageClick,
  } = props;

  useEffect(() => {
    if (focus) {
      messageRef.current?.scrollIntoView({
        block: 'center',
        behavior: 'smooth',
      });
      onMessageFocused?.(props);
    }
  }, [focus, messageRef]);

  const positionCls = classNames('rce-mbox', {
    'rce-mbox-right': position === 'right',
  });
  const thatAbsoluteTime =
    type !== 'text' && type !== 'file' && !(type === 'location' && text);

  const dateText =
    date &&
    (date instanceof Date || !isNaN(date)) &&
    (dateString || format(date));

  return (
    <div
      ref={messageRef}
      className={classNames('rce-container-mbox', className)}
      onClick={onClick}
    >
      {renderAddCmp instanceof Function && renderAddCmp()}
      {type === 'system' ? (
        <SystemMessage text={text} />
      ) : (
        <div
          className={classNames(
            positionCls,
            { 'rce-mbox--clear-padding': thatAbsoluteTime },
            { 'rce-mbox--clear-notch': !notch },
            { 'message-focus': focus },
          )}
        >
          <div className="rce-mbox-body" onContextMenu={onContextMenu}>
            {forwarded && (
              <div
                className={classNames(
                  'rce-mbox-forward',
                  {
                    'rce-mbox-forward-right': position === 'left',
                  },
                  {
                    'rce-mbox-forward-left': position === 'right',
                  },
                )}
                onClick={onForwardClick}
              >
                <ForwardIcon />
              </div>
            )}

            {replyButton && (
              <div
                className={classNames(
                  'rce-mbox-forward',
                  forwarded
                    ? {
                        'rce-mbox-reply-btn-right': position === 'left',
                        'rce-mbox-reply-btn-left': position === 'right',
                      }
                    : {
                        'rce-mbox-forward-right': position === 'left',
                        'rce-mbox-forward-left': position === 'right',
                      },
                )}
                onClick={onReplyClick}
              >
                <MdMessage />
              </div>
            )}

            {(title || avatar) && (
              <div
                style={titleColor ? { color: titleColor } : undefined}
                onClick={onTitleClick}
                className={classNames('rce-mbox-title', {
                  'rce-mbox-title--clear': type === 'text',
                })}
              >
                {avatar && <Avatar letterItem={letterItem} src={avatar} />}
                {title && <span>{title}</span>}
              </div>
            )}

            {reply && (
              <ReplyMessage
                photoURL={reply.photoURL}
                title={reply.title}
                titleColor={reply.titleColor}
                message={reply.message}
                onClick={onReplyMessageClick}
              />
            )}

            {type === 'text' && <div className="rce-mbox-text">{text}</div>}

            {() => {
              if (type === 'location') {
                const {
                  onOpen,
                  data,
                  target,
                  href,
                  apiKey,
                  src,
                  zoom,
                  markerColor,
                } = props as LocationMessageProps;
                return (
                  <LocationMessage
                    onOpen={onOpen}
                    data={data}
                    target={target}
                    href={href}
                    apiKey={apiKey}
                    src={src}
                    zoom={zoom}
                    markerColor={markerColor}
                    text={text}
                  />
                );
              }
            }}

            {() => {
              if (type === 'photo') {
                const {
                  onOpen,
                  onDownload,
                  onLoad,
                  onPhotoError,
                  data,
                } = props as PhotoMessageProps;
                return (
                  <PhotoMessage
                    onOpen={onOpen}
                    onDownload={onDownload}
                    onLoad={onLoad}
                    onPhotoError={onPhotoError}
                    data={data}
                    text={text}
                  />
                );
              }
            }}

            {() => {
              if (type === 'file') {
                const { onOpen, onDownload, data } = props as FileMessageProps;
                return (
                  <FileMessage
                    onOpen={onOpen}
                    onDownload={onDownload}
                    data={data}
                    text={text}
                  />
                );
              }
            }}

            {() => {
              if (type === 'spotify') {
                const {
                  width,
                  height,
                  theme,
                  view,
                  uri,
                } = props as SpotifyMessageProps;
                return (
                  <SpotifyMessage
                    width={width}
                    height={height}
                    theme={theme}
                    view={view}
                    uri={uri || text}
                  />
                );
              }
            }}

            <div
              className={classNames(
                'rce-mbox-time',
                { 'rce-mbox-time-block': thatAbsoluteTime },
                { 'non-copiable': !copiableDate },
              )}
              data-text={copiableDate ? undefined : dateText}
            >
              {copiableDate && dateText}
              {status && (
                <span className="rce-mbox-status">
                  {status === 'waiting' && <MdIosTime />}
                  {status === 'sent' && <MdCheck />}
                  {status === 'received' && <IoDoneAll />}
                  {status === 'read' && <IoDoneAll color="#4FC3F7" />}
                </span>
              )}
            </div>
          </div>

          {notch &&
            (position === 'right' ? (
              <svg
                className={classNames('rce-mbox-right-notch', {
                  'message-focus': focus,
                })}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M0 0v20L20 0" />
              </svg>
            ) : (
              <div>
                <svg
                  className={classNames('rce-mbox-left-notch', {
                    'message-focus': focus,
                  })}
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <defs>
                    <filter id="filter1" x="0" y="0">
                      <feOffset
                        result="offOut"
                        in="SourceAlpha"
                        dx="-2"
                        dy="-5"
                      />
                      <feGaussianBlur
                        result="blurOut"
                        in="offOut"
                        stdDeviation="3"
                      />
                      <feBlend in="SourceGraphic" in2="blurOut" mode="normal" />
                    </filter>
                  </defs>
                  <path d="M20 0v20L0 0" filter="url(#filter1)" />
                </svg>
              </div>
            ))}
        </div>
      )}
    </div>
  );
};

export default MessageBox;
