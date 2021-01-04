import classNames from 'classnames';
import React, { useState, useEffect, useRef, SyntheticEvent } from 'react';
import { FaChevronDown } from 'react-icons/fa';
import { MessageBox, MessageBoxProps } from '../MessageBox/MessageBox';
import './MessageList.css';

type CallbackEvent = SyntheticEvent;

type CallbackFn<T = CallbackEvent> = (
  props: MessageBoxProps,
  index: number,
  e: T,
) => void;

export type MessageListProps = {
  className?: string;
  dataSource: MessageBoxProps[];
  lockable?: boolean;
  toBottomHeight?: number | '100%';
  downButton?: boolean;
  downButtonBadge?: number;
  onScroll?: React.EventHandler<React.UIEvent<HTMLDivElement>>;
  onDownButtonClick?: React.EventHandler<React.SyntheticEvent<HTMLDivElement>>;
  onOpen?: CallbackFn;
  onPhotoError?: CallbackFn;
  onDownload?: CallbackFn;
  onTitleClick?: CallbackFn;
  onMessageFocused?: CallbackFn<MessageBoxProps>;
  onForwardClick?: CallbackFn;
  onReplyClick?: CallbackFn;
  onReplyMessageClick?: CallbackFn;
  onClick?: CallbackFn;
  onContextMenu?: CallbackFn;
};

export const MessageList: React.FC<MessageListProps> = ({
  dataSource,
  className,
  toBottomHeight = 300,
  lockable,
  downButton,
  downButtonBadge,
  onScroll,
  onDownButtonClick,
  onOpen,
  onPhotoError,
  onDownload,
  onTitleClick,
  onMessageFocused,
  onForwardClick,
  onReplyClick,
  onReplyMessageClick,
  onClick,
  onContextMenu,
}) => {
  const [scrollBottom, setScrollBottom] = useState(0);
  const [downButtonActive, setDownButtonActive] = useState(false);
  const messageListRef = useRef<HTMLDivElement>(null);

  const dataSourceLength = dataSource.length;

  const getBottom = (e: HTMLDivElement) => {
    return e.scrollHeight - e.scrollTop - e.offsetHeight;
  };

  useEffect(() => {
    if (!messageListRef.current) {
      return;
    }
    setScrollBottom(getBottom(messageListRef.current));

    const checkScroll = () => {
      const e = messageListRef.current;
      if (!e) {
        return;
      }

      if (toBottomHeight === '100%' || scrollBottom < toBottomHeight) {
        // scroll to bottom
        e.scrollTop = e.scrollHeight;
      } else {
        if (lockable) {
          e.scrollTop = e.scrollHeight - e.offsetHeight - scrollBottom;
        }
      }
    };

    setTimeout(() => checkScroll(), 10);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dataSourceLength]);

  const handleScroll = (e: React.UIEvent<HTMLDivElement>) => {
    const bottom = getBottom(messageListRef.current!);
    if (toBottomHeight === '100%' || bottom > toBottomHeight) {
      if (downButton) {
        setDownButtonActive(true);
        setScrollBottom(bottom);
      }
    } else {
      if (downButton) {
        setDownButtonActive(false);
        setScrollBottom(bottom);
      }
    }

    onScroll?.(e);
  };

  const toBottom = (e: React.SyntheticEvent<HTMLDivElement>) => {
    if (!messageListRef.current) {
      return;
    }
    messageListRef.current.scrollTo({
      top: messageListRef.current.scrollHeight,
      behavior: 'smooth',
    });
    onDownButtonClick?.(e);
  };

  return (
    <div className={classNames(['rce-container-mlist', className])}>
      <div ref={messageListRef} onScroll={handleScroll} className="rce-mlist">
        {dataSource.map((x, i) => {
          return (
            <MessageBox
              key={x.id ?? i}
              {...x}
              onOpen={(e: CallbackEvent) => onOpen?.(x, i, e)}
              //@ts-expect-error weird types
              onPhotoError={e => onPhotoError?.(x, i, e)}
              onDownload={(e: CallbackEvent) => onDownload?.(x, i, e)}
              onTitleClick={e => {
                x.onTitleClick?.(e);
                onTitleClick?.(x, i, e);
              }}
              onForwardClick={e => {
                x.onForwardClick?.(e);
                onForwardClick?.(x, i, e);
              }}
              onReplyClick={e => {
                x.onReplyClick?.(e);
                onReplyClick?.(x, i, e);
              }}
              onReplyMessageClick={e => {
                x.onReplyMessageClick?.(e);
                onReplyMessageClick?.(x, i, e);
              }}
              onClick={e => {
                x.onClick?.(e);
                onClick?.(x, i, e);
              }}
              onContextMenu={e => {
                x.onContextMenu?.(e);
                onContextMenu?.(x, i, e);
              }}
              onMessageFocused={e => {
                x.onMessageFocused?.(e);
                onMessageFocused?.(x, i, e);
              }}
            />
          );
        })}
      </div>
      {downButton && downButtonActive && toBottomHeight !== '100%' && (
        <div className="rce-mlist-down-button" onClick={toBottom}>
          <FaChevronDown />
          {downButtonBadge && (
            <span className="rce-mlist-down-button--badge">
              {downButtonBadge}
            </span>
          )}
        </div>
      )}
    </div>
  );
};
