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

export const MessageList: React.FC<MessageListProps> = props => {
  const [scrollBottom, setScrollBottom] = useState(0);
  const [downButton, setDownButton] = useState(false);
  const messageListRef = useRef<HTMLDivElement>(null);

  const {
    dataSource,
    className,
    toBottomHeight = 300,
    lockable,
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
  } = props;

  const checkScroll = () => {
    const e = messageListRef.current;
    if (!e) return;

    if (toBottomHeight === '100%' || scrollBottom < toBottomHeight) {
      // scroll to bottom
      e.scrollTop = e.scrollHeight;
    } else {
      if (lockable === true) {
        e.scrollTop = e.scrollHeight - e.offsetHeight - scrollBottom;
      }
    }
  };

  const dataSourceLength = dataSource.length;

  const getBottom = (e: HTMLDivElement) => {
    return e.scrollHeight - e.scrollTop - e.offsetHeight;
  };

  useEffect(() => {
    if (!messageListRef.current) {
      return;
    }
    setScrollBottom(getBottom(messageListRef.current));
    checkScroll();
  }, [dataSourceLength]);

  const handleScroll = (e: React.UIEvent<HTMLDivElement>) => {
    var bottom = getBottom(messageListRef.current!);
    if (toBottomHeight === '100%' || bottom > toBottomHeight) {
      if (downButton) {
        setDownButton(true);
        setScrollBottom(bottom);
      }
    } else {
      if (downButton) {
        setDownButton(false);
        setScrollBottom(bottom);
      }
    }

    onScroll?.(e);
  };

  const toBottom = (e: React.SyntheticEvent<HTMLDivElement>) => {
    if (!messageListRef.current) {
      return;
    }
    onDownButtonClick?.(e);
  };

  return (
    <div className={classNames(['rce-container-mlist', className])}>
      <div ref={messageListRef} onScroll={handleScroll} className="rce-mlist">
        {dataSource.map((x, i) => (
          <MessageBox
            key={i}
            {...x}
            onOpen={(e: CallbackEvent) => onOpen?.(x, i, e)}
            //@ts-expect-error
            onPhotoError={e => onPhotoError?.(x, i, e)}
            onDownload={(e: CallbackEvent) => onDownload?.(x, i, e)}
            onTitleClick={e => onTitleClick?.(x, i, e)}
            onForwardClick={e => onForwardClick?.(x, i, e)}
            onReplyClick={e => onReplyClick?.(x, i, e)}
            onReplyMessageClick={e => onReplyMessageClick?.(x, i, e)}
            onClick={e => onClick?.(x, i, e)}
            onContextMenu={e => onContextMenu?.(x, i, e)}
            onMessageFocused={e => onMessageFocused?.(x, i, e)}
          />
        ))}
      </div>
      {props.downButton === true && downButton && toBottomHeight !== '100%' && (
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

export default MessageList;
