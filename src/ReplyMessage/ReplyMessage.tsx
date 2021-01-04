import classNames from 'classnames';
import React from 'react';
import './ReplyMessage.css';

export type ReplyMessageProps = {
  photoURL?: string;
  title?: string;
  titleColor?: string;
  message?: string;
  onClick?: React.EventHandler<React.MouseEvent<HTMLDivElement>>;
};

export const ReplyMessage: React.FC<ReplyMessageProps> = ({
  photoURL,
  title,
  titleColor,
  message,
  onClick,
}) => (
  <div
    className={classNames('rce-mbox-reply', {
      'rce-mbox-reply-border': !!titleColor,
    })}
    style={titleColor ? { borderColor: titleColor } : undefined}
    onClick={onClick}
  >
    <div className="rce-mbox-reply-left">
      <div
        style={titleColor ? { color: titleColor } : undefined}
        className="rce-mbox-reply-owner"
      >
        {title || 'Unknown'}
      </div>
      <div className="rce-mbox-reply-message">{message || '...'}</div>
    </div>
    {photoURL && (
      <div className="rce-mbox-reply-right">
        <img src={photoURL} alt="" />
      </div>
    )}
  </div>
);
